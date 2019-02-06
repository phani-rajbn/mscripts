var app = angular.module('mainApp',[]);
app.controller('empController', function($scope){
    $scope.nameIsInvalid = false;
    $scope.addressIsInvalid = false;
    $scope.emp = {};
    $scope.emp.Name ="Phaniraj";
    $scope.emp.Address ="Bangalore";
 $scope.reset = function () {

 }

 $scope.submit = function () {
     if(!$scope.regForm.empName.$valid){
         $scope.nameIsInvalid = true;
         return;
     }
     if (!$scope.regForm.empAddress.$valid) {
         $scope.addressIsInvalid = true;
         return;
     }
     if ($scope.regForm.empName.$valid && $scope.regForm.empAddress.$valid)
           alert($scope.emp.Name + " has been admitted");
 }
});