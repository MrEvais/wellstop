/**
 * Created by 14521 on 2016/10/1.
 */
myapp.controller('findvehicleCtyl',function($scope){
    $scope.aa=false;
    $scope.caidan=function(){
        if($scope.aa==false){
            $scope.aa=true;
        }else {
            $scope.aa=false;
        }
    }
});