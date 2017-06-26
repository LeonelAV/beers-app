angular.module('beersApp')
  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'homeController'
      })
      .when('/description', {
        templateUrl: 'templates/description.html',
        controller: 'descriptionController'
      })
  })

