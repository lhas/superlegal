var superLegalControllers = angular.module('superLegalControllers', []);

superLegalControllers.controller('HeaderController', ['$scope', '$location', function($scope, $location) {
  $scope.isActive = function (viewLocation) { 
    return viewLocation === $location.path();
  };
}]);

superLegalControllers.controller('HomeController', ['$scope', function($scope) {
     
    $scope.message = 'This is Add new order screen';
}]);
 
 
superLegalControllers.controller('SobreNosController', ['$scope', function($scope) {
 
    $scope.message = 'This is Show orders screen';
}]);