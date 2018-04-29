require.config({

    paths: {
        jquery: '../lib/jquery-1.10.2.min',
        bootstrap: '../lib/bootstrap/js/bootstrap',
        underscore: '../lib/underscore/underscore',
        angular: '../lib/angular/angular',
        angularResource: '../lib/angular/angular-resource',
        text: '../lib/require/text',
        i18n:'../lib/require/i18n',
        modernizr:'../lib/modernizr',
        html5shiv:'../lib/html5shiv',
        mcore:'../lib/mcore.min',
        fullscreen:'../lib/fullscreen',
        mcustomscrollbar:'../lib/jquery.mCustomScrollbar.concat.min',
        detectbrowser:'../lib/detectbrowser',
        jqueryUi:'../lib/jquery-ui-1.9.2.custom.min',
        jqueryMigrate:'../lib/jquery-migrate-1.2.1.min',
        nicescroll:'../lib/jquery.nicescroll',
        easypiechart:'../lib/easypiechart/jquery.easypiechart',
        easypiechartInit:'../lib/easypiechart/easypiechart-init',
        sparkline:'../lib/sparkline/jquery.sparkline',
        sparklineInit:'../lib/sparkline/sparkline-init',
        morris:'../lib/morris-chart/morris2',
        raphael:'../lib/morris-chart/raphael-min',
        morrisInit:'../lib/morris-chart/morris.init',
        highcharts:'../lib/highcharts',
        scripts:'../lib/scripts',
        jqueryColor:'../lib/jquery.color.min',
        animateNumber:'../lib/jquery.animateNumber.min'
        //res:'../resources/nls/res'

    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angular-resource' : {deps:['angular']},
        'bootstrap': {deps:['jquery']},
        'mcustomscrollbar':{deps:['jquery']},
        'underscore': {exports: '_'},
        'detectbrowser':{deps:['modernizr']}
        /*,
        'res':{exports:'res'}*/

    },
    priority: [
        "angular"
    ],/*,
    i18n: {
        locale: 'ja-jp'
    },*/
    urlArgs: 'v=1.0.0.1'
});

require(['angular',
         'app',
         'jquery',
         'fullscreen',
         'mcore',
        //  'jqueryUi',
        //  'jqueryMigrate',
        //  'nicescroll',
        //  'easypiechart',
        //  'easypiechartInit',
        //  'sparkline',
        //  'sparklineInit',
        //  'morris',
        //  'raphael',
        //  'morrisInit',
        //  'highcharts',
        //  'scripts',
        //  'jqueryColor',
        //  'animateNumber',
         'controllers/layout',
         'controllers/index',
         'directives/compare',
         'routes',
         'detectbrowser'
], function (angular) {
    angular.bootstrap(document, ['app']);
});