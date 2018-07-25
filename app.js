(function(){
    'use strict';
    //wont make mistake, it's an alert tell you where you do wrong
    angular.module('LunchCheck', [])

    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.items ="";
        $scope.message="";
        $scope.checklunch = function(){
            var item = $scope.items;
            
            if(item != ""){
                
                var items =item.split(',');
                var count = items.length;
                console.log(count);
                if(count>3 ){
                    $scope.message = "Too much!";   
                }else{
                    $scope.message="Enjoy!";
                }
            }else{
                $scope.message="No input data!!!"
            }
           
            
            
        }
    }
})();

