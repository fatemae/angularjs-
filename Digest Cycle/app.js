(function(){
'use strict';

angular.module('CounterApp',[])
.controller('CounterCtrl',CounterCtrl);

CounterCtrl.$inject=['$scope'];
function CounterCtrl($scope){
  $scope.onceCounter=0;
  $scope.upCounter=0;
  $scope.name="Fatema";

  $scope.showNumberOfWatchers=function(){
    //console.log($scope);
    console.log('# of watchers:', $scope.$$watchersCount);

  };

  $scope.countOnce=function(){
    $scope.onceCounter=1;
  };

  $scope.incrementCounter=function(){
    $scope.upCounter++;
  };

  $scope.$watch(function(){
    console.log("Digest Loop Fired!!");
  });

  // $scope.$watch('onceCounter', function (newValue,oldValue){
  //   console.log("onceCounter old Value: ",oldValue);
  //   console.log("onceCounter new Value: ",newValue);
  // });
  //
  // $scope.$watch('upCounter', function (newValue,oldValue){
  //   console.log("upCounter old Value: ",oldValue);
  //   console.log("upCounter new Value: ",newValue);
  // });

}
})();
