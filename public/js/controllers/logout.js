define([], function(res) {
	var LogoutController = ["$scope", "$rootScope", "$http", "$location",
		function($scope, $rootScope, $http, $location) {
			$rootScope.title = "登出";
			$http.get('/logout').success(function() {
				$scope.$parent.resetLogin({});
				$location.path("/");
			});
		}
	];
	return LogoutController;
});