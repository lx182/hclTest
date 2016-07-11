'use strict';

/**
 * @ngdoc function
 * @name hclTestApp.controller:FooddetailsCtrl
 * @description
 * # FooddetailsCtrl
 * Controller of the hclTestApp
 */
angular.module('hclTestApp')
        .controller('FooddetailsCtrl', [ '$routeParams', 'getDetails', '$scope', function ($routeParams, getDetails, $scope) {
                this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.details = [];
        $scope.name = "";
        var id = $routeParams.ndbno;
        getDetails.loadDataFromUrl('http://api.nal.usda.gov/ndb/reports/?ndbno='+id+'&type=b&format=json&api_key=ustdAPnHOa9GfYAIzBQRnwpstw4Iq6tmvxuV1qKp').then(function (data) {
            $scope.name = data.report.food.name;
            $scope.details = data.report.food.nutrients;
        });
        
    }]);
