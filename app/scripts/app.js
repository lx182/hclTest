'use strict';

/**
 * @ngdoc overview
 * @name hclTestApp
 * @description
 * # hclTestApp
 *
 * Main module of the application.
 */
angular
  .module('hclTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular.filter'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .when('/foodDetails/:ndbno', {
        templateUrl: 'views/fooddetails.html',
        controller: 'FooddetailsCtrl',
        controllerAs: 'foodDetails'
      })
      .when('/favorites', {
        templateUrl: 'views/favorites.html',
        controller: 'FavoritesCtrl',
        controllerAs: 'favorites'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
