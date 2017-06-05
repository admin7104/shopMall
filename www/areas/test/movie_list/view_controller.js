/**
 * Created by admin7104 on 2016/11/1.
 */
angular.module('view.controllers', [])
  .('MovieListController', [
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
