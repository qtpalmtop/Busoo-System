/**
 * Created with Sublime Text3.
 * User: 李霖
 * Date: 10/29/17
 * Time: 10:21 AM
 * To change this template use File | Settings | File Templates.
 */

define([], function() {

    var OrderController = ["$scope", "$rootScope", "$http", "$location", function($scope, $rootScope, $http, $location) {
        $scope.order = {
            user_id: '',
            film_id: '',
            ticket_id: '',
            is_get: false,
            is_reback: false
        }
        $scope.OrdersInit = function() {
            //console.log("请求的user_id " + $scope.order.user_id);
            $http.post('/orderlist', $scope.order).success(function(data) {
                if (data.err) {
                    console.log(data.err);
                    return $scope.err = data.err;
                }
                //console.log(data);
                $scope.orders = data;
                //$scope.$parent.resetLogin(data);

            });
        };
        $scope.OrdersInit(); //获取页面数据
        $scope.reback = function(id) {
            $scope.order._id = id;
            console.log("请求发送的order_id:" + id);
            $http.post('/reback', $scope.order).success(function(data) {
                if (data.err) {
                    return $scope.err = data.err;
                }
                console.log(data);
            });
        };
    }];

    return OrderController;
});