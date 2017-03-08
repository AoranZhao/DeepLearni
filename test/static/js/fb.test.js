'use strict';

describe('fbCtrl', function() {
	var scope;

	beforeEach(module('fbApp'));

	beforeEach(inject(function($injector) {
		scope = $injector.get('$rootScope').$new();
		$injector.get('$controller')('fbCtrl', {$scope: scope});
	}));

	it('should have var hello = "Hello, World!"', function() {
		expect(scope.hello).toBe('Hello, World!');
	})
})