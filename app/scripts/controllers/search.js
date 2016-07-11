'use strict';

/**
 * @ngdoc function
 * @name hclTestApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the hclTestApp
 */
angular.module('hclTestApp')
        .controller('SearchCtrl', ['$scope', 'searchFood','$filter', function ($scope, searchFood, $filter) {
                $scope.list = [];
        
        $scope.submit = function(){
            $scope.list = [];
            $scope.searched = true;
            var term = this.term;
            searchFood.loadDataFromUrl('http://api.nal.usda.gov/ndb/search/?format=json&q='+term+'&api_key=ustdAPnHOa9GfYAIzBQRnwpstw4Iq6tmvxuV1qKp').then(function (data) {
                $scope.list = data.list.item;
            });
        };
        $scope.addFav = function(id){
            addOrRemoveAux(id);
        };
        $scope.isFav = function(id){
            var a = [];
            a = JSON.parse(localStorage.getItem('fav'));
            if(a == null){
                return '-empty';
            }
            else if(a.indexOf(id)== -1){
                return '-empty';
            }else{
                return '';
            }
        };
        function addOrRemoveAux(data)
        {
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
            }else{
                a.push(data); 
            }
                       
            localStorage.setItem('fav', JSON.stringify($filter('unique')(a)));
        }
    }]);
