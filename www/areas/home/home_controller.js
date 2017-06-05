/**
 * Created by admin7104 on 2016/10/28.
 */
angular.module('home.controllers', [])
  .controller('HomeCtrl', function($scope,$window) {

    getHeaderSlideData();
    headerChangeColor();
    goTop();
    countdown();
    //setlog();
    // 监听视图完全加载之后的事件
    $scope.$on('$ionicView.afterEnter', function (e) {
      initHeaderSlide();
      initToutiaoSlide();
    });

    // 头部滚动条数据
    function getHeaderSlideData(){
      $scope.headerSlideData=[
        {
          alt:"双十一预热主场会",
          src:"img/home/headerSlide-1.jpg"
        },
        {
          alt:"11月11天家电低价不停歇",
          src:"img/home/headerSlide-2.jpg"
        },
        {
          alt:"家具盛典 好货提前抢",
          src:"img/home/headerSlide-3.jpg"
        },
        {
          alt:"IT抢券节",
          src:"img/home/headerSlide-4.jpg"
        },
        {
          alt:"潮流数码 双11爽购攻略",
          src:"img/home/headerSlide-5.jpg"
        }
      ];
    }
    // 初始化头部滚动条
    function initHeaderSlide(){
      var headerSwiper = new Swiper('#headerSlider', {
        slidesPerView: 1,
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false,
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 改变自动更新
        observer:true,
        observeParents:true


        //paginationClickable: true,
        //autoplay: 2000,
        //autoplayDisableOnInteraction: false,
        //loop: true,
        //// 如果需要分页器
        //pagination: '.swiper-pagination',
        //// 改变自动更新
        //observer:true,
        //observeParents:true
      });
    }
    // 初始化京东头条滚动条
    function initToutiaoSlide(){
      var toutiaoSwiper = new Swiper('#toutiaoSlider', {
        direction:'vertical',//垂直滑动
        autoplay: 2000,
        loop: true
      });
    }
    // 改变头部颜色
    function headerChangeColor(){
      var bg=$window.document.getElementById('home-content');
      var nowOpacity=0;
      bg.onscroll=function(event){
        if(this.scrollTop/250<1){
          nowOpacity=this.scrollTop/250;
        }
        document.getElementById("headerBar-bg").style.opacity=nowOpacity;
      }
    }
    //回到顶部
    function goTop(){
      var bg=window.document.getElementById('home-content');
      var goTop = document.querySelector(".back_top");

      bg.addEventListener('scroll',function(){
        var top = bg.scrollTop;
        if(top>200){
          goTop.style.opacity = 1;
        }else{
          goTop.style.opacity = 0;
        }
      },false);

      goTop.onclick = function(){
        bg.scrollTop = 0;
      }
    }
    function countdown(){
      if($window.timer){
        clearInterval($window.timer);
      }
      // 倒计时
      var timeObj={
        h:1,
        m:37,
        s:13
      };

      var timeStr=toDouble(timeObj.h)+toDouble(timeObj.m)+toDouble(timeObj.s);
      var timeList=document.getElementsByClassName('time-text');
      for(var i=0;i<timeList.length;i++){
        timeList[i].innerHTML=timeStr[i];
      }
      function toDouble(num){
        if(num<10){
          return '0'+num;
        }else{
          return ''+num;
        }
      }

      $window.timer=setInterval(function(){
        timeObj.s--;
        if(timeObj.s==-1){
          timeObj.m--;
          timeObj.s=59;
        }
        if(timeObj.m==-1){
          timeObj.h--;
          timeObj.m=59;
        }
        if(timeObj.h==-1){
          timeObj.h=0;
          timeObj.m=0;
          timeObj.s=0;
          clearInterval($window.timer);
        }
        timeStr=toDouble(timeObj.h)+toDouble(timeObj.m)+toDouble(timeObj.s);
        for(var i=0;i<timeList.length;i++){
          timeList[i].innerHTML=timeStr[i];
        }
      },1000)
    }

//    function setlog(){
//      Bmob.initialize("dcbf28cf497ed4a0e488c4702d7e4368", "363dcb11d0a975c08c54bf50f465ad46");
//      var GameScore = Bmob.Object.extend("log");
//      var gameScore = new GameScore();
//      gameScore.set("log", true);
////添加数据，第一个入口参数是null
//      gameScore.save(null, {
//        success: function(gameScore) {
//          // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
//          alert('添加数据成功，返回的objectId是：' + gameScore.id);
//        },
//        error: function(gameScore, error) {
//          // 添加失败
//          alert('添加数据失败，返回错误信息：' + error.description);
//        }
//      });
//    }

  });
