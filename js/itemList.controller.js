(function() {
'use strict';

angular.module('RestroApp')
.controller('ItemsListController', ItemsListController);

ItemListController.$inject = ['data'];
function ItemsListController(data) {
    var itemList = this;
    itemList.items = data.menu_items;
    itemList.category = data.category;
}
})();
