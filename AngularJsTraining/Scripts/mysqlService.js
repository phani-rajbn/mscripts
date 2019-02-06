var app = angular.module('serviceApp', []);
var url = "http://localhost:1234";
app.service('empService', function ($http) {
    this.getAll = function () {
        return $http.get(url);
    }

    this.get = function(id){
        return $http.get(url + '/' + id);
    }

    this.insert = function(emp){
        return $http.post(url, emp);
    }
});

app.controller("empController", function($scope, empService){
    getRecords();
    function getRecords() {
        var promise = empService.getAll();
        promise.then((values)=>{
            this.employees = values.data;
            console.log(values);
        })
    }
    $scope.emp = {}
    $scope.emp.EmpName ="SampleName";
    $scope.emp.EmpCity ="SampleCity";
    $scope.insert = function(){
        debugger;
        empService.insert($scope.emp).then(function(values){
            alert("values.data");
        });
    }
})