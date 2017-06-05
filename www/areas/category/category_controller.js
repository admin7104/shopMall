// 分类页面
angular.module('category.controller', ['category.service'])
  .controller('CategoryCtrl',function($scope,$window,CategoryFty,$stateParams) {

    $scope.$on('$ionicView.enter', function (e) {
      getCategoryData();
      $scope.getCategoryDetailData(103);
      $scope.getCategoryDetailData(103);
      $scope.getCategoryDetailData(101);
    });

    function getCategoryData(){
      $scope.categoryData=[
        {
          name:"周边游",
          typeNumber:'101'
        },
        {
          name:"国内游",
          typeNumber:'102'
        },
        {
          name:"出境游",
          typeNumber:'103'
        }
      ];

    }

    // 头部滚动条数据
    $scope.getCategoryDetailData=function(typeNumber){

      if(typeNumber==101){
        $scope.categoryDetailData=[
          {
            title:"长白山蓝景温泉度假酒店2天1晚",
            content:"住长白山蓝景温泉度假酒店1晚＋温泉票2张＋早餐",
            //src:"img/category/zb1.jpg",
            src:"http://pic.lvmama.com/pics/super/2016/10/1477470537_93461.jpg",
            typeNumber:'10101'
          },
          {
            title:"抚顺热高温泉2天1晚欢乐行",
            content:"住抚顺热高温泉酒店1晚＋2张热高园区套票＋自助早餐",
            //src:"img/category/zb2.jpg",
            src:"http://pic.lvmama.com/pics/super/2016/10/1476782373_91643.jpg",
            typeNumber:'10102'
          },
          {
            title:"大连旅顺天沐温泉养生之旅",
            content:"住大连旅顺（天沐）温泉1晚+每人1次温泉洗浴+早餐",
            name:"针织衫",
            //src:"img/category/zb3.jpg",
            src:"http://pic.lvmama.com/pics/super/2016/09/1474969073_46770.jpg",
            typeNumber:'10103'
          },
          {
            title:"营口熊岳天沐温泉2天1晚",
            content:"住营口熊岳天沐温泉度假村1晚+2次温泉爽泡+早餐",
            //src:"img/category/zb4.jpg",
            src:"http://pic.lvmama.com/pics/super/2016/09/1474969124_45452.jpg",
            typeNumber:'10104'
          },
          {
            title:"大连棒棰岛2天1晚沿海度假之旅",
            content:"住大连棒棰岛宾馆1晚+双人自助早餐",
            //src:"img/category/zb5.jpg",
            src:"http://pic.lvmama.com/pics/super/2016/09/1474968913_39785.jpg",
            typeNumber:'10105'
          },
          {
            title:"大连国际金融会议中心2天1晚",
            content:"住大连国际金融会议中心1晚+森林动物园成人票2张",
            //src:"img/category/zb6.jpg",
            src:"http://pic.lvmama.com/pics/super/2016/09/1474968863_90490.jpg",
            typeNumber:'10106'
          },
          {
            title:"大连发现王国度假酒店",
            content:"紧邻发现王国主题公园，位置优越，酒店外经典欧式设计",
            //src:"img/category/zb7.jpg",
            src:"http://pic.lvmama.com/pics/super/2016/08/1471259117_90636.jpg",
            //http://pic.lvmama.com/pics/super/2016/09/1474532564_71190.jpg
            typeNumber:'10107'
          },
          {
            title:"沈阳方特欢乐嘉年华",
            content:"住沈阳方特花园酒店1晚＋方特欢乐世界门票2张",
            //src:"img/category/zb8.jpg",
            src:"http://pic.lvmama.com/pics/super/2016/08/1470105138_19691.jpg",
            typeNumber:'10108'
          },
          {
            title:"玩转北京3晚自由行",
            content:"立减！住北京国际饭店3晚＋北海公园门票",
            //src:"img/category/zb9.jpg",
            src:"http://pic.lvmama.com/pics/super/2016/07/1467875652_37283.jpg",
            typeNumber:'10109'
          }
        ];
      }
      else if(typeNumber==102){
        $scope.categoryDetailData=[
          {
            title:"四川全景纯玩5日游",
            content:"九寨、黄龙、乐山、峨眉山、都江堰四川全景纯玩特卖",
            //src:"img/category/gn1.jpg",
            src:"http://pic.lvmama.com/pics/super/2016/09/1473659697_11511.jpg",
            typeNumber:'10201'
          },
          {
            title:"大连圣亚海洋世界",
            content:"写游记返现20元，中国最浪漫的海洋主题乐园",
            //src:"img/category/gn2.jpg",
            src:"http://pic.lvmama.com/pics/super/2016/09/1474532564_71190.jpg",
            typeNumber:'10202'
          },
          {
            title:"长影世纪城",
            content:"下单立减5元，完美展示了先进的特技效果电影艺术",
            //src:"img/category/gn3.jpg",
            src:"http://pic.lvmama.com/pics/super/2016/09/1474532427_81011.jpg",
            typeNumber:'10203'
          },
          {
            title:"哈尔滨极地馆",
            content:"动物明星齐聚的演艺游乐园",
            //src:"img/category/gn4.jpg",
            src:"http://pic.lvmama.com/pics/super/2016/09/1474532417_78580.jpg",
            typeNumber:'10204'
          }
        ];
      }else{
        $scope.categoryDetailData=[
          {
            title:"新西兰南北岛9晚12日",
            content:"罗托鲁瓦地热保护区及火山喷泉区和毛利文化村",
            //src:"img/category/cj1.jpg",
            src:"http://pic.lvmama.com/pics/super/2016/09/1473151919_21551.jpg",
            typeNumber:'10301'
          },
          {
            title:"土耳其7晚10日游",
            content:"土耳其航空，皮尔埃洛蒂山缆车登顶，全程车载WIFI",
            //src:"img/category/cj2.jpg",
            src:"http://pic.lvmama.com/pics/super/2016/09/1473151678_20352.jpg",
            typeNumber:'10302'
          },
          {
            title:"悦动芽庄5晚6日半自助游",
            content:"VN国家航空直飞，赠京津往返大巴，出海蚕岛游",
            //src:"img/category/cj3.jpg",
            src:"http://pic.lvmama.com/pics/super/2016/09/1473151408_90488.jpg",
            typeNumber:'10303'
          },
          {
            title:"美国西海岸7晚9日半自助游",
            content:"赠送圣地亚哥游览，穿梭圣地亚哥军港",
            //src:"img/category/cj4.jpg",
            src:"http://pic.lvmama.com/pics/super/2016/09/1473151333_36897.jpg",
            typeNumber:'10304'
          },
          {
            title:"香港3晚4日自由行",
            content:"港龙航空往返 早去晚回 L签免送关费",
            //src:"img/category/cj5.jpg",
            src:"http://pic.lvmama.com/pics/super/2016/09/1473151573_34679.jpg",
            typeNumber:'10305'
          },
          {
            title:"香港迪士尼乐园3晚4日自由行",
            content:"1晚迪士尼好莱坞+2晚市区酒店，含门票+赠品",
            //src:"img/category/cj6.jpg",
            src:"http://pic.lvmama.com/pics/super/2016/10/1476693307_30900.jpg",
            typeNumber:'10306'
          },
          {
            title:"澳门巴黎人1晚2日酒店套餐",
            content:"豪华房+早或午餐+埃菲尔铁塔观光门票+开幕礼品",
            //src:"img/category/cj7.jpg",
            src:"http://pic.lvmama.com/pics/super/2016/10/1476693247_94360.jpg",
            typeNumber:'10307'
          },
          {
            title:"澳门君悦酒店1晚2日自由行",
            content:"悠闲度假，感受葡式风情，享用双早双晚礼遇套餐",
            //src:"img/category/cj8.jpg",
            src:"http://pic.lvmama.com/pics/super/2016/10/1476693183_37909.jpg",
            typeNumber:'10308'
          }
        ];
      }
    };


    // 左侧分类单击样式修改
    $scope.categoryLeftClick=function(e){
      e.target.className='nav-current';
      $(e.target).siblings().removeClass().addClass('nav-blur');
    };

  })




