'use strict';

/**
 * @ngdoc service
 * @name hclTestApp.getDetails
 * @description
 * # getDetails
 * Service in the hclTestApp.
 */
angular.module('hclTestApp')
        .service('getDetails', ["$http", "$q", function($http, $q) {
            return {
                loadDataFromUrl: function(url) {
                    var defered = $q.defer();
            var promise = defered.promise;
            
            $http({ 
                headers: { 
                    'Accept': 'application/json',
                    'content-type': 'application/json;odata=verbose' 
                }, 
                method: 'GET', 
                url: url 
            })
                    .success(function(data) {
                        defered.resolve(data);
            })
                    .error(function(err) {                        
                        defered.reject(err);
            });
            
            return promise;
        }
    };
}]);