var app = angular.module('app', ['ui.router', 'angular-loading-bar','ngStorage']);

app.config(function($stateProvider, $urlRouterProvider){
	
	$stateProvider
		.state('app', {
			url: '/',
			templateUrl: 'views/home.html',
			controller: 'AppCtrl'
		})
		.state('adm', {
			url: '/admin',
			templateUrl: 'views/adm.html',
			controller: 'AdmCtrl'
		});

	$urlRouterProvider.otherwise('/');
})
.config(function($httpProvider, $localStorageProvider){
	$httpProvider.defaults.headers.post["Content-Type"]   = "application/x-www-form-urlencoded";
	$httpProvider.defaults.headers.put["Content-Type"]   = "application/x-www-form-urlencoded";
	$httpProvider.defaults.headers.common["Content-Type"] = "application/x-www-form-urlencoded";
	$httpProvider.defaults.headers.common["Authorization"] = 'Bearer '+ $localStorageProvider.get('access_token');
});