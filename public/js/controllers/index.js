/**
 * Created with Sublime Text3.
 * User: 李霖
 * Date: 10/29/17
 * Time: 10:21 AM
 * To change this template use File | Settings | File Templates.
 */

define([], function() {

    var IndexController = ["$scope", "$rootScope", "$http", "$location", function($scope, $rootScope, $http, $location) {
        // $scope.title = "DoDo电影网基于nodejs";
        // $rootScope.title = "DoDo电影网基于nodejs";

        // $scope.film = {
        //     _id: 0,
        //     name: '233',
        //     tap: '',
        //     director: '',
        //     actors: '',
        //     type: '',
        //     director: '',
        //     country: '',
        //     version: '',
        //     small_img: '/img/speed8.jpg',
        //     is_run: true
        // };
        // console.log('in IndexControl:233');
        // $scope.filmsInit = function() {
        //     $http.post('/index', $scope.film).success(function(data) {
        //         if (data.err) {
        //             return $scope.err = data.err;
        //         }
        //         //console.log(data);
        //         $scope.films = data;
        //         //$scope.$parent.resetLogin(data);

        //     });
        // };
        // $scope.filmsInit();
        // $scope.showFilm = function(id) { //这里要传递id才行
        //     $scope.film._id = id;
        //     console.log(id);
        //     $http.post('/film', $scope.film).success(function(data) {
        //         if (data.err) {
        //             return $scope.err = data.err;
        //         }
        //         $scope.film = data;
        //         console.log(data);
        //         console.log("获取电影成功");
        //         $scope.$parent.setFilm(data); //将index作用域获取的film传递给父级layout作用域
        //     });
        // };
        console.log('in IndexControl:233');

console.log('in index.js:6666666666');
var table = document.getElementById("paytable");

    setTimeout("$('.tr-1').slideUp('slow')",1000);
    setTimeout("$('.tr-2').slideUp('slow')",3000);
    setTimeout("$('.tr-3').slideUp('slow')",5000);
    setTimeout("$('.tr-4').slideUp('slow')",9000);
    new  Morris.Donut({
        element: 'graph-donut2',
        data: [
            {value: 30, label: '2号线乘坐率', formatted: '30%' },
            {value: 27, label: '1号线乘坐率', formatted: '27%' },
            {value: 24, label: '3号线乘坐率', formatted: '24%' },
            {value: 19, label: '4号线乘坐率', formatted: '19%' }
        ],
        backgroundColor: 'transparent',
        labelColor: '#fff',
        colors: [
            '#5ab6df','#4bcacc','#6a8bbe','#fb8575'
        ],
        formatter: function (x, data) { return data.formatted; }
    });

    $('#num-1').animateNumber({
    number: 2300,
    'font-size': '30px',
    easing: 'easeInQuad',
    },
    2000);
    $('#num-2').animateNumber({
    number: 90,
    'font-size': '30px',
    easing: 'easeInQuad',
    },
    2000);
    $('#num-3').animateNumber({
    number: 19,
    'font-size': '30px',
    easing: 'easeInQuad',
    },
    2000);
    $('#num-4').animateNumber({
    number: 244,
    'font-size': '30px',
    easing: 'easeInQuad',
    },
    2000);
    
    setTimeout("$('.popbar').slideDown('slow')",10000);
    setTimeout("$('.popbar').slideUp('slow')",12000);

    Highcharts.createElement('link', {
    href: 'http://fonts.googleapis.com/css?family=Dosis:400,600',
    rel: 'stylesheet',
    type: 'text/css'
    }, null, document.getElementsByTagName('head')[0]);

    Highcharts.theme = {
    colors: ["#7cb5ec", "#f7a35c", "#90ee7e", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
        "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
    chart: {
        backgroundColor: null,
        style: {
            fontFamily: "微软雅黑"
        }
    },
    title: {
        style: {
            fontSize: '16px',
            fontWeight: 'normal',
            textTransform: 'uppercase'
        }
    },
    tooltip: {
        borderWidth: 0,
        backgroundColor: 'rgba(219,219,216,0.8)',
        shadow: false
    },
    legend: {
        itemStyle: {
            fontWeight: 'normal',
            fontSize: '14px',
            fontFamily:'微软雅黑'
        }
    },
    xAxis: {
        gridLineWidth: 0,
        labels: {
            style: {
                fontSize: '12px'
            }
        }
    },
    yAxis: {
        minorTickInterval: 'auto',
        title: {
            style: {
                textTransform: 'uppercase'
            }
        },
        labels: {
            style: {
                fontSize: '12px'
            }
        }
    },
    plotOptions: {
        candlestick: {
            lineColor: '#404048'
        }
    },


    // General
    background2: '#F0F0EA'

    };

    // Apply the theme
    Highcharts.setOptions(Highcharts.theme);
    $('#main-chart1').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: '乘坐率最高的7个站点'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['天回镇站', '石门社区站', '一凡大道北站', '一凡大道中站', '太平村站', '太平碑站','利民路口站站']
        },
        yAxis: {
            min: 0,
            title: {
                text: '乘坐率 (%)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                color:'#6a8abe'
            }
        },
        series: [{
            name: '乘坐率',
            data: [98.0, 95.9, 93.5, 92.5, 88.2, 85.5, 85.2]
        }]
    });

    $('#main-chart2').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: '乘坐率最高的7个班次'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['1号线-9:00-1车', '1号线-9:10-2车', '2号线-12:00-6车', '2号线-12:10-4车', '4号线-9:00:5车', '4号线-9:20-7车','7号线-9:00-3车']
        },
        yAxis: {
            min: 0,
            title: {
                text: '乘坐率 (%)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                color:'#5ab6df'
            }
        },
        series: [{
            name: '乘坐率',
            data: [98.0, 97.9, 96.5, 94.5, 88.2, 87.5, 86.2]
        }]
    });
    $('#main-chart4').highcharts({
        title: {
            text: '乘坐率最高的四条线路',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: ['周一', '周二', '周三', '周四', '周五', '周六','周日']
        },
        yAxis: {
            title: {
                text: '乘坐率 (%)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '2号线',
            data: [78.0, 67.9, 79.5, 74.5, 68.2, 71.5, 85.2]
        }, {
            name: '3号线',
            data: [98.0, 97.9, 99.5, 94.5, 98.2, 91.5, 95.2]
        }, {
            name: '4号线',
            data: [88.0, 87.9, 89.5, 84.5, 88.2, 81.5, 85.2]
        }, {
            name: '1号线',
            data: [68.0, 67.9, 69.5, 64.5, 68.2, 61.5, 65.2]
        }]
    });  
        
    }];

    return IndexController;
});