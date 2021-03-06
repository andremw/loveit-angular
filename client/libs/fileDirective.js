!function(window, document, undefined) {
    var app = angular.module('file-directives', []);

    app.directive('file', function () {
        return {
            restrict: 'E',
            template: '<input type="file" multiple/>',
            replace: true,
            require: 'ngModel',
            scope: {
                images: '='
            },
            link: function (scope, element, attr, ctrl) {
                var listener = function () {

                    scope.$apply(function () {

                        var inputElem = element[0],
                            files = inputElem.files,
                            file = null,
                            url = null,
                            result = [];

                        for (var i = 0; i < files.length; i++) {
                            file = files[i];
                            url = URL.createObjectURL(file);
                            result.push({
                                name: file.name,
                                type: file.type,
                                src: url
                            });
                        }

                        scope.images = result;
                    });
                };
                element.bind('change', listener);
            }
        };
    });
}(window, document);
