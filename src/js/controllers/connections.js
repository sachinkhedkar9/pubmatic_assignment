skeleton.controller('connectionsController', ["$scope", "$http", function($scope, $http){
    console.log('in connectionsController');
    $http.get('data/dataConnection.json').then(function(response){
        $scope.connectionData = response.data;
        console.log('data recieved -- ', $scope.connectionData);
    }).then(function(error){
        console.log('error ', error);
    });        

}]);
