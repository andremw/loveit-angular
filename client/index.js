!function(window, document, undefined) {
    'use strict';

    var app = angular.module('loveitApp', ['file-directives']);

    app.directive('imageList', function () {
        return {
            restrict: 'E',
            templateUrl: './libs/home/image-list.html'
        };
    });

    app.controller('HomeController', ['$http', function ($http) {
        this.images = [];

        Object.observe(this.images, function (changes) {
            console.log(changes);
        });
        // send request to API to fetch the uploaded image-list
    }]);
}(window, document);
