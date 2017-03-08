angular.module('srvModule', [])
	.factory('srvAuth', ['$rootScope', 'srvFriends', function($rootScope, sFriends) {
		// This is used for check user login status
		// invoked when page loading, login, and logout
		var watchAuthStatusChange = function(response) {
			console.log('watchAuthStatusChange');
			// The response object is returned with a status field that lets the
			// app know the current login status of the person.
			if (response) {
				if (response.status === 'connected') {
					// Logged into your app and Facebook
					console.log('status: connected');
					getUser();
				} else if (response.status == 'not_authorized') {
					// The person is logged into Facebook, but not app
					console.log('status: please login into this app');
					clearUser();
				} else {
					// The person is not logged into Facebook, so we're not sure if 
					// they are logged into this app or not
					console.log('status: please login into facebook');
					clearUser();
				}
			}
		}

		var getUser = function() {
			console.log('Tring to get user....');
			FB.api('/me?fields=id,email,name,last_name,first_name', function(response) {
				getUserPicture();
				sFriends.getFriends();
				$rootScope.$apply(function() {
					$rootScope.user = response;
					console.log(JSON.stringify($rootScope.user));
					$rootScope.greeting = "Welcome, " + $rootScope.user.name;
				});
			})
		}

		var clearUser = function() {
			$rootScope.$apply(function() {
				$rootScope.user = {};
				console.log(JSON.stringify($rootScope.user));
				$rootScope.greeting = "Login and show your friends";
				$rootScope.picture = null;
				$rootScope.friends = null;
			})
		}

		var getUserPicture = function() {
			console.log('Tring to get picture...');
			FB.api('/me/picture?type=normal', function(response) {
				$rootScope.$apply(function() {
					$rootScope.picture = response.data.url;
				})
			})
		}

		return {
			watchAuthStatusChange: watchAuthStatusChange
		}
	}])
	.factory('srvFriends', ['$rootScope', function($rootScope) {
		var getFriends = function() {
			console.log('Tring to get friends...');
			FB.api('/me/taggable_friends?limit=20', function(response) {
				console.log(JSON.stringify(response));
				$rootScope.$apply(function() {
					$rootScope.friends = response;
				})
			})
		}

		var refreshList = function(url) {
			console.log('Tring to get new friends list...');
			// console.log(url);
			FB.api('/me/' + url, function(response) {
				console.log(JSON.stringify(response));
				$rootScope.$apply(function() {
					$rootScope.friends = response;
				})
			})
		}

		return {
			getFriends: getFriends,
			refreshList: refreshList
		}
	}]);