'use strict';

var myRouterDemo = angular.module('clientApp');

var View1Controller = function($scope) {
	$scope.details = [ {
		name : 'yugi',
		city : 'sfo',
		salary : '78023'
	}, {
		name : 'John',
		city : 'newYork',
		salary : '56560'
	}, {
		name : 'Raj',
		city : 'Phoenix',
		salary : '124395'
	}, {
		name : 'Ramu',
		city : 'sfo',
		salary : '98444'
	}, {
		name : 'Kiran',
		city : 'Saltlake'
	}, {
		name : 'Chris',
		city : 'Texas'
	} ];
	

	$scope.addCustomer = function(){
		$scope.details.push({name : $scope.newCustomer.name,
		city : $scope.newCustomer.city,salary : '124395'});
		
	};
	
};

var View2Controller = function($scope) {
	$scope.details = [ {
		name : 'xxxx',
		city : 'sfo',
		salary : '78023'
	}, {
		name : 'yyyy',
		city : 'newYork',
		salary : '56560'
	}, {
		name : 'zzzz',
		city : 'Phoenix',
		salary : '124395'
	}, {
		name : 'pppp',
		city : 'sfo',
		salary : '98444'
	}, {
		name : 'ppp',
		city : 'Saltlake'
	}, {
		name : 'qqqqq',
		city : 'Texas'
	} ];
	
};

//below is cleaner approach to define controllers, more like encapsulation
var controllers = {};
controllers.View1Controller = View1Controller;
controllers.View2Controller = View2Controller;

myRouterDemo.controller(controllers);

