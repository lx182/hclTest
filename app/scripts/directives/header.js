'use strict';

/**
 * @ngdoc directive
 * @name hclTestApp.directive:header
 * @description
 * # header
 */
angular.module('hclTestApp')
  .directive('ngHeader', function () {
    return {
      templateUrl: 'views/shared/header.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
