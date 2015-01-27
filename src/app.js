
var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'Home'
    })
    .otherwise({
      templateUrl: 'not-found.html'
    });
});

app.controller('Home', function ($scope) {});
