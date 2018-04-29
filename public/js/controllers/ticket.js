/**
 * Created with Sublime Text3.
 * User: 李霖
 * Date: 10/29/17
 * Time: 10:21 AM
 * To change this template use File | Settings | File Templates.
 */

define([], function() {

    var TicketController = ["$scope", "$rootScope", "$http", "$location", function($scope, $rootScope, $http, $location) {

        $scope.order = {
            film_id: '',
            ticket_id: '',
            is_get: false,
            is_reback: false
        }
        $scope.buy = function(film_id, ticket_id) { //这里要传递id才行

            $scope.order.film_id = film_id;
            $scope.order.ticket_id = ticket_id;
            $http.post('/order', $scope.order).success(function(data) {
                if (data.err) {
                    return $scope.err = data.err;
                }
                console.log(data);
                console.log("购买订单成功");
            });
        };

    }];

    return TicketController;
});