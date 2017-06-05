// 商品列表功能
angular.module('details.controller', ['details.service'])
  .controller('DetailsCtrl', function ($scope, $stateParams, $state, $ionicHistory) {//IndexdbJs,

    Bmob.initialize("dcbf28cf497ed4a0e488c4702d7e4368", "363dcb11d0a975c08c54bf50f465ad46");

    //
    //console.log(window.location.hash.endsWith(10101));
    if (window.location.hash.endsWith(10101)) {
      $scope.obj_goodsInfo = {
        goodsId: "200067",
        description: "【北国风光——泡温泉赏雪景】住1晚长白山蓝景温泉度假酒店＋温泉票2张＋次日酒店双人早餐【精致舒适】",
        tuijian: '一样的冬天，不一样的享受； 享美食，泡温泉，赏雪景。',
        content: '长白山蓝景温泉度假酒店长白山蓝景温泉度假酒店位于长白山管委会池北区、长白山门区约300米处，紧邻长白山入区公路。酒店总建筑面积25,000平米，纯欧式风格建筑，采用纯实木打造。前厅有商场、商务中心，便捷实效。酒店有各类舒适温馨的客房，房内设施齐全。风格各异的大型餐厅及餐饮包厢，可容纳300余人同时用餐。养生会馆、KTV、欧式酒吧、茶艺吧等列休闲娱乐场地齐全。',
        money: [{value: '【住】1晚长白山蓝景温泉酒店标准间/大床房（2选1）；'}, {value: '【吃】次日酒店营养早餐2份；'}, {value: '【儿童价】1.2米以下免费，1.2米至1.4米收取6折，1.4米以上全价（以酒店价格为准）；'}],
        price: 948.5,
        picture: {
          alt: 'one',
          src: 'http://pic.lvmama.com//uploads/pc/place2/2016-10-25/69829c6d-de0b-48e1-bbdc-5bd524bf6673.jpg'
        },
        src: "",
        isFork: false,
        colorGroup: [{name: "11/09", value: "11/09"}, {name: "11/10", value: "11/10"}, {name: "11/11", value: "11/11"}],
        sizeGroup: [{name: "￥999起", value: "￥999起"}, {name: "￥1009起", value: "￥1009起"}, {name: "￥959起", value: "￥959起"}]
        //timeGroup: [{name: "11/09", value: "11/09"}, {name: "11/10", value: "11/10"},{name: "11/11", value: "11/11"}],
        //priceGroup: [{name: "￥999起", value: "￥999起"}, {name: "￥1009起", value: "￥999起"}, {name: "￥959起", value: "￥999起"}]
      };
    } else if (window.location.hash.endsWith(10102)) {
      $scope.obj_goodsInfo = {
        goodsId: "200068",
        description: "【抚顺热高欢乐之行】住1晚抚顺热高温泉酒店＋双人自助早餐＋2张热高园区套票-园区3选1",
        tuijian: '丛林欢乐世界、温泉养生世界',
        content: '抚顺热高温泉酒店座落于热高乐园的温泉养生世界内，原为清代皇家行围猎场，围绕着中式皇家汤泉养生理念打造而成',
        money: [{value: '【住】于14:00之后，前往酒店前台，办理入住'}, {value: '【游】自行游玩，推荐：棋盘山风景区，世博园等'}, {value: '【食】睡到自然醒，于7:00-9:30前往酒店餐厅享用双人自助早餐'}],
        price: 900.9,
        picture: {
          alt: 'two',
          src: 'http://pic.lvmama.com/uploads/pc/place2/2016-09-23/c99bdc35-f428-47b7-aaa2-1ae1292764f3_1280_.jpg'
        },
        src: "",
        isFork: false,
        colorGroup: [{name: "11/09", value: "11/09"}, {name: "11/10", value: "11/10"}, {name: "11/11", value: "11/11"}],
        sizeGroup: [{name: "￥999起", value: "￥999起"}, {name: "￥1009起", value: "￥1009起"}, {name: "￥959起", value: "￥919起"}]
      };
    } else {
      $scope.obj_goodsInfo = {
        goodsId: "200069",
        description: "【北国风光——泡温泉赏雪景】住1晚长白山蓝景温泉度假酒店＋温泉票2张＋次日酒店双人早餐【精致舒适】",
        tuijian: '一样的冬天，不一样的享受； 享美食，泡温泉，赏雪景。',
        content: '长白山蓝景温泉度假酒店长白山蓝景温泉度假酒店位于长白山管委会池北区、长白山门区约300米处，紧邻长白山入区公路。酒店总建筑面积25,000平米，纯欧式风格建筑，采用纯实木打造。前厅有商场、商务中心，便捷实效。酒店有各类舒适温馨的客房，房内设施齐全。风格各异的大型餐厅及餐饮包厢，可容纳300余人同时用餐。养生会馆、KTV、欧式酒吧、茶艺吧等列休闲娱乐场地齐全。',
        money: [{value: '【住】1晚长白山蓝景温泉酒店标准间/大床房（2选1）；'}, {value: '【吃】次日酒店营养早餐2份；'}, {value: '【儿童价】1.2米以下免费，1.2米至1.4米收取6折，1.4米以上全价（以酒店价格为准）；'}],
        price: 948.5,
        picture: {
          alt: 'one',
          src: 'http://pic.lvmama.com//uploads/pc/place2/2016-10-25/69829c6d-de0b-48e1-bbdc-5bd524bf6673.jpg'
        },
        src: "",
        isFork: false,
        colorGroup: [{name: "11/09", value: "11/09"}, {name: "11/10", value: "11/10"}, {name: "11/11", value: "11/11"}],
        sizeGroup: [{name: "￥999起", value: "￥999起"}, {name: "￥1009起", value: "￥1009起"}, {name: "￥959起", value: "￥959起"}]
        //timeGroup: [{name: "11/09", value: "11/09"}, {name: "11/10", value: "11/10"},{name: "11/11", value: "11/11"}],
        //priceGroup: [{name: "￥999起", value: "￥999起"}, {name: "￥1009起", value: "￥999起"}, {name: "￥959起", value: "￥999起"}]
      };
    }


    // 用户选择信息
    $scope.obj_goodsDetailInfo = {
      goodsId: $scope.obj_goodsInfo.goodsId,
      isFork: $scope.obj_goodsInfo.isFork,
      description: $scope.obj_goodsInfo.description,
      src: $scope.obj_goodsInfo.src,
      price: $scope.obj_goodsInfo.price,
      picture: $scope.obj_goodsInfo.picture,
      tuijian: $scope.obj_goodsInfo.tuijian,
      content: $scope.obj_goodsInfo.content,
      money: $scope.obj_goodsInfo.money,
      color: "",
      size: "",
      number: 1
    };
    console.log($scope.obj_goodsDetailInfo.color);

    //
    // 数量加1
    $scope.jia1 = function () {
      $scope.obj_goodsDetailInfo.number++;
    }

    // 数量减1
    $scope.jian1 = function () {
      if ($scope.obj_goodsDetailInfo.number != 1) {
        $scope.obj_goodsDetailInfo.number--;
      }
    }
    //
    //
    //
    //
    // 加入购物车方法
    //$scope.func_addToCart = function () {
    //
    //  var obj_newData={};
    //  angular.copy($scope.obj_goodsDetailInfo,obj_newData);
    //
    //  obj_newData.goodsId =obj_newData.goodsId + "-" + obj_newData.color + "-" + obj_newData.size;
    //
    //  IndexdbJs.get(obj_newData.goodsId,"more",
    //    function(data){
    //      if(data==null||data==undefined){
    //        //不存在商品就添加
    //        IndexdbJs.add("more", obj_newData, function () {
    //          //变更购物车数量
    //          $scope.obj_cartCount.count=parseInt($scope.obj_cartCount.count)+parseInt($scope.obj_goodsDetailInfo.number);
    //          $scope.$digest();
    //        }, null);
    //      }
    //      else {
    //        // 存在商品
    //        // 是新增加6个数量，所以要处理一下，这个还影响下面变更购物车数量的逻辑
    //        obj_newData.number=parseInt(obj_newData.number)+parseInt(data.number);
    //
    //        IndexdbJs.update("more", obj_newData, function () {
    //          //变更购物车数量
    //          $scope.obj_cartCount.count=parseInt($scope.obj_cartCount.count)+parseInt($scope.obj_goodsDetailInfo.number);
    //          $scope.$digest();
    //        }, null);
    //      }
    //    },
    //    null
    //  )
    //
    //};
    //
    // 返回首页面
    $scope.func_goHome = function () {
      $state.go("tab.home");
    };

    $scope.shoucang = function () {
      var GameScore = Bmob.Object.extend("UserTable");
      var query = new Bmob.Query(GameScore);
      query.find({
        success: function (results) {
          //alert("共查询到 " + results.length + " 条记录");
          // 循环处理查询到的数据
          for (var i = 0; i < results.length; i++) {
            var object = results[i];
            if (object.get('states') === true) {
              var TestObject = Bmob.Object.extend("ff");
              var testObject = new TestObject();
              testObject.save({
                src: $scope.obj_goodsDetailInfo.picture,
                description: $scope.obj_goodsDetailInfo.description,
                price: $scope.obj_goodsDetailInfo.price,
                number: $scope.obj_goodsDetailInfo.number,
                state: '收藏',
                productId: window.location.hash.endsWith(10101) ? 10101 : 10102
              }, {
                success: function (object) {
                  $(".success").show();
                  alert('yes');
                },
                error: function (model, error) {
                  $(".error").show();
                }
              });
              return;
            }
            //alert('执行么1');
          }
          alert('请检查登录状态');
        },
        error: function (error) {
          alert("查询失败: " + error.code + " " + error.message);
        }
      });
    };
    $scope.yuyue = function () {

      var GameScore = Bmob.Object.extend("UserTable");
      var query = new Bmob.Query(GameScore);
      query.find({
        success: function (results) {
          //alert("共查询到 " + results.length + " 条记录");
          // 循环处理查询到的数据
          for (var i = 0; i < results.length; i++) {
            var object = results[i];
            if (object.get('states') === true) {

              var TestObject = Bmob.Object.extend("ff");
              var testObject = new TestObject();
              testObject.save({
                src: $scope.obj_goodsDetailInfo.picture,
                description: $scope.obj_goodsDetailInfo.description,
                price: $scope.obj_goodsDetailInfo.price,
                number: $scope.obj_goodsDetailInfo.number,
                state: '预约',
                productId: window.location.hash.endsWith(10101) ? 10101 : 10102
              }, {
                success: function (object) {
                  $(".success").show();
                  alert('yes');
                },
                error: function (model, error) {
                  $(".error").show();
                }
              });
              return;
            }
            //alert('执行么1');
          }
          alert('请检查登录状态');
        },
        error: function (error) {
          alert("查询失败: " + error.code + " " + error.message);
        }
      });
    };

    // 返回前一个页面
    $scope.goBack = function () {
      $ionicHistory.goBack();
    };

    //订单数
    $scope.ordercount = 0;

    var ff = Bmob.Object.extend("UserTable");
    var fq = new Bmob.Query(ff);
// 查询所有数据
    fq.find({
      success: function (results) {
        for (var i = 0; i < results.length; i++) {
          var object = results[i];
          if (object.get('states') === true) {
            var GameScore = Bmob.Object.extend("ff");
            var query = new Bmob.Query(GameScore);
            query.find({
              success: function (results) {
                //alert("共查询到 " + results.length + " 条记录");
                // 循环处理查询到的数据
                $scope.ordercount = results.length;
                //for (var i = 0; i < results.length; i++) {
                //  var object = results[i];
                //}
              }
            });
          }
        }
      }
    });


  });




