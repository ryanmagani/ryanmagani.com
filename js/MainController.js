(function() {

	// Controller for creating tab enums and initializing which content to display
	angular.module('PersonalWebsite').controller('Main',
		['$scope', '$window', function($scope, $window) {

		// Enum definition for tab views
		$scope.TabEnum = Object.freeze({
			"ABOUT" : 0,
			"PROJECTS" : 1,
			"RESUME" : 2
		});

		// Must occur before the page loads to initialize
		// properly with ng-show and ng-animate,
		// otherwise, this ideally would be wrapped in $window.onload
		$scope.selected = $scope.TabEnum.ABOUT;

	}]);
}());