/**
 * Created by 14521 on 2016/10/3.
 */
myapp.controller('guideCtyl',function($scope,$ionicSlideBoxDelegate){
    $scope.config={enter:false}
    $scope.onSlideChanged=function(){
        if($ionicSlideBoxDelegate.currentIndex()==$ionicSlideBoxDelegate.slidesCount()-1){
            $scope.config.enter=true;
        }else {
            $scope.config.enter=false;
        }
    }
})