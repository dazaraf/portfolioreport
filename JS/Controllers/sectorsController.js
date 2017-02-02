/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
app.controller('sectorsController', function($scope, $http, $interval){ 
   
    
    $interval(function(){
        
        $http.get(f + 'chart.json').then(function(response) {
            data = response.data; 
            
            $scope.sectors = data[0];
            var sectArray = [];
            var entry;
            for (key in $scope.sectors){
                entry = {"sector": key, "exposure": $scope.sectors[key]};
                sectArray.push(entry);
            }
            
            $scope.chartData = sectArray;
        },function(err){throw err});        
    },1000);
    
    
});

