(function () {
'use strict';

angular.module('RestroApp')
.component('categories', {
  templateUrl: 'templates/categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();
