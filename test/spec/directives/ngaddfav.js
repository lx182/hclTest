'use strict';

describe('Directive: ngAddfav', function () {

  // load the directive's module
  beforeEach(module('hclTestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-addfav></ng-addfav>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngAddfav directive');
  }));
});
