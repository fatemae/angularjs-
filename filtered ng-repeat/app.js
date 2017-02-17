(function(){
  'use strict';

  angular.module('shoppingListApp',[])
  .controller("shoppingListController",shoppingListController);

  var shoppingList=
  ["Milk","Donuts","Cookies","Chocolate",
  "Peanut Butter","Pepto Bismol","Pepto Bismol(Chocolate Flavour)",
  "Pepto Bismol (Cookie Flavor)"];

  shoppingListController.$inject=['$scope'];
  function shoppingListController($scope){
    $scope.shoppingList=shoppingList;
  }

})();
