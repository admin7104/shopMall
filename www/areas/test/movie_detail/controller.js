(function (angular) {
	'use strict';

	var module = angular.module('moviecat.movie_detail', ['ngRoute', 'moviecat.service.http']);

	module.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/detail/:id', {
			templateUrl: 'movie_detail/view.html',
			controller: 'MovieDetailController'
		});
	}]);


	module.controller('MovieDetailController', [
		'$scope',
		'$route',
		'$routeParams',
		'HttpService',
		'AppConfig',function ($scope,$route, $routeParams, HttpService,AppConfig) {
			$scope.movie = {};
			$scope.loading = true;
			var id = $routeParams.id;
			//var DetailAdrress = 'https://api.douban.com/v2/movie/subject/'+id;
			var DetailAdrress = AppConfig.detailAddress+id;
			HttpService.jsonp(DetailAdrress,{}, function (data) {
				//对外仅暴露一个movie对象
				$scope.movie = data;
				$scope.loading = false;
				$scope.$apply();
			});
		}]);
})(angular);
//11111
// $http.get('data.json').then(function (res) {
//	//console.log(res);
//	if(res.status==200){
//		//此处是异步任务完成之后执行的  所以应该事先定义变量 以防undefined
//		$scope.subjects = res.data.subjects;
//	}else{
//		$scope.message = '没有获取到数据，错误为'+res.statusText;
//	}
//}, function (err) {
//	console.log(err);
//	$scope.message = '没有获取到数据，错误为'+err.statusText;
//});
//$scope.subjects = date;
