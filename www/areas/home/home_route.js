/**
 * Created by admin7104 on 2016/10/28.
 */
angular.module('home.route', ['home.controllers', 'home.services'])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      // setup an abstract state for the tabs directive
      .state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'areas/home/home.html',
            controller: 'HomeCtrl'
          }
        }
      })
  });
