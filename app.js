(function(){
'use strict';
angular.module('myFirstApp',[])

// .controller('MyFirstController',function($scope){
//   $scope.name="Fatema";
//   $scope.sayHello=function(){
//     return "Hello Angular";
//   };
// });

.controller('NameCalculatorController',function($scope,$filter){
  $scope.name="";
  $scope.totalValue=0;

  $scope.displayNumeric=function(){
    var totalNameValue=calculateNumericForString($scope.name);
    $scope.totalValue=totalNameValue;
  };

  $scope.upper=function (){
    var upCase=$filter('uppercase');
    $scope.name=upCase($scope.name);
  };

  function calculateNumericForString(string){
    var totalStringValue=0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue+=string.charCodeAt(i);
    }
    return totalStringValue;
  }
});
})();
