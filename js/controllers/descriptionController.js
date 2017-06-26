angular.module('beersApp')
.controller('descriptionController', function ($scope, $rootScope, $location, apiService) {
  
  $scope.getDescription = function () {
  	console.log('button was clicked')
  	var idBeer = $scope.idBeerSelected
  	console.log(idBeer)
  	apiService.beerDescription(idBeer)
  	  .then(function(response) {
  	    console.log(response)
  	    $rootScope.description = response.style.description
  	    $rootScope.image = response.labels.large
  	    $rootScope.nameSelected = response.name
  	  })
  	$location.path('/description')
  }

})

