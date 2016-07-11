'use strict';

/**
 * @ngdoc directive
 * @name hclTestApp.directive:ngAddfav
 * @description
 * # ngAddfav
 */
angular.module('hclTestApp')
        .directive('ngAddfav', ["$filter", function ($filter) {
            return {
                restrict: 'A',
        link: function postLink(scope, element, attrs) {
            var data = attrs.ngAddfav;
            element.click(function(){
                var a = [];
      
                if(localStorage.getItem('favorites')=== null){
                    localStorage.setItem('favorites',[]);
                    a = [];
                }else{
                    a = JSON.parse(localStorage.getItem('favorites'));
                }
                if(a.indexOf(data)> -1){
                    
                    var pos = a.indexOf(data);
                    a.splice(pos, 1);                
                }else{
                    a.push(data); 
                }
                localStorage.setItem('favorites', JSON.stringify($filter('unique')(a)));
            }); 
        }
    };
}]);
