var superLegalApp = angular.module('superLegalApp', ['ngRoute']);
  
superLegalApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'home.html',
        controller: 'HomeController'
      }).
      when('/sobre-nos', {
        templateUrl: 'sobre-nos.html',
        controller: 'SobreNosController'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);

superLegalApp.controller('HeaderController', ['$scope', '$location', function($scope, $location) {
  $scope.isActive = function (viewLocation) { 
    return viewLocation === $location.path();
  };
}]);

superLegalApp.controller('HomeController', ['$scope', function($scope) {
     
    $scope.message = 'This is Add new order screen';
}]);
 
 
superLegalApp.controller('SobreNosController', ['$scope', function($scope) {
 
    $scope.message = 'This is Show orders screen';
}]);