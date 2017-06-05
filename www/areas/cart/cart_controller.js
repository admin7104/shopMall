/******************************************************
 创建人：石国庆          创建时间：2015.10.20
 创建人：                修改时间：
 功  能：购物车
 ******************************************************/
angular.module('cart.controller', ['cart.service'])
  .controller('CartCtrl', ['$scope', '$state', '$ionicHistory', 'CartFty', function ($scope, $state, $ionicHistory, CartFty) {

    Bmob.initialize("dcbf28cf497ed4a0e488c4702d7e4368", "363dcb11d0a975c08c54bf50f465ad46");

    var User = Bmob.Object.extend("UserTable");
    var userquery = new Bmob.Query(User);
    var ff = Bmob.Object.extend("ff");
    var ffquery = new Bmob.Query(ff);
    console.log(111);
    $scope.obj_cartDbData = [];
// 查询所有数据
    userquery.find({
      success: function (results) {
        for (var i = 0; i < results.length; i++) {
          var userobject = results[i];
          if (userobject.get('states') === true) {
            ffquery.find({
              success: function (ffresults) {
                if (ffresults.length === 0) {
                  console.log(121);
                  $scope.noorders = '当前没有订单';
                  $scope.lstate = true;
                  return;
                } else {
                  console.log(222);
                  for (var i = 0; i < ffresults.length; i++) {
                    var object = ffresults[i];
                    $scope.obj_cartDbData.push({
                      productId: object.get('productId'),//$scope.todos.length + 1
                      src: object.get('src'),
                      price: object.get('price'),
                      number: object.get('number'),
                      description: object.get('description'),
                      state: object.get('state'),
                      deleteId: object.id
                    });
                    $scope.noorders = '';
                    $scope.lstate = true;
                  }
                }
                return;
              }
            });
            return;
          }
        }
        $scope.noorders = '请检查登录状态';
        $scope.lstate = false;
      },
      error: function (error) {
        alert("查询失败: " + error.code + " " + error.message);
      }
    });


    //console.log($scope.obj_cartDbData.length);
    // 返回按钮方法
    $scope.goBack = function () {
      $ionicHistory.goBack();
    };

    $scope.func_goHome = function () {
      $state.go('tab.home');
    };
    $scope.func_delete = function (id) {
      var GameScore = Bmob.Object.extend("ff");
      var query = new Bmob.Query(GameScore);
// 查询所有数据
      query.find({
        success: function (results) {
          //alert("共查询到 " + results.length + " 条记录");
          // 循环处理查询到的数据
          for (var i = 0; i < results.length; i++) {
            var object = results[i];
            if (object.id === id) {
              object.destroy({
                success: function (object) {
                  alert('删除成功');
                },
                error: function (object, error) {
                  // 删除失败
                }
              });
              //alert('删除成功');
              return;
            }
            //alert('执行么');
            //alert(object.id + ' - ' + object.get('playerName'));
          }
        },
        error: function (error) {
          alert("查询失败: " + error.code + " " + error.message);
        }
      });
    }
  }]);
