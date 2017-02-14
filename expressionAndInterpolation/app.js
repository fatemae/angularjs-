(function(){
'use strict';

angular.module("feedApp",[])
.controller("MsgController",MsgController)
.filter('loves',lovesFilter)
.filter('truth',truthFilter);

MsgController.$inject=['$scope','lovesFilter','$filter'];
function MsgController($scope,lovesFilter,$filter){
  $scope.name="FATEMA";
  $scope.stateOfBeing="hungry";
  $scope.foodCost=.45;

  $scope.feedFatema=function(){
    $scope.stateOfBeing="full";
  }

  $scope.sayMessage=function(){
    var msg="Fatema likes to eat healthy food.";
    var output=$filter('uppercase')(msg);
    return output;
  }

  $scope.sayLovesMessage=function(){
    var msg="Fatema likes to eat healthy food.";
    msg=lovesFilter(msg);
    var output=$filter('uppercase')(msg);
    return output;
  }
}

function lovesFilter(){
  return function(input){
    input=input.replace("likes","loves");
    return input;
  };
}

function truthFilter(){
  return function(input,target,replace){
    input=input.replace(target,replace);
    return input;
  };
}

})();
