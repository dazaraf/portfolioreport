/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller('PnLController', function($scope, $http, $interval){ 
   
    
    $interval(function(){
        
        var dataset = f;
        $http.get(dataset + 'table.json').then(function(response) {
            data = response.data; 
            
            //var strUser = e.options[e.selectedIndex].text;
            $scope.pnldataModel = data;
            $scope.pnldataModelUpdated = $scope.pnldataModel[0];
            console.log($scope.pnldataModelUpdated);
            
            console.log(f);
            
        },function(err){throw err});        
    },1000);
    
    
});
