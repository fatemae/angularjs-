(function(){
  'use strict';

  angular.module('BindingApp',[])
  .controller('BindingController',BindingController);

  BindingController.$inject=['$scope'];
  function BindingController($scope){
    $scope.firstname="Fatema";
  //  $scope.fullname="";

    $scope.showNumberOfWatchers=function(){
      console.log("# of Watchers: ",$scope.$$watchersCount);
    }

    $scope.setFullname=function(){
      $scope.fullname=$scope.firstname+" "+"Engineeringwala";
    }

    $scope.logFirstname=function(){
      console.log("First name is: ",$scope.firstname);
    }

    $scope.logFullname=function(){
      console.log("Full name is : ",$scope.fullname);
    }

  }


})();
