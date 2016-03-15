'use strict';

angular.module('clientApp')

.controller('UploadExcelController', ['$scope', function ($scope) {
  var vm = this;
  
  vm.gridOptions = {};
  
  function reset1() {
    vm.gridOptions.data = [];
    vm.gridOptions.columnDefs = [];
  }
  
  vm.reset = reset1;
}])

.directive('fileread', [function () {
  return {
    scope: {
      opts: '='
    },
    link: function ($scope, $elm, $attrs) {
      $elm.on('change', function (changeEvent) {
        var reader = new FileReader();
        
        reader.onload = function (evt) {
          $scope.$apply(function () {
            var data = evt.target.result;
            
            var workbook = XLSX.read(data, {type: 'binary'});
            
            var headerNames = XLSX.utils.sheet_to_json( workbook.Sheets[workbook.SheetNames[0]], { header: 1 })[0];
            
            data = XLSX.utils.sheet_to_json( workbook.Sheets[workbook.SheetNames[0]]);
            
            $scope.opts.columnDefs = [];
            headerNames.forEach(function (h) {
              $scope.opts.columnDefs.push({ field: h });
            });
            $scope.opts.data = data;
            
            $elm.val(null);
            //below code returing the read-line count
            console.log("$scope.gridOptions.data.length -->"+$scope.opts.data.length);
          });
        };
        
        reader.readAsBinaryString(changeEvent.target.files[0]);
      });
    }
  };
}]);

