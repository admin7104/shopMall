/**
 * Created by admin7104 on 2016/11/3.
 */
(function (angular) {
    'use strict';

    var module = angular.module('login.register_page', ['ngRoute']);

    module.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/register', {
            templateUrl: 'registerPage/register.html',
            controller: 'RegisterPageController'
        });
    }]);


    module.controller('RegisterPageController', [
        '$scope',
        '$route',
        '$routeParams',function ($scope,$route) {

        $scope.user = '';
        $scope.password = '';
        $scope.repassword = '';
        $scope.state = false;
        Bmob.initialize("dcbf28cf497ed4a0e488c4702d7e4368", "363dcb11d0a975c08c54bf50f465ad46");

        $scope.registerUser = function () {
          //获取一行数据
          if($scope.user===''||$scope.password===''||$scope.repassword===''){
            alert("请填写完注册注册信息");
          }else if(!($scope.password===$scope.repassword)){
            alert("两次密码不一致");
          }else {
            var TestObject = Bmob.Object.extend("UserTable");
            var query = new Bmob.Query(TestObject);
            var testObject = new TestObject();
            query.find({
              success: function (results) {
                //alert("共查询到 " + results.length + " 条记录");
                // 循环处理查询到的数据
                for (var i = 0; i < results.length; i++) {
                  var object = results[i];
                  if (object.get('username') === $scope.user) {//&&object.get('password')===$scope.password
                    alert("用户名已存在");
                    return;
                  }
                  //alert(object.id + ' - ' + object.get('username'));
                }
                //alert('执行么？');
                testObject.save({username: $scope.user, password: $scope.password,states:$scope.state}, {
                  success: function (object) {
                    $(".success").show();
                    alert('注册成功');
                  },
                  error: function (model, error) {
                    $(".error").show();
                    alert('注册失败');
                  }
                });
              },
              error: function (error) {
                alert("查询失败: " + error.code + " " + error.message);
              }
            });
          }
        }
        }]);
})(angular);
