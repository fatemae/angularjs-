(function(){
  'use strict';

  angular.module('ShoppingListDirectiveApp',[])
  .controller('ShoppingListController1',ShoppingListController1)
  .controller('ShoppingListController2',ShoppingListController2)
  .factory('ShoppingListFactory',ShoppingListFactory)
  .directive('listItemDescription',ListItemDescription)
  .directive('listItem',ListItem);

  function ListItem() {
    var ddo={
      templateUrl:'listItem.html'
    };
  }


  function ListItemDescription() {
    var ddo={
      template:'{{item.quantity}} of {{item.name}}'
    };
    return ddo;
  }

  // LIST #1 -controller
  ShoppingListController1.$inject=['ShoppingListFactory'];
  function ShoppingListController1(ShoppingListFactory) {
    var list=this;

    var shoppingList=ShoppingListFactory();

    list.items=shoppingList.getItems();

    list.itemName="";
    list.itemQuantity="";

    list.addItem=function () {
      shoppingList.addItem(list.itemName,list.itemQuantity);
    };

    list.removeItem=function(itemIndex){
      shoppingList.removeItem(itemIndex);
    };
  }

  // LIST #2 -controller
  ShoppingListController2.$inject=['ShoppingListFactory'];
  function ShoppingListController2(ShoppingListFactory) {
    var list=this;

    var shoppingList=ShoppingListFactory(3);

    list.items=shoppingList.getItems();

    list.itemName="";
    list.itemQuantity="";

    list.addItem=function () {
      try{
        shoppingList.addItem(list.itemName,list.itemQuantity);
      }catch(error){
        list.errorMessage=error.message;
      }
    };

    list.removeItem=function(itemIndex){
      shoppingList.removeItem(itemIndex);
    };
  }

  function ShoppingListService(maxItems){
    var service=this;

    var items=[];

    service.addItem=function(itemName,itemQuantity){
      if((maxItems===undefined) ||
      (maxItems!==undefined) &&
      (items.length<maxItems)){
        var item={
          name:itemName,
          quantity:itemQuantity
        };
        items.push(item);
      }else{
        throw new Error("Max items ("+maxItems+")reaches.");
      }
    };

    service.removeItem=function(itemIndex){
      items.splice(itemIndex,1);
    };

    service.getItems=function() {
      return items;
    };
  }

  function ShoppingListFactory() {
      var factory=function(maxItems){
        return new ShoppingListService(maxItems);
      };
      return factory;
  }
})();
