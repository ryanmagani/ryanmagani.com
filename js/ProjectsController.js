(function() {

	// Controller for retrieving a list of github projects
	angular.module('PersonalWebsite').controller('Projects',
		['$scope', '$http', '$window', function($scope, $http, $window) {

			// Request to get all of my github projects
			$scope.githubRepoRequest = {
				method: 'GET',
				url: 'https://api.github.com/users/ryanmagani/repos'
			};

			// Attempt to get a list of my projects, show an error
			// message if any HTTP error occurs
			$scope.getProjects = function() {
				$http($scope.githubRepoRequest).
				success(function(data) {
					$scope.projectList = data;
				}).
				error(function() {
					$scope.errorMessage = true;
				});
			};

			$window.onload = function() {
				$scope.getProjects();
			};

	}]);
}());