'use strict';

describe('Directive: friendBox', function () {

  // load the directive's module
  beforeEach(module('shareLocApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<friend-box></friend-box>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the friendBox directive');
  }));
});
