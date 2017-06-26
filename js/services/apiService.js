angular.module('beersApp')
    .factory('apiService', function($http) {

      function getBeers(query) {
        var urlSearchBeer = 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + query
        return $http.get(urlSearchBeer)
          .then(response => response.data)
      }

      function beerDescription(idBeer) {
        var urlSearchDescription = 'https://quiet-inlet-67115.herokuapp.com/api/beer/' + idBeer
        return $http.get(urlSearchDescription)
          .then(response => response.data)
      }


      return {
        getBeers: getBeers,
        beerDescription: beerDescription
      }
    })


