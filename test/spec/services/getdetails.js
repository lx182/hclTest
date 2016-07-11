'use strict';

describe('Service: getDetails', function () {

  // load the service's module
  beforeEach(module('hclTestApp'));

  // instantiate service
  var getDetails;
  beforeEach(inject(function (_getDetails_) {
    getDetails = _getDetails_;
  }));

  it('should do something', function () {
    expect(!!getDetails).toBe(true);
  });

});
