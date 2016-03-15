'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
.module('clientApp', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.grid'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    }).when('/view1', {
        templateUrl: 'views/view1.html',
        controller: 'View1Controller',
        controllerAs: 'view1'
    }).when('/view2', {
        templateUrl: 'views/view2.html',
        controller: 'View2Controller',
        controllerAs: 'view2'
    }).when('/uploadexcel', {
        templateUrl: 'views/uploadexcel.html',
        controller: 'UploadExcelController',
        controllerAs: 'uploadexcel'
    }).otherwise({
      redirectTo: '/'
    });
});
  

//
//myRouterDemo.config(function ($routeProvider){
//	$routeProvider.when('/view1',{
//		controller: 'View1Controller',
//		templateUrl: 'view1.html'
//	}).when('/view2',{
//		controller: 'View2Controller',
//		templateUrl: 'view2.html'
//	}).otherwise({redirectTo: '/'});
//	
//});
