/**
 * Created by hxsd on 2016/9/30.
 */
var myapp=angular.module("myapp",["ionic","signin"]);
myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state('home',{
        "url":"/home",
        cache:false,
        "templateUrl":"views/home/home.html",
        "controller":""
    }).state('findvehicle',{
        "url":"/findvehicle",
        "templateUrl":"views/findvehicle/findvehicle.html",
        "controller":"findvehicleCtyl"
    }).state('sweeppay',{
        "url":"/sweeppay",
        "templateUrl":"views/sweeppay/sweeppay.html",
        "controller":"sweeppayCtyl"
    }).state('register',{
        "url":"/register",
        "templateUrl":"views/register/register.html",
        "controller":"registerCtyl"
    }).state('signin',{
        "url":"/signin",
        "templateUrl":"views/signin/signin.html",
        "controller":"signinCtyl"
    }).state('meofroll',{
        "url":"/meofroll",
        cache:false,
        "templateUrl":"views/meofroll/meofroll.html",
        "controller":"meofrollCtyl"
    }).state('install',{
        "url":"/install",
        "templateUrl":"views/install/install.html",
        "controller":"installCtyl"
    }).state('guide',{
        "url":"/guide",
        "templateUrl":"views/guide/guide.html",
        "controller":"guideCtyl"
    }).state('Searchvehicle',{
        "url":"/Searchvehicle",
        "abstract": true,
        "templateUrl":"views/Searchvehicle/Searchvehicle.html",
        "controller":"SearchvehicleCtyl"
    }).state("Searchvehicle.sweep", {
        url: "/sweep",
        views: {
            "Searchvehicle": {
                templateUrl: "views/Searchvehicle/sweep/sweep.html"
            }
        }
    }).state('Searchvehicle.photograph',{
        "url":"/photograph",
        views: {
            "Searchvehicle": {
                templateUrl: "views/Searchvehicle/photograph/photograph.html"
            }
        }
    }).state('Searchvehicle.platenumber',{
        "url":"/platenumber",
        views: {
            "Searchvehicle": {
                templateUrl: "views/Searchvehicle/platenumber/platenumber.html"
            }
        }
    })




    $urlRouterProvider.otherwise("/guide")
});
myapp.controller('myCtyl',function($scope,$http,$timeout,$ionicModal){

    //是否登录判断;
    $scope.login=false;
    $scope.login2=true;
    $scope.jinduright=94;
    $scope.tianshu=0;
    $scope.tianshuright=87;
    $scope.qiandao=true;
    $scope.paizhao=true;
    $scope.jp11=true;
    $scope.jp22=true;
    //确认登陆弹窗
    $ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $scope,
        animation: 'scale-in'
    }).then(function (modal) {
        $scope.modal = modal;

    });
    $scope.openModal = function () {
        $scope.modal.show();
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
    };

    //签到函数
    $scope.ts=function(){
        if($scope.login==true){
            if($scope.tianshu<50){
                $scope.jinduright-=1.70;
                $scope.tianshu++;
                $scope.tianshuright-=1.68;
            }else if($scope.tianshu>=50){
                $scope.tianshu++;
            }
            $scope.qiandao=false;
        }else {
            $scope.openModal()
        }
    }
    run()
    function run(){
        $scope.denglu=function(){
            if($scope.login==false){
                if($scope.login2){
                    $http.get("json/userinfo.json").success(function(data){
                        console.log(data);
                        $scope.arr=data;
                        $scope.jinduright=94-($scope.arr.geren.signin*1.70);
                        $scope.tianshu=$scope.arr.geren.signin;
                        $scope.tianshuright=87-(($scope.arr.geren.signin*1.68));
                    });
                    $scope.login2=false;
                    $scope.login=true;
                    $scope.qiandao=true;
                }
            }
        }
    }

    $scope.lingqu=function(money){
        $scope.arr.geren.prize.push({
            "money": money,
            "state": false,
            "pastdue":false,
            "time": {
                "start": new Date(),
                "finish": "2016-12-06 00:00:00"
            }
        })
    };

    $scope.paizhaos=function(){
        $scope.paizhao=false;
    }
    $scope.paizhaosfhui=function(){
        $scope.paizhao=true;
    }
    $scope.jp1=function(){
        $scope.jp11=false;
    }
    $scope.jp2=function(){
        $scope.jp22=false;
    }

    $scope.tuichu=function(){
        $scope.login=false;
        $scope.login2=true;
        $scope.jinduright=94;
        $scope.tianshu=0;
        $scope.tianshuright=87;
        $scope.qiandao=true;
        $scope.paizhao=true;
        $scope.jp11=true;
        $scope.jp22=true;
    }
});


