/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller('PnLController', function($scope, $http, $interval){ 
   
    
    $interval(function(){
        
        $http.get('portfoliodata.json').then(function(response) {
            data = response.data; 
            
            $scope.pnldataModel = data;
            $scope.pnldataModelUpdated = $scope.pnldataModel[0]
//            $scope.pnldataModelUpdated = $scope.pnldataModelUpdated.slice(5,18);
//            
//            var chartDate = {}
//            for (var key in $scope.pnldataModelUpdated);
//            {
//                console.log("sector: " + key + " exposure: " + $scope.pnldataModelUpdated[key]);
//                
//            }
//            console.log($scope.pnldataModelUpdated);
        
        },function(err){throw err});        
    },5000);
    
    
});
