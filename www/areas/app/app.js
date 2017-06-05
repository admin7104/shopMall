'use strict';

// Declare app level module which depends on views, and components
angular.module('moviecat', [
	'ngRoute',
	'moviecat.movie_detail',
	'moviecat.movie_list',
	'moviecat.directives.auto_focus'
]).config(['$routeProvider', function ($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}]).constant('AppConfig',{
		pageCount:15,
		listAddress:'https://api.douban.com/v2/movie/',
		detailAddress: 'https://api.douban.com/v2/movie/subject/'
	}
).controller('SearchController', ['$scope', '$route', function ($scope, $route,$ionicHistory) {
		$scope.input = '';
		$scope.search = function () {
			console.log(($scope.input == ''));
			if ($scope.input == '') {
        //console.log($route);
				$route.updateParams({category: 'in_theaters', page: 1});
			} else {
				$route.updateParams({category: 'search', q: $scope.input});
			}
		};
    var goBack = function () {
      //console.log(window.location);
      //window.location.href = "http://localhost:63342/WebApp/shoppingMall/www/index.html#/tab/more";
      //console.log(111);
    };
	}]);

//也是控制焦点
//.controller('NavController', ['$scope', '$location', function ($scope, $location) {
////console.log($location);
//$scope.$location = $location;
//$scope.$watch('$location.path()', function (now) {
//	if (now.startsWith('/in_theaters')) {
//		$scope.type = 'in_theaters';
//	} else if (now.startsWith('/coming_soon')) {
//		$scope.type = 'coming_soon';
//	} else if (now.startsWith('/top250')) {
//		$scope.type = 'top250';
//	}
//	console.log($scope.type);
//});
//}])
