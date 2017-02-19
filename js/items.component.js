(function () {
'use strict';

angular.module('RestroApp')
.component('items', {
  templateUrl: 'templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
