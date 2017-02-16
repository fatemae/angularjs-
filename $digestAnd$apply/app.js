(function(){
  'use strict';

  angular.module('CounterApp',[])
  .controller('CounterCtrl',CounterCtrl);

  CounterCtrl.$inject=['$scope','$timeout'];
  function CounterCtrl($scope,$timeout){
    $scope.counter=0;

    $scope.upCounter=function(){
      $timeout(function(){
          $scope.counter++;
          console.log("Counter Incremented");
      },2000);
    };

    // $scope.upCounter=function(){
    //   setTimeout(function(){
    //     $scope.$apply(function(){
    //       $scope.counter++;
    //       console.log("Counter Incremented");
    //     });
    //   },2000);
    // };

    // $scope.upCounter=function(){
    //   setTimeout(function(){
    //     $scope.counter++;
    //     console.log("Counter Incremented");
    //     $scope.$digest();
    //   },2000);
    // };

  }
})();
