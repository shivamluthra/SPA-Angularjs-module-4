(function () {
  'use strict';

  angular.module('RestroApp')
  .controller('CategoryListController', CategoryListController);

  CategoryListController.$inject = ['categories'];
  function CategoryListController(categories) {
    var categoryList = this;
    categoryList.categories = categories;
  }
})();
