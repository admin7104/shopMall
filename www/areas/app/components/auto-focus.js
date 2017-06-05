/**
 * Created by admin7104 on 2016/10/26.
 */
//使用焦点
(function (angular) {
	angular.module('moviecat.directives.auto_focus',[])
		.directive('autoFocus',['$location', function ($location) {//此处使用驼峰命名法
			//获取当前连接的后缀部分
			//var path = $location.path(); //path ：/top250/1
			return{
				restrict:'A',
				link: function ($scope, iElm, iAttrs, controller) {
					//console.log(iEle);
					//console.log(iAttrs);
					$scope.$location = $location;
					//监视网址变化 因为默认初始是跳转 没有获取到location.path()的值
					$scope.$watch('$location.path()', function (now) {
						var aLink = iElm.children().attr('href');
						var type = aLink.replace(/#(\/.+?)\/\d+/,'$1');//type ：/top250
						if(now.startsWith(type)){
							iElm.parent().children().removeClass('active');
							iElm.addClass('active');
						}
					});
					//console.log(path.startsWith(type));
					//console.log(path+'------'+aLink+'--------'+type);
					//false
					//auto-focus.js:21 /top250/1------#/in_theaters/1--------/in_theaters
					//auto-focus.js:20 false
					//auto-focus.js:21 /top250/1------#/coming_soon/1--------/coming_soon
					//auto-focus.js:20 true
					//auto-focus.js:21 /top250/1------#/top250/1--------/top250

					//iElm.on('click', function () {
					//	iElm.parent().children().removeClass('active');
					//	iElm.addClass('active');
					//})
				}
			}
		}]);

})(angular);
