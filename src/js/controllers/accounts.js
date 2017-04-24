skeleton.controller('accountsController', ["$scope", "$http", function($scope, $http){
    console.log('in accountsController');
    $http.get('data/dataAccount.json').then(function(response){
        $scope.accountData = response.data;
        console.log('data recieved -- ', $scope.accountData);
    }).then(function(error){
        console.log('error ', error);
    });        

}]);
