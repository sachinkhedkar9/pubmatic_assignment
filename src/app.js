var skeleton = angular.module("skeletonApp",['ui.router']);

skeleton.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('login',{
    url: '/login/',
    templateUrl: 'views/essential/login.html',
    controller: 'loginController'
  }).state('pubmatic',{
    url: '/pubmatic/',
    templateUrl: 'views/pubmatic/index.html'
  });

  $urlRouterProvider.otherwise('/pubmatic/');                    
}]);


