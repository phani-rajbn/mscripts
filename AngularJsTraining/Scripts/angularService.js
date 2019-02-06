//create a file called angularService.js to read the data...
//services in angular are blocks of code that are to be used in multiple controllers and modules. 
var app = angular.module('serviceApp',[]);
var url = "http://localhost:1234";
app.service('empService', function($http){
    this.getAll = function(){
        return $http.get(url);
    }
});

//create a controller to use the service into the UI...
app.controller("empController", function($scope, empService){
    loadRecords();
    $scope.finder = "";
    function loadRecords(){
        var promise = empService.getAll();//returns a async object called promise..
        promise.then(function(values){
            $scope.employees = values.data;
            console.log(values);
        })
    }

    $scope.find = function(id){
        $scope.selected = $scope.employees.find(e=>e.empid == id);
    }
})
