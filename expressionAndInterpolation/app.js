(function(){
'use strict';

angular.module("feedApp",[])
.controller("MsgController",MsgController);

MsgController.$inject=['$scope'];
function MsgController($scope){
  $scope.name="FATEMA";
  $scope.stateOfBeing="hungry";

  $scope.feedFatema=function(){
    $scope.stateOfBeing="full";
  }

  $scope.sayMessage=function(){
    return "Fatema likes to eat healthy food.";
  }

}


})();
