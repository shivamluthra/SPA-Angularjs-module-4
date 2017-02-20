(function () {
  'use strict';

  angular.module('RestroApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider']
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    //Redirection to Home Page
    $urlRouterProvider.otherwise('/');

    $stateProvider

      //Homepage
      .state('homepage', {
        url: '/',
        templateUrl: 'js/templates/homepage.template.html'
      })

      //Categories Page
      .state('categories', {
        url: '/categories',
        templateUrl: 'js/templates/categories.template.html',
        controller: 'CategoryListController as categoryList',
        resolve: {
                categories: ['RestroAppService', function (RestroAppService) {
                    return RestroAppService.getCategories();
                }]
            }
      })

      //Items list page
      .state('items', {
        url: '/items/{catShortName}',
        templateUrl: 'js/templates/items.template.html',
        controller: 'ItemsListController as itemList',
        resolve: {
          data: ['$stateParams','RestroAppService', function ($stateParams,RestroAppService) {
              return RestroAppService.getItemsByCategories($stateParams.catShortName);
          }]
        }
      })
  }
})();
