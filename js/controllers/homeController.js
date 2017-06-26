angular.module('beersApp')
.controller('homeController', function ($scope, $rootScope, $location, apiService) {
  $scope.title = 'hello WORLD'
  
  $scope.getBeer = function () {
  	console.log('button was clicked')
  	var query = $scope.beerQuery
  	console.log(query)
  	apiService.getBeers(query)
  	  .then(function(response) {
        $rootScope.beers = response
  	    console.log(response)
  	  })
      $location.path('/beers')
  }
})
