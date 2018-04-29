/**
 * Created with Sublime Text3.
 * User: 李霖
 * Date: 10 / 29 / 17
 * Time: 10:21 AM
 * To change this template use File | Settings | File Templates.
 */

define([], function() {

    var CreateLineController = ["$scope", "$rootScope", "$http", "$location", function($scope, $rootScope, $http, $location) {
        var $ctrl = this;
        
        console.log('in createLine.js: 2333');

        $("#modal").iziModal();
        $("#modal-people").iziModal({
            title: "此站 应乘人员",
            subtitle: "所属线路：一号线",
            iconClass: 'icon-announcement',
            width: 700,
            padding: 20
        });
        $(document).on('click', '.trigger-people', function (event) {
            event.preventDefault();
            $('#modal-people').iziModal('open');
        });


        // lineCode: String,
        // stations: {
        //     type: Array
        // },
        // rideRate: Number,
        // isRuning: Boolean,
        // carList: {
        //     type:Array
        // }

        var lineList = [];

        //一条线路上的车辆状态
        var carList = [];

        // carList.push({"carCode":1, "license":"川A 43843", "isRuning":false, "passengers":[]});
        // carList.push({"carCode":2, "license":"川A 45867", "isRuning":false, "passengers":[]});

        $scope.addLine = function(dataList) { 
            
            $http.post('/addAllLine',
                        dataList)
                        .success(function(data) {
                if (data.err) {
                    return $scope.err = data.err;
                }

                console.log("in addLine:, data", data);
                //$scope.$parent.setTicket(data); //将index作用域获取的film传递给父级layout作用域
            });
        };

        function getEmployeeList(){

            console.log("in getEmployeeList: 233");
            var reqData = {};

            $http.post('/getEmployee', {}).success(function(data) {
                
                if (data.err) {
                    return $scope.err = data.err;
                }

                var employeeList = data;
                console.log("获取员工信息成功，data:", data);

                //获取站点列表
                //getStationList(employeeList); 

                console.log("in getEmployeeList: carList:", carList);
            });
        }

        $scope.createLine = function(){

            console.log("in getStationList: 233");
            var reqData = {};

            $http.post('/getStation', {}).success(function(data) {
                
                if (data.err) {
                    return $scope.err = data.err;
                }

                //TODO:目前只有一条线
                lineList.push({
                    lineCode: "1",
                    stations: data, 
                    rideRate: 0,
                    isRuning: false,
                    carList: []
                });

                //新增线路到数据库
                $scope.addLine(lineList);

                console.log("获取站点信息成功，data, lineList:", data, lineList);
                //fn(data);
                
                //$scope.$parent.setTicket(data); //将index作用域获取的film传递给父级layout作用域
            });
        }

        //获取员工列表
        //getEmployeeList();

        //获取站点列表并生成线路
        //getStationList();

        // console.log('in createLine.js: 2333');
        var map;

        $scope.mapInit = function (){ //初始化地图对象，加载地图。
            map = new AMap.Map('map', {
                zoom: 12,
            });

            //获取员工列表
            // getEmployeeList(function(employeeList){
            //     angular.forEach(employeeList,function(item){

            //         //画出所有员工坐标
            //         drawpoints(JSON.parse(item["position"]), item["name"], item["address"]);
            //     });
            // });

            // console.log("in mapInit: employeeList:", $scope.employeeList);

            // angular.forEach($scope.employeeList,function(item){

            //     //画出所有员工坐标
            //     drawpoints(JSON.parse(item["position"]), item["name"], item["address"]);
            // });

            // angular.forEach($scope.stationList,function(item){

            //     //画出所有站点坐标
            //     drawstation(item["position"], item["address_now"], item["address_better"]);
            //     //console.log("in getJson:data item, JSON.parse(item[position]), item[address_now], item[address_better]", item, item["position"], item["address_now"], item["address_better"]);
            // });

            //读取并组装JSON数据

            $.getJSON("lib/employee.json", function (data){
                console.log("in createLine: getJSON : data",data);
                
                // var carNum = carList.length;
                // var loop = parseInt(data.length / carNum);
                // var k = 0;

                // for(i = 0 ; i < carNum; ){
                //     for(; k < data.length; k++){
                //         console.log("i, loop, k, k % loop", i, loop, k, k % loop);
                //         if(k != 0 && k % loop == 0){
                //             i++;
                //             //carList[i].passengers.push(data[k]);
                //             continue;
                //         }
                //         else
                //             carList[i].passengers.push(data[k]);
                //     }
                // }

                // console.log("carList now: ", carList);

                //组装数据
                angular.forEach(data,function(item){
                    //画出所有员工坐标
                    drawpoints(JSON.parse(item["position"]), item["name"], item["address"]);

                });
                
            });

            //读取并组装JSON数据
            $.getJSON("lib/station.json", function (data){
                console.log("in createLine: getJSON : data",data);
                
                //组装数据
                angular.forEach(data,function(item){

                    //画出所有站点坐标
                    drawstation(item["position"], item["address_now"], item["address_better"]);
                    //console.log("in getJson:data item, JSON.parse(item[position]), item[address_now], item[address_better]", item, item["position"], item["address_now"], item["address_better"]);
                });
                
            });

            // //写入站点信息到数据库
            // $scope.addLine(lineList);

            /*
            *去掉之前的代码
            drawpoints([104.187874, 30.647379], "高铭", "双林路");
            drawpoints([104.078304, 30.657437], "李霖", "春熙路");
            drawpoints([104.047995, 30.646092], "黄振", "武侯祠");
            drawpoints([104.065850, 30.657361], "郭伟宇", "天府广场");
            drawpoints([104.153771, 30.626145], "陈孝则", "凯德广场");
            drawpoints([104.151968, 30.634631], "王仁鑫", "成渝立交");
            drawpoints([104.034720, 30.721467], "韩雪", "欢乐谷");
            drawpoints([104.085389, 30.627031], "高铭", "四川大学");
            drawpoints([104.103315, 30.669066], "黄振", "建设路");
            drawpoints([104.067201, 30.663745], "郭伟宇", "体育馆");
            drawpoints([104.068464, 30.605893], "黄振", "火车南站");

            drawstation([104.076927, 30.616462], "四川省成都市武侯区火车南站街道航空路49号彩虹苑", "瑞熙城市酒店(科华中路139)");
            drawstation([104.070452, 30.659514], "四川省成都市青羊区华顺大厦四川航空广场", "中信银行(成都银河王朝支行)(顺城大街106-108号)");
            drawstation([104.047995, 30.646092], "四川省成都市武侯区浆洗街街道成都武侯祠博物馆", "成都武侯祠博物馆(武侯祠大街231号)");
            drawstation([104.034720, 30.721467], "四川省成都市金牛区西华街道成都欢乐谷", "华侨城公园广场(交大立交外侧沙西线1号)");
            drawstation([104.164538, 30.636052], "四川省成都市成华区保和街道邓家老房子", "邓家老房子(成华区)");
            drawstation([104.103315, 30.6690662], "四川省成都市成华区建设路街道建设路29号西苑", "中国银行(成都建设路支行)(建设路14号建设巷电子科大学生公寓2幢13-14号)");*/
        }

        //员工地址
        function drawpoints(res, name, addr) {

            var marker = new AMap.Marker({
                icon: "../images/spot.png",
                position: res,
                map: map,
            });

            //信息框

            var title = "<div class='g1-heading'>家庭住址:" + addr + "</div>",
                content = [];
            content.push("<div class='g1-content'>姓名：" + name + "</div>");

            // var str="<div class='bar-g1' style='background:#fff;margin:0;'><div class='g1-heading'>姓名：" + name + "</div>" +
            // 		"<div class='g1-content'>家庭住址" + addr + "</div></div>";				//修改样式。。。

            var infoWindow = new AMap.InfoWindow({
                isCustom: true, //使用自定义窗体
                content: createInfoWindow(title, content.join("<br/>")),
                offset: new AMap.Pixel(20, -30)
            });

            function createInfoWindow(title, content) {
                var info = document.createElement("div");
                info.className = "bar-g1";

                //可以通过下面的方式修改自定义窗体的宽高
                //info.style.width = "400px";
                // 定义顶部标题
                var top = document.createElement("div");
                var titleD = document.createElement("div");
                var closeX = document.createElement("img");
                top.className = "info-top";
                titleD.innerHTML = title;
                top.appendChild(titleD);
                info.appendChild(top);

                // 定义中部内容
                var middle = document.createElement("div");
                middle.className = "info-middle";
                middle.style.backgroundColor = 'white';
                middle.innerHTML = content;
                info.appendChild(middle);

                // 定义底部内容
                var bottom = document.createElement("div");
                bottom.className = "info-bottom";
                bottom.style.position = 'relative';
                bottom.style.top = '0px';
                bottom.style.margin = '0 auto';
                var sharp = document.createElement("img");
                sharp.src = "http://webapi.amap.com/../images/sharp.png";
                bottom.appendChild(sharp);
                info.appendChild(bottom);
                return info;
            }

            function closeInfoWindow() {
                map.clearInfoWindow();
            }
            //信息窗出现的时间
            AMap.event.addListener(marker, 'mouseover', function() {
                //打开信息窗
                infoWindow.open(map, marker.getPosition());
                //infowindow.open(map1,marker.getPosition()); //自由分配地点
                //infoWindow.close();关闭信息窗户
            });
        }


        //站点 

        function drawstation(res, bestaddr, addr) {

            var marker = new AMap.Marker({
                // icon:"../images/station.png",
                position: res,
                map: map,
            });

            //信息框
            var title = "<div class='g1-heading g2-heading'>最符位置：" + bestaddr + "</div>",
                content = [];
            content.push("<div class='g1-heading g2-content'>最佳位置：" + addr + "</div>");

            var infoWindow = new AMap.InfoWindow({
                isCustom: true, //使用自定义窗体
                content: createInfoWindow(title, content.join("<br/>")),
                offset: new AMap.Pixel(20, -30)
            });

            function createInfoWindow(title, content) {
                var info = document.createElement("div");
                info.className = "bar-g1";

                //可以通过下面的方式修改自定义窗体的宽高
                //info.style.width = "400px";
                // 定义顶部标题
                var top = document.createElement("div");
                var titleD = document.createElement("div");
                var closeX = document.createElement("img");
                top.className = "info-top";
                titleD.innerHTML = title;
                top.appendChild(titleD);
                info.appendChild(top);

                // 定义中部内容
                var middle = document.createElement("div");
                middle.className = "info-middle";
                middle.style.backgroundColor = 'white';
                middle.innerHTML = content;
                info.appendChild(middle);

                // 定义底部内容
                var bottom = document.createElement("div");
                bottom.className = "info-bottom";
                bottom.style.position = 'relative';
                bottom.style.top = '0px';
                bottom.style.margin = '0 auto';
                var sharp = document.createElement("img");
                sharp.src = "http://webapi.amap.com/../images/sharp.png";
                bottom.appendChild(sharp);
                info.appendChild(bottom);
                return info;
            }

            function closeInfoWindow() {
                map.clearInfoWindow();
            }

            //信息窗出现的时间
            AMap.event.addListener(marker, 'mouseover', function() {
                //打开信息窗
                infoWindow.open(map, marker.getPosition());
                //infowindow.open(map1,marker.getPosition()); //自由分配地点
                //infoWindow.close();关闭信息窗户
            });

        }
    }];

    return CreateLineController;
});