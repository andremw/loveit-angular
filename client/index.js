!function(window, document, undefined) {
    'use strict';

    var app = angular.module('loveitApp', ['file-directives']);

    app.directive('imageList', function () {
        return {
            restrict: 'E',
            templateUrl: './libs/home/image-list.html'
        };
    });

    app.controller('HomeController', ['$http', '$scope', function ($http, $scope) {
        $scope.images = [];

        $scope.$watch('images', function (newValue, oldValue) {
            if (newValue.length) {
                var newValues = newValue.slice(oldValue.length, newValue.length);
                // request to the API to update the other users passing just the new values
            }
        });

    }]);
}(window, document);
