// --
// Flash message

angular.module('mean.system').factory('alertService', function($rootScope) {

	var alertService = {};
	$rootScope.alerts = {};

	alertService.flash = function(type, msg, isRedirect) {

		if (isRedirect) {
			$rootScope.alerts.isRedirect = true;
		}

		$rootScope.alerts.type = type;
		$rootScope.alerts.msg = msg;
	};

	$rootScope.$on('$routeChangeSuccess', function(evt, cur, prev) {
		if (!$rootScope.alerts.isRedirect) {
			$rootScope.alerts = {};
		}
		$rootScope.alerts.isRedirect = false;
	});

	return alertService;
});