'use strict';

/**
 * @ngdoc directive
 * @name hclTestApp.directive:footer
 * @description
 * # footer
 */
angular.module('hclTestApp')
  .directive('footer', function () {
    return {
      templateUrl: 'views/shared/footer.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
