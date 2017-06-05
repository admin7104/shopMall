/**
 * Created by admin7104 on 2016/11/3.
 */
(function (angular) {
  'use strict';

  var module = angular.module('login.login_page', ['ngRoute']);

  module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/logon', {
      templateUrl: 'loginPage/logon.html',
      controller: 'LoginPageController'
    });
  }]);


  module.controller('LoginPageController', [
    '$scope',
    '$route',
    '$routeParams', function ($scope, $route, LoginConfig) {

      $scope.l_username = '';
      $scope.l_password = '';
      Bmob.initialize("dcbf28cf497ed4a0e488c4702d7e4368", "363dcb11d0a975c08c54bf50f465ad46");

      $scope.loginUser = function () {

        if ($scope.l_username === '' || $scope.l_password === '') {
          alert("请填写完用户名和密码");
        } else {
          var TestObject = Bmob.Object.extend("UserTable");
          var query = new Bmob.Query(TestObject);
          var testObject = new TestObject();
          query.find({
            success: function (results) {
              //alert("共查询到 " + results.length + " 条记录");
              // 循环处理查询到的数据
              for (var i = 0; i < results.length; i++) {
                var object = results[i];
                if (object.get('states')===true){
                  alert("当前已有账号登录");
                  return;
                }
              }
              for (var i = 0; i < results.length; i++) {
                var object = results[i];
                if (object.get('username') === $scope.l_username && object.get('password') === $scope.l_password) {//&&object.get('password')===$scope.password
                  alert('登录成功');
                  console.log(object.get('username') + '和' + object.get('password')+"和"+object.get('states'));
                  object.save('states',true);
                  //LoginConfig.usernamelog = object.get('username');
                  //LoginConfig.passwordlog = object.get('password');
                  //console.log(LoginConfig.usernamelog + "和" + LoginConfig.passwordlog);
                  //LoginConfig.loginstate = true;
                  //console.log(LoginConfig.usernamelog + LoginConfig.passwordlog + LoginConfig.loginstate);
                  //alert("当前登录用户"+object.get('username')+'&'+object.get('password'));
                  return;
                }
                //alert(object.id + ' - ' + object.get('username'));
              }
              alert('用户名或密码错误');
            },
            error: function (error) {
              alert("登录失败: " + error.code + " " + error.message);
            }
          });
        }
      }

    }]);
})(angular);
