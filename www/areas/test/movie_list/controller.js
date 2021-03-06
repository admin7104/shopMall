(function (angular) {
	'use strict';

	var module = angular.module('moviecat.movie_list', [ 'moviecat.service.http']);

	module.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/:category/:page', {
			templateUrl: 'movie_list/view.html',
			controller: 'MovieListController'
		});
	}]);


	module.controller('MovieListController', [
		'$scope',
		'$route',
		'$routeParams',
		'HttpService',
		'AppConfig',function ($scope,$route, $routeParams, HttpService,AppConfig) {
			var page = parseInt($routeParams.page);
			//console.log(page);
			//暴露数据
			var count = AppConfig.pageCount;//var count = 10;
			$scope.subjects = [];
			$scope.title = '豆瓣Api电影';
			$scope.message = '';
			$scope.totalCount = 0;
			$scope.totalPages = 0;
			$scope.currentPage = 1;
			var start = (page-1)*count;
			$scope.loading = true;
			//11111
			HttpService.jsonp(AppConfig.listAddress+$routeParams.category, {
				start: start,
				count: count,
				q:$routeParams.q
			}, function (data) {
				$scope.subjects = data.subjects;
				$scope.totalCount = data.total;
				$scope.title = data.title;
				$scope.totalPages = Math.ceil(($scope.totalCount)/count);
				//console.log($scope.totalPages);
				$scope.currentPage = page;
				$scope.loading = false;
				$scope.$apply('subjects');
				//console.log($scope.title);
			});

			//暴露行为
			$scope.go = function (page) {
				if(page>=1&&page<=$scope.totalPages)
				$route.updateParams({
					page:page
				});
			};

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
