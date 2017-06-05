/**
 * Created by admin7104 on 2016/10/28.
 */
// 总路由模块

angular.module('route', [
  'guidePage.route',
  'home.route',
  'tabs.route',
  'category.route',
  'details.route',
  'goodsList.route',
  'account.route',
  'more.route',
  'cart.route',
  'test.route'
  //,
  //'moviecat.movie_list'
  ])

  //'starter.controllers', 'starter.services' 软删除法

  .config(function($stateProvider, $urlRouterProvider) {
    //<!--子路由删除-->

    //// Ionic uses AngularUI Router which uses the concept of states
    //// Learn more here: https://github.com/angular-ui/ui-router
    //// Set up the various states which the app can be in.
    //// Each state's controller can be found in controllers.js
    //$stateProvider
    //  // Each tab has its own nav history stack:
    //
    //  .state('tab.dash', {
    //    url: '/dash',
    //    views: {
    //      'tab-dash': {
    //        templateUrl: 'templates/tab-dash.html',
    //        controller: 'DashCtrl'
    //      }
    //    }
    //  })
    //
    //  .state('tab.chats', {
    //    url: '/chats',
    //    views: {
    //      'tab-chats': {
    //        templateUrl: 'templates/tab-chats.html',
    //        controller: 'ChatsCtrl'
    //      }
    //    }
    //  })
    //  .state('tab.chat-detail', {
    //    url: '/chats/:chatId',
    //    views: {
    //      'tab-chats': {
    //        templateUrl: 'templates/chat-detail.html',
    //        controller: 'ChatDetailCtrl'
    //      }
    //    }
    //  })
    //
    //  .state('tab.test', {
    //    url: '/test',
    //    views: {
    //      'tab-test': {
    //        templateUrl: 'templates/tab-test.html',
    //        controller: 'AccountCtrl'
    //      }
    //    }
    //  });、

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/guidePage');
  });
