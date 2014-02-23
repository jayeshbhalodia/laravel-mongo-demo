'use strict';

//Global service for global variables
angular.module('mean.system').factory('Global', [ '$rootScope',
    function($rootScope) {    	
        var _this = this;
        _this._data = {
            user: $rootScope.user,
            authenticated: !! $rootScope.user,
            displayLimit: 10
        };
        return _this._data;
    }
]);
