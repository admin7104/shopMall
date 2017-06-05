// 我的页面
angular.module('account.controller', ['account.service'])
  .controller('AccountCtrl', function ($scope, $window, AccountFty, $ionicPopup, $ionicActionSheet) {//,$cordovaCamera

    Bmob.initialize("dcbf28cf497ed4a0e488c4702d7e4368", "363dcb11d0a975c08c54bf50f465ad46");
    $scope.updatepassword = '';
    console.log(111);
    $scope.lstate = false;
    var xianshiGameScore = Bmob.Object.extend("UserTable");
    var xianshiquery = new Bmob.Query(xianshiGameScore);
    console.log(222);
    $scope.$on('$ionicView.afterEnter', function (e) {
      // 查询所有数据
      xianshiquery.find({
        success: function (results) {
          //alert("共查询到 " + results.length + " 条记录");
          // 循环处理查询到的数据
          for (var i = 0; i < results.length; i++) {
            var object = results[i];
            if (object.get('states') === true) {
              console.log(object.get('username'));
              $scope.lstate = true;
              $scope.updateId = object.id;
              console.log($scope.updateId);
              $scope.un = object.get('username');
              console.log(333);
              return;
            }
          }
        },
        error: function (error) {
          alert("查询失败: " + error.code + " " + error.message);
        }
      });
    });


    // 退出
    $scope.func_exitApp = function () {
      var confirmPopup = $ionicPopup.confirm({
        title: '提示',
        template: "确认退出？"
      });
      confirmPopup.then(function (res) {
        if (res) {
          var GameScore = Bmob.Object.extend("UserTable");
          var query = new Bmob.Query(GameScore);
// 查询所有数据
          query.find({
            success: function (results) {
              //alert("共查询到 " + results.length + " 条记录");
              // 循环处理查询到的数据
              for (var i = 0; i < results.length; i++) {
                var object = results[i];
                object.save('states', false);
                $scope.updateId = '';
              }
            },
            error: function (error) {
              alert("查询失败: " + error.code + " " + error.message);
            }
          });
          ionic.Platform.exitApp();
        }
      });
    };

    //修改密码
    $scope.updatePassword = function (id, updatepassword) {
      //alert(111);
      var GameScore = Bmob.Object.extend("UserTable");
      var query = new Bmob.Query(GameScore);

      query.find({
        success: function (results) {
          //alert("共查询到 " + results.length + " 条记录");
          // 循环处理查询到的数据
          for (var i = 0; i < results.length; i++) {
            var object = results[i];
            if (object.id === id) {
              //找到匹配id
              query.get(object.id, {
                success: function (gameScore) {
                  // 回调中可以取得这个 GameScore 对象的一个实例，然后就可以修改它了
                  console.log(updatepassword);

                  gameScore.save('password', updatepassword);
                  gameScore.save();
                  alert('修改密码成功，请重新登录' + object.id);
                  $scope.updatepassword = '';
                  query.find({
                    success: function (results) {
                      //alert("共查询到 " + results.length + " 条记录");
                      // 循环处理查询到的数据
                      for (var i = 0; i < results.length; i++) {
                        var object = results[i];
                        object.save('states', false);
                        $scope.updateId = '';
                      }
                    },
                    error: function (error) {
                      alert("查询失败: " + error.code + " " + error.message);
                    }
                  });
                  ionic.Platform.exitApp();
                },
                error: function (object, error) {
                  alert('请检查登录状态');
                  $scope.updatepassword = '';
                }
              });
              return;
            }
            //alert('执行么1');
          }
          alert('请检查登录状态');
          $scope.updatepassword = '';
        },
        error: function (error) {
          alert("查询失败: " + error.code + " " + error.message);
        }
      });
    };
  });




