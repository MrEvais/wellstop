/**
 * Created by 14521 on 2016/10/1.
 */
myapp.controller('registerCtyl',function($scope){
    $scope.aa=false;
    $scope.state = false;
    $scope.register = function(){
        $scope.state = false;
    }
    $scope.into = function(){
        $scope.state = true;
    }
})

