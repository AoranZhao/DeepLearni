var fbApp = angular.module('fbApp', ['srvModule']);

fbApp.run(['$rootScope', '$window', 'srvAuth', function($rootScope, $window, sAuth) {
	$rootScope.user = {};
	$rootScope.friends = null;
	$rootScope.greeting = "";
	$rootScope.picture = null;

	$window.fbAsyncInit = function() {
		FB.init({
			appId: '1252709098183756',
			channelUrl: 'channel.html',
			status: true,
			cookie: true,
			xfbml: true,
			version: 'v2.8'
		});

		FB.getLoginStatus(function(response) {
			sAuth.watchAuthStatusChange(response);
		});

		FB.Event.subscribe('auth.login', function(response) {
			sAuth.watchAuthStatusChange(response);
		});

		FB.Event.subscribe('auth.logout', function(response) {
			sAuth.watchAuthStatusChange(response);
		})
		
	};

	// Load the SDK asynchronously
	(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_US/sdk.js";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
}]);

fbApp.controller('fbCtrl', ['$scope', 'srvAuth', 'srvFriends', function($scope, sAuth, sFriends) {
	$scope.hello = "Hello, World!";

	$scope.checkLoginStatus = function(){
		FB.getLoginStatus(function(response) {
			sAuth.watchAuthStatusChange(response);
		})
	};

	$scope.refresh = function(url) {
		var arr = url.split('/');
		sFriends.refreshList(arr[arr.length - 1]);
	}
}]);
