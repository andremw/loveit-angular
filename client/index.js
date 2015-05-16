!function(window, document, undefined) {
    'use strict';

    var app = angular.module('loveitApp', ['file-directives', 'socket-factory']);

    app.directive('imageList', function () {
        return {
            restrict: 'E',
            templateUrl: './libs/home/image-list.html'
        };
    });

    app.controller('HomeController', ['$http', '$scope', 'mySocket', function ($http, $scope, mySocket) {

        var addToAllImages = (function addToAllImages(images) {
            for (var i = 0, iLen = images.length; i < iLen; i++) {
                this.allImages.unshift(images[i]);
            }
        }).bind(this);

        // used to keep register of all the uploaded images. this is the array
        // that is going to be displayed for the user
        this.allImages = [];

        // used to handle the images selected by the user
        $scope.images = [];

        $scope.$watch('images', function (newValue, oldValue) {

            // at the first time it's going to be === for initialization
            if (newValue !== oldValue && newValue.length) {
                var newValues = newValue.slice(oldValue.length, newValue.length);
                // request to the API to update the other users passing just the new values

                addToAllImages(newValues);

                mySocket.emit('new:images', newValues);

                $scope.images = [];
            }
        });

        mySocket.on('all:images', function (allImages) {
            if (allImages.length) {
                addToAllImages(allImages);
            }
        });

        mySocket.on('new:images', function (newImages) {
            if (newImages.length) {
                addToAllImages(newImages);
            }
        });

    }]);

}(window, document);
