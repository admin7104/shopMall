/**
 * Created by admin7104 on 2016/10/28.
 */
//兼容性配置文件
angular.module('config', [])
  .config(function($ionicConfigProvider){
    //配置各个平台兼容
    $ionicConfigProvider.platform.android.tabs.position('bottom');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
  });
