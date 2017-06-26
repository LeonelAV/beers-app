angular.module('beersApp')
  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'homeController'
      })
      .when('/beers', {
        templateUrl: 'templates/beers.html',
        controller: 'descriptionController'
      })
      .when('/description', {
        templateUrl: 'templates/description.html'
      })
  })

