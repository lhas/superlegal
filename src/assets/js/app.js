var superLegalApp = angular.module('superLegalApp', ['ngRoute', 'superLegalControllers']);
  
superLegalApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'home.html',
        controller: 'HomeController'
      }).
      when('/sobre-nos', {
        templateUrl: 'sobre-nos.html',
        controller: 'SobreNosController'
      }).
      when('/contato', {
        templateUrl: 'contato.html',
        controller: 'ContatoController'
      }).
      otherwise({
        redirectTo: '/home'
      });

      // use the HTML5 History API
      $locationProvider.html5Mode(true);
  }]);