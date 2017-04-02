videoApp
.controller('headerController', ['$scope', '$location', function headerController($scope, $location) {

  $scope.navitem1 = "Home";
  $scope.navitem2 = "History";

  $scope.goHome = function() {
    $location.url('/home');
  }

  $scope.getMoviesHistory = function() {
    $location.url('/history');
  }
}]);
