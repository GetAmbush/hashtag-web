angular.module('Controllers')

.controller('LoginCtrl', function ($scope, $state, Auth) {
  $scope.login = function () {
    Auth.authenticate($scope.user).then(function () {
      if (Auth.authenticated()) {
        $state.transitionTo('feed');
      } else {
        alert('Invalid user or password');
      }
    });

    $scope.user = {};
  }
});