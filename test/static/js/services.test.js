'use strict';

describe('service unit test', function() {

	var srvAuth, srvFriends, rootScope;

	beforeEach(function() {
		angular.mock.module('srvModule');
	});

	var apiResponse = {
		id: '1873408922900722',
		email: 'zaa-wy-zym@163.com',
		name: 'Aoran Zhao',
		last_name: 'Zhao',
		first_name: 'Aoran'
	};
	var FB = {
		init: function() {

		},
		login: function() {

		},
		api: function(url, params, callback) {
			return callback(apiResponse);
		}
	};
	var FacebookConnect = {
		login: FB.login
	};
	var httpBackend = null;

	beforeEach(inject(function(_srvAuth_, _srvFriends_, $rootScope) {
		srvAuth = _srvAuth_;
		srvFriends = _srvFriends_;
		rootScope = $rootScope;
	}));

	it('srvAuth service should be defined', function() {
		expect(srvAuth).toBeDefined();
	});

	it('srvFriends service should be defined', function() {
		expect(srvFriends).toBeDefined();
	});

	it('user should be undefined', function() {
		expect(rootScope.user).toBe(undefined);
	});

});
