/**
 * Created by admin7104 on 2016/11/2.
 */
angular.module('login', [
  'ngRoute',
  'login.login_page',
  'login.register_page'
]).config(['$routeProvider', function ($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/logon'});
}]).constant('LoginConfig', {
    pageCount: 15,
    listAddress: 'https://api.douban.com/v2/movie/',
    detailAddress: 'https://api.douban.com/v2/movie/subject/',
    usernamelog: '',
    passwordlog: '',
    loginstate:false
  }
).controller('LoginController', ['$scope', '$route', function ($scope, $route, $ionicHistory) {

    //var goBack = function () {
    //console.log(window.location);
    //window.location.href = "http://localhost:63342/WebApp/shoppingMall/www/index.html#/tab/more";
    //console.log(111);
    //};
  }]);
