/**
 * Created by admin7104 on 2016/10/26.
 */
(function (angular) {
	var http = angular.module('moviecat.service.http',[]);
	http.service('HttpService',['$document','$window', function ($document,$window) {
		this.jsonp = function (url, data, callback) {

			//2.将data处理成参数  转化成字符串的形式
			var queryString = url.indexOf('?')==-1?'?':'&';
			for( var key in data){
				queryString += key + '=' + data[key] + '&';
				//此时得到的是     ?name=zhangsan&age=12&
			}

			//1.首先挂在回调函数
			var cbFuncName = 'my_cb_json_'+Math.random().toString().replace('.','');
			//3.处理回调函数
			queryString += 'callback='+cbFuncName;
			//4.创建一个script标签
			var scriptElement = $document[0].createElement('script');
			scriptElement.src = url + queryString;

			$window[cbFuncName] = function (data) {
        //console.log($window);
				callback(data);
				//回调函数执行完 移除script标签
				$document[0].body.removeChild(scriptElement);
			};

			//5.加载到页面中会自动请求网址
			$document[0].body.appendChild(scriptElement);
		};
	}]);
})(angular);

