/**
 * Created by admin7104 on 2016/10/28.
 */
//全局定义的东西
angular.module('global', [])
.constant('GlobalVariable',{
    SERVER_PATH:'127.0.0.1',//服务器地址
    pageCount:15,
    listAddress:'https://api.douban.com/v2/movie/',
    detailAddress: 'https://api.douban.com/v2/movie/subject/'
  });
