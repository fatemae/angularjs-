(function(){
'use strict';

angular.module('CounterApp',[])
.controller('CounterCtrl',CounterCtrl);

CounterCtrl.$inject=['$scope'];
function CounterCtrl($scope){

  $scope.showNumberOfWatchers=function(){
    console.log('# of watchers:', $scope.$$watchersCount);

  };

}
})();
