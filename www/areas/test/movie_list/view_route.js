/**
 * Created by admin7104 on 2016/11/1.
 */
angular.module('view.route', ['view.controllers', 'view.services'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/:category/:page', {
      templateUrl: 'movie_list/view.html',
      controller: 'MovieListController'
    });
  }]);
