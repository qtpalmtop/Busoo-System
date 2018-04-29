module.exports = function(grunt) {
    // 配置
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        requirejs: {
            compile: {
                options: {
                    baseUrl: "public/js",
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

                        // <!-- Placed js at the end of the document so the pages load faster
                        // <script src="lib/jquery-1.10.2.min.js"></script>
                        // <script src="lib/jquery-ui-1.9.2.custom.min.js"></script>
                        // <script src="lib/jquery-migrate-1.2.1.min.js"></script>
                        // <script src="lib/bootstrap.min.js"></script>
                        // <script src="lib/modernizr.min.js"></script>
                        // <script src="lib/jquery.nicescroll.js"></script>
                    
                        // easy pie chart
                        // <script src="lib/easypiechart/jquery.easypiechart.js"></script>
                        // <script src="lib/easypiechart/easypiechart-init.js"></script>
                    
                        // Sparkline Chart
                        // <script src="lib/sparkline/jquery.sparkline.js"></script>
                        // <script src="lib/sparkline/sparkline-init.js"></script>
                    
                        // Morris Chart
                        // <script src="lib/morris-chart/morris2.js"></script>
                        // <script src="lib/morris-chart/raphael-min.js"></script>
                        // <script src="lib/morris-chart/morris.init.js"></script>
                    
                        // height chart
                        // <script src="lib/highcharts.js"></script>
                    
                        // common scripts for all pages
                        // <script src="lib/scripts.js"></script>
                        // <script src="lib/jquery.color.min.js"></script>
                        // <script src="lib/jquery.animateNumber.min.js"></script>
                    
                        // index.js
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

                    optimize:"none",
                    name: "main",
                    out: "public/js/main-built.js"

                    //out: "../public/js/main-built.js"
                }
            }
        },
        cssmin: {
            compress: {
                options: {
                    banner: '/* NJBLog minified css file */'
                },
                files: {
                    'dest/njblog.css': ['public/css/base.css', 'public/themes/glowsimple/default.css']
                }
            }
        },
        concat : {
            domop : {
                src: 'public/js/*.js',
                dest: 'dest/njblog.js'
            }
        },
        uglify : {
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build : {
                src : 'dest/njblog.js',
                dest : 'dest/njblog.min.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['requirejs','cssmin','concat', 'uglify']);
};