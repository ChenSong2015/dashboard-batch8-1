'use strict';

describe('test workCtrl ngshow', function() {
	var scope;
	var ctrl;
	beforeEach(module('DashboardApp'));
	beforeEach(inject(function($rootScope, $controller){
		scope=$rootScope.$new();
		ctrl=$controller('WorkCtrl', { $scope: scope });
	}));
	it('should return current ngshow value', function() {
		expect(scope.visible).toEqual(false);
		expect(scope.cardShow).toEqual(true);
		expect(scope.listShow).toEqual(false);
	});

	describe('test showList function', function() {
		var current;
		beforeEach(function(){
			current=scope.visible;
			scope.setCard();
		});
		it('display visible flags', function(){
			expect(scope.visible).not.toEqual(current);
		});
	});

	describe('test setList function', function() {
		var current;
		beforeEach(function(){
			current=scope.visible;
			scope.setCard();
		});
		it('display card flags', function(){
			expect(scope.visible).not.toEqual(current);
			expect(scope.cardShow).toEqual(true);
			expect(scope.listShow).toEqual(false);
		});
	});

	describe('test setCard function', function() {
		var current;
		beforeEach(function(){
			current=scope.visible;
			scope.setList();
		});
		it('display list flags', function(){
			expect(scope.visible).not.toEqual(current);
			expect(scope.cardShow).toEqual(false);
			expect(scope.listShow).toEqual(true);
		});
	});

	discribe('test emit', function() {
		beforeEach(function() {
			spyOn(scope, "$emit");
		});
	});


});