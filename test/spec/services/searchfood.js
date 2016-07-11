'use strict';

describe('Service: searchFood', function () {

  // load the service's module
  beforeEach(module('hclTestApp'));

  // instantiate service
  var searchFood;
  beforeEach(inject(function (_searchFood_) {
    searchFood = _searchFood_;
  }));

  it('should do something', function () {
    expect(!!searchFood).toBe(true);
  });

});
