(function () {
  'use strict';

  angular.module('data')
  .service('RestroAppService', RestroAppService)

  RestroAppService.$inject = ['$http']
  function RestroAppService($http) {
    var service = this;

    service.getCategories = function () {

        var categories = $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/categories.json")
      }).then(function (response) {
          return response.data;
      })
      return categories;
    }

    service.getItemsByCategories = function (categoryShortName) {

      var data = $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
        params: {
          category: categoryShortName
        }
      }).then(function (response) {
          return response.data;
      })
      return data;
    }
  }

})();
