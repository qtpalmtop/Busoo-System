/**
 * Created with Sublime Text3.
 * User: 李霖
 * Date: 10 / 29 / 17
 * Time: 10:21 AM
 * To change this template use File | Settings | File Templates.
 */

define([], function() {

    var FilmController = ["$scope", "$rootScope", "$http", "$location", function($scope, $rootScope, $http, $location) {
        $scope.title = "DoDo电影网基于nodejs";
        $rootScope.title = "DoDo电影网基于nodejs";
        $scope.imgs = Array.from($scope.film.img_urls).toString().split(',');
        $scope.comment = {
            film_id: '',
            comment: ''
        };
        $scope.CommentsInit = function() {
            $scope.comment.film_id = $scope.film._id;
            console.log("请求发送的的film_id" + $scope.comment.film_id);
            $http.post('/commentlist', $scope.comment).success(function(data) {
                if (data.err) {
                    console.log(data.err);
                    return $scope.err = data.err;
                }
                $scope.comments = data;
            });
        };
        $scope.CommentsInit(); //获取页面数据

        $scope.ticket = {
            film_id: ''
        };

        $scope.showTicket = function(id) { //这里要传递id才行
            $scope.ticket.film_id = id;
            $http.post('/ticket', $scope.ticket).success(function(data) {
                if (data.err) {
                    return $scope.err = data.err;
                }
                $scope.ticket = data;
                console.log(data);
                console.log("获取电影票成功");
                $scope.$parent.setTicket(data); //将index作用域获取的film传递给父级layout作用域
            });
        };

        $scope.pubComment = function(id) { //这里要传递id才行
            $scope.comment.film_id = id;
            $http.post('/comment', $scope.comment).success(function(data) {
                if (data.err) {
                    return $scope.err = data.err;
                }
                $scope.comments = data;
                console.log(data);
                console.log("添加评论成功");
                //$scope.$parent.setTicket(data); //将index作用域获取的film传递给父级layout作用域
            });
        };


    }];

    return FilmController;
});