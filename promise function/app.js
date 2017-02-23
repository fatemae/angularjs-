(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController)
.service('ShoppingListService', ShoppingListService)
.service('WeightLossFilterService',WeightLossFilterService);

ShoppingListController.$inject = ['ShoppingListService'];
function ShoppingListController(ShoppingListService) {
  var list = this;
  list.items = ShoppingListService.getItems();
  list.itemName = "";
  list.itemQuantity = "";

  list.addItem = function () {
    ShoppingListService.addItem(list.itemName, list.itemQuantity);
  };

  list.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
  };
}


ShoppingListService.$inject=['$q','WeightLossFilterService'];
function ShoppingListService($q,WeightLossFilterService) {
  var service = this;

  // List of shopping items
  var items = [];

  // service.addItem = function (itemName, quantity) {
  //   var promise=WeightLossFilterService.checkName(itemName);
  //
  //   promise.then(function(result){
  //     var nextPromise=WeightLossFilterService.checkQuantity(quantity);
  //
  //     nextPromise.then(function(result){
  //       var item = {
  //         name: itemName,
  //         quantity: quantity
  //       };
  //       items.push(item);
  //     },function (errorResponse) {
  //       console.log(errorResponse.message);
  //     });
  //
  //   },function (errorResponse) {
  //     console.log(errorResponse.message);
  //   });
  //
  // };


//more readable form of asynchronous code
  // service.addItem=function (name,quantity) {
  //   var promise=WeightLossFilterService.checkName(name);
  //
  //   promise.then(function (response) {
  //     return WeightLossFilterService.checkQuantity(quantity);
  //   })
  //   .then(function (response) {
  //     var item={
  //       name:name,
  //       quantity: quantity
  //     };
  //     items.push(item);
  //   })
  //   .catch(function (errorResponse) {
  //     console.log(errorResponse.message);
  //   });
  // };


//synchronous running of both promise
  service.addItem=function (name,quantity) {
    var namePromise=WeightLossFilterService.checkName(name);
    var quantityPromise=WeightLossFilterService.checkQuantity(quantity);

    $q.all([namePr omise,quantityPromise])
    .then(function (response){
      var item={
        name:name,
        quantity:quantity
      };
      items.push(item);
    })
    .catch(function (errorResponse) {
      console.log(errorResponse.message);
    });
  };

  service.removeItem = function (itemIdex) {
    items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return items;
  };
}

WeightLossFilterService.$inject=['$q','$timeout'];
function WeightLossFilterService($q,$timeout){
  var service=this;

  service.checkName=function (name) {
    var deferred=$q.defer();

    var result={message:""};

    $timeout(function () {
      if(name.toLowerCase().indexOf('cookie')=== -1){
        deferred.resolve(result)
      }else{
        result.message="Stay away from Cookies, Yaakov";
        deferred.reject(result);
      }
    },3000);
    return deferred.promise;
  };

  service.checkQuantity=function (quantity) {
    var deferred=$q.defer();

    var result={message:""};

    $timeout(function () {
      if(quantity<=5){
        deferred.resolve(result)
      }else{
        result.message="That's too much, Yaakov";
        deferred.reject(result);
      }
    },1000);
    return deferred.promise;
  };
}
})();
