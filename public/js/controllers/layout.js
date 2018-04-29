//TODO Define module
define(['../app', '../../background/images'], function(app, images) {
    /* var bgimages=require("../../background/images").imageurls;*/

    return app.controller('LayoutController', function($scope, $http) {
        var $ctrl = this;
        // var i = 0,
        //     imgs = images.imageurls,
        //     randombg = function() {
        //         return Math.round(Math.random() * (imgs.length - 1));
        //     };

        // m$.Image.preLoadImages(imgs.slice(0, 4));
        // $http.get('/checklogin').success(function(user) {
        //     $scope.resetLogin(user);
        //     $scope.user_id = user._id;
        //     console.log("user_id" + $scope.user_id);
        // });
        // $scope.txt = {
        //     home: "欢迎"
        // };
        // $scope.resources = {
        //     theme: " <link href='themes/glow/default.css' rel='stylesheet' type='text/css'>",
        //     bg: imgs[randombg()] //Random generate background image
        // };
        // $scope.resetLogin = function(user) {
        //     if (user.name) {
        //         $scope.login = {
        //             url: 'logout',
        //             name: '注销'
        //         };

        //         $scope.signup = {
        //             url: '',
        //             name: 'welcome:' + user.name
        //         };

        //     } else {
        //         $scope.login = {
        //             url: 'login',
        //             name: '登录'
        //         };
        //         $scope.signup = {
        //             url: 'signup',
        //             name: '注册'
        //         };
        //     }
        // };
        // $scope.setFilm = function(film) {
        //     if (film.name) {
        //         $scope.film = film;
        //     } else {
        //         return null;
        //     }
        // };
        // $scope.setTicket = function(tickets) {
        //     if (tickets.length >= 1) {
        //         $scope.tickets = tickets;
        //     } else {
        //         return null;
        //     }
        // };

        console.log("in layout:233");
        
        var sideNav = document.getElementById("side-nav");
        var prevNode = null

        //监听侧边栏点击事件
        sideNav.addEventListener('click',function(e){
            var target = e.target;
            console.log('in silde head: target:',target);
            
            while(1){
                if(target.nodeName == 'LI'){
                    
                    //prevNode存在则去掉其上的active
                    if(prevNode == null){
                        prevNode = document.getElementById('index');

                        //清理prevNode的active
                        classStrPrev = prevNode.getAttribute('class').replace('active','');
                        prevNode.setAttribute('class',classStrPrev);

                        if(target.getAttribute('class').indexOf('active') == -1){
                            //给当前LI添加active
                            classStrNow = target.getAttribute('class') + ' active';
                            target.setAttribute('class',classStrNow);
                        }

                        console.log('in sideNav: target.href,target.class,target',target.href,target.getAttribute('class').indexOf('active'),target);
                        prevNode = target;
                        break;
                    }
                    else if(prevNode != null){

                        //清理prevNode的active
                        classStrPrev = prevNode.getAttribute('class').replace('active','');
                        prevNode.setAttribute('class',classStrPrev);

                        if(target.getAttribute('class').indexOf('active') == -1){
                            //给当前LI添加active
                            classStrNow = target.getAttribute('class') + ' active';
                            target.setAttribute('class',classStrNow);
                        }

                        console.log('in sideNav: target.class,target',target.getAttribute('class').indexOf('active'),target);
                        prevNode = target;
                        break;
                    }
                    
                }
                else{
                    //冒泡向上寻找，直到找到LI节点
                    console.log('in sideNav: target parentName:',target.parentNode); 
                    target = target.parentNode;
                    
                }
            }   
        });

    });
});