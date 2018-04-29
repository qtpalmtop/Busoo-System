define(['app', 'controllers/index', 'controllers/login', 'controllers/logout', 'controllers/signup', 'controllers/film', 'controllers/ticket', 'controllers/order', 'controllers/lineStatus', 'controllers/addline', 'controllers/createStation', 'controllers/createLine', 'controllers/ajustLine', 'controllers/busInfo', 'controllers/employee', 'controllers/driver'],
    function(app, index, login, logout, singnup, film, ticket, order, lineStatus, addline, createStation, createLine, ajustLine, busInfo, employee, driver) {

        return app.config(['$routeProvider', function($routeProvider) {
            $routeProvider.
            when('/', {
                templateUrl: 'partials/index.html',
                controller: index
            }).
            when('/lineStatus', {
                templateUrl: 'partials/lineStatus.html',
                controller: lineStatus
            }).
            when('/addline', {
                templateUrl: 'partials/addline-1.html',
                controller: addline
            }).
            when('/addline2', {
                templateUrl: 'partials/addline-2.html',
                controller: createStation
            }).
            when('/addline3', {
                templateUrl: 'partials/addline-3.html',
                controller: createLine
            }).
            when('/addline4', {
                templateUrl: 'partials/addline-4.html',
                controller: ajustLine
            }).
            when('/addline5', {
                templateUrl: 'partials/addline-5.html',
                controller: addline
            }).
            when('/busInfo', {
                templateUrl: 'partials/businfo.html',
                controller: busInfo
            }).
            when('/employee', {
                templateUrl: 'partials/employee.html',
                controller: employee
            }).
            when('/driver', {
                templateUrl: 'partials/driver.html',
                controller: driver
            }).
            when('/film', {
                templateUrl: 'partials/film.html',
                controller: film
            }).
            when('/commentlist', {
                templateUrl: 'partials/film.html',
                controller: film
            }).
            when('/comment', {
                templateUrl: 'partials/film.html',
                controller: film
            }).
            when('/ticket', {
                templateUrl: 'partials/ticket.html',
                controller: ticket
            }).
            when('/order', {
                templateUrl: 'partials/order.html',
                controller: order
            }).
            when('/orderlist', {
                templateUrl: 'partials/order.html',
                controller: order
            }).
            when('/login', {
                templateUrl: 'partials/login.html',
                controller: login
            }).
            when('/logout', {
                templateUrl: 'partials/logout.html',
                controller: logout
            }).
            when('/signup', {
                templateUrl: 'partials/signup.html',
                controller: singnup
            }).
            otherwise({
                redirectTo: '/'
            });
            /*  $locationProvider.html5Mode(true);*/
        }]);
    });