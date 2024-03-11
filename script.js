var app = angular.module('hajoapp', []);

app.controller('hajocontroller', function($scope, $http) {
  $http.get('hajok.json').then(function(response) {
    $scope.hajok = response.data;
    console.log($scope.hajok)
  });


    


});
