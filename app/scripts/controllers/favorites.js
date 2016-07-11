'use strict';

/**
 * @ngdoc function
 * @name hclTestApp.controller:FavoritesCtrl
 * @description
 * # FavoritesCtrl
 * Controller of the hclTestApp
 */
angular.module('hclTestApp')
        .controller('FavoritesCtrl', ["$scope","$filter", function ($scope,$filter) {
            this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
    var fav = JSON.parse(localStorage.getItem('favorites'));
    $scope.list = [];
    angular.forEach(fav, function(val, key) {
        $scope.list.push(JSON.parse(val));
    });
    $scope.remove = function(item){
        var index = $scope.list.indexOf(item);
        $scope.list.splice(index, 1);
        deleteAux(item.ndbno);
        
    };
    function deleteAux(data){
        var a = [];
      
        if(localStorage.getItem('fav')=== null){
            localStorage.setItem('fav',[]);
            a = [];
        }else{
            a = JSON.parse(localStorage.getItem('fav'));
        }
        if(a.indexOf(data)> -1){
            var pos = a.indexOf(data);
            a.splice(pos, 1);                
        }
        localStorage.setItem('fav', JSON.stringify($filter('unique')(a)));
    }
}]);
