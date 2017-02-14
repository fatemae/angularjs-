(function(){
  'use strict';

  angular.module("LunchCheck",[])
  .controller("LunchCheckController",LunchCheckController);

  LunchCheckController.$inject=['$scope'];
  function LunchCheckController($scope){
    $scope.lunchMenu="";
    $scope.msg="";
    $scope.totalItems=0;

    $scope.checkItems=function(){
      var arrayMenu=$scope.lunchMenu.split(',');
      $scope.totalItems=arrayMenu.length;
      if ($scope.lunchMenu=="") {
        $scope.totalItems=0;
        $scope.msg="Please enter data first";
      } else if ($scope.totalItems<=3) {
        $scope.msg="Enjoy!";
      } else {
        $scope.msg="Too much!";
      }
    }
  }


})();
