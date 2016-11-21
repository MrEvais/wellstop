/**
 * Created by 14521 on 2016/10/2.
 */
angular.module('signin',[]).controller('signinCtyl', function($scope, $ionicModal,$timeout) {
    $ionicModal.fromTemplateUrl('signinprize.html', {
        scope: $scope,
        animation: 'scale-in'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function () {
        $scope.modal.show();
        $timeout(function(){
            $scope.modal.hide();
            $scope.lingqu()
            console.log($scope.arr.geren.prize)
        },3000)
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
    };

})