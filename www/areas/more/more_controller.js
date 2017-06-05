// 我的页面
angular.module('more.controller', ['more.service'])
  .controller('MoreCtrl',function($scope,$window,AccountFty,$ionicPopup,$ionicActionSheet,$state) {//,$cordovaCamera

    $scope.AlertPopup=function(message) {
      var alertPopup = $ionicPopup.alert({
        title: '提示',
        template: message
      });
      alertPopup.then(function (res) {
        console.log('');
      });
    }
    //$scope.Gomovielist = function(){
    //  //$route.updateParams({category: 'in_theaters', page: 1});
    //  console.log($window.location);
    //  //$window.location.href = 'http://localhost:63342/WebApp/shoppingMall/www/areas/app/index.html#/in_theaters/1';
    //  $state.go('test');
    //}

  })




