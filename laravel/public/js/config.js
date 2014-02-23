'use strict';
angular.module('mean').config(['$routeProvider',    
    function($routeProvider) {
        
       /* $routeProvider.when('/signup', {
            templateUrl: 'views/users/signup.html',
            resolve: {
                loggedin: isNotLogged
            }
        });*/
        $routeProvider.when('/', {
            templateUrl: 'views/list.html',
            
        });

        $routeProvider.when('/add', {
            templateUrl: 'views/add.html',
            
        });

        $routeProvider.when('/data/:id/edit', {
            templateUrl: 'views/edit.html',
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });

    }
]);

// ----
// Setting HTML5 Location Mode

angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);