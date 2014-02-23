'use strict';
angular.module('mean').directive('addthisToolbox', ['$timeout',
	function($timeout) {
		return {
			restrict: 'A',
			transclude: true,
			replace: true,
			template: '<div ng-transclude></div>',
			link: function($scope, element, attrs) {
				$timeout(function() {
					addthis.init();					
					addthis.toolbox($(element).get());
				});
			}
		};
	}
]);

angular.module('mean').directive('areachart', function() {

    return {
        // required to make it work as an element
        restrict: 'E',
        template: '<div></div>',
        replace: true,
        // observe and manipulate the DOM
        link: function($scope, element, attrs) {

            var data = $scope[attrs.data],
                xkey = $scope[attrs.xkey],
                ykeys= $scope[attrs.ykeys],
                labels= $scope[attrs.labels];

            var setData = function(){
                Morris.Area({
                    element: element,
                    data: data,
                    xkey: xkey,
                    ykeys: ykeys,
                    labels: labels,
                    grid:false
                });
            };

            attrs.$observe('data',setData);
        }

    };

});
