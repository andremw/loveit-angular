!function(window, document, undefined) {

    var app = angular.module('socket-factory', ['btford.socket-io']);

    app.factory('mySocket', function (socketFactory) {
        return socketFactory();
    });

}(window, document);
