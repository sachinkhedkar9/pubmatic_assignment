skeleton.controller('loginController', ["$scope", "$location", "$http",
                               function( $scope, $location, $http){


    $scope.getUserData = function(){
        var userData;
        console.log('userdata - ', userData);
        return userData;
    };
    
    $scope.login = function(){
        $http.get('data/users.json').then(function(response){
            $scope.userLogin = response.data;

            if($scope.userLogin.username === $scope.loginUser.username &&
            $scope.userLogin.password === $scope.loginUser.password){
                console.log("logging in", $location.path());
                $scope.navigateToApp();
            }
            else{
                alert("Invalid credential entered");            
            }

        }).then(function(error){
            console.log('error ', error);
        });        

    };

    $scope.navigateToApp = function(){
        $location.path('/hds/');        
    };   
}]);