angular.module('beersApp')
.controller('descriptionController', function ($scope, apiService) {
  
  $scope.getDescription = function () {
  	console.log('button was clicked')
  	// var query = $scope.beerQuery
  	// console.log(query)
  	// apiService.getBeers(query)
  	//   .then(function(response) {
  	//     console.log(response)
  	//   })
  }
})

