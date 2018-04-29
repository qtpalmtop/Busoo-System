/**
 * Created with Sublime Text3.
 * User: 李霖
 * Date: 10/27/17
 * Time: 3:13 PM
 * To change this template use File | Settings | File Templates.
 */

//TODO Define module
define([], function() {
    var SignUpController = ["$scope", "$rootScope", "$http", "$location", function($scope, $rootScope, $http, $location) {
        $rootScope.title = "SignUp";
        $scope.user = {
            name: '',
            password: '',
            repeatpassword: ''
        };

        $scope.createClick = function() {
            $http.post('/signup', $scope.user).success(function(data) {
                if (data.err) {
                    return $scope.err = data.err;
                }
                $location.path("/"); //路由地址变化并跳转
            });
        };
    }];
    return SignUpController;
});