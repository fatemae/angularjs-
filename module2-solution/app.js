(function(){
  'use strict';

  angular.module("ShoppingListCheckOff",[])
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .controller('ToBuyController',ToBuyController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject=['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuyCtrl=this;

    toBuyCtrl.items=ShoppingListCheckOffService.getToBuyItems();

    toBuyCtrl.buyItem=function (itemIndex) {
          ShoppingListCheckOffService.toBuy2Bought(itemIndex);
    };
  }

  AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtCtrl=this;

    boughtCtrl.items=ShoppingListCheckOffService.getBoughtItems();

  }

  function ShoppingListCheckOffService(){
    var service=this;

    var toBuy=[
      {name:"Cookies",  quantity:20},
      {name:"Chips",  quantity:8},
      {name:"French Fries",  quantity:15},
      {name:"Burger",  quantity:2},
      {name:"Hot Dog",  quantity:5}];

    var bought=[];

    service.getToBuyItems=function () {
      return toBuy;
    };

    service.getBoughtItems=function () {
      return bought;
    };

    service.toBuy2Bought=function (itemIndex) {
      var item = {
        name: toBuy[itemIndex].name,
        quantity: toBuy[itemIndex].quantity
      };
      toBuy.splice(itemIndex,1);
      bought.push(item);
    };

  }

})();
