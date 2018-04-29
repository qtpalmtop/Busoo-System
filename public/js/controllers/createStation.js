/**
 * Created with Sublime Text3.
 * User: 李霖
 * Date: 10 / 29 / 17
 * Time: 10:21 AM
 * To change this template use File | Settings | File Templates.
 */

define([], function() {

    var CreateStationController = ["$scope", "$rootScope", "$http", "$location", function($scope, $rootScope, $http, $location) {
        var $ctrl = this;
        console.log('in createStation.js: 2333');

        var employeeList = []

        //TODO:通过算法生成站点，站点列表
        var stationList = [{
            position: [104.076927, 30.616462],
            address_now: "四川省成都市武侯区火车南站街道航空路49号彩虹苑",
            address_better: "瑞熙城市酒店(科华中路139)",
            passengers: [],
            passengerNames: [],
            limit:2

        },{
            position: [104.070452, 30.659514],
            address_now: "四川省成都市青羊区华顺大厦四川航空广场",
            address_better: "中信银行(成都银河王朝支行)(顺城大街106-108号)",
            passengers: [],
            passengerNames: [],
            limit:2
        },{
            position: [104.047995, 30.646092],
            address_now: "四川省成都市武侯区浆洗街街道成都武侯祠博物馆",
            address_better: "成都武侯祠博物馆(武侯祠大街231号)",
            passengers: [],
            passengerNames: [],
            limit:2
        },{
            position: [104.034720, 30.721467],
            address_now: "四川省成都市金牛区西华街道成都欢乐谷",
            address_better: "华侨城公园广场(交大立交外侧沙西线1号)",
            passengers: [],
            passengerNames: [],
            limit:2
        },{
            position: [104.164538, 30.636052],
            address_now: "四川省成都市成华区保和街道邓家老房子",
            address_better: "邓家老房子(成华区)",
            passengers: [],
            passengerNames: [],
            limit:2
        },{
            position: [104.103315, 30.6690662],
            address_now: "四川省成都市成华区建设路街道建设路29号西苑",
            address_better: "中国银行(成都建设路支行)(建设路14号建设巷电子科大学生公寓2幢13-14号)",
            passengers: [],
            passengerNames: [],
            limit:2
        }];

        console.log('in createStation.js: employeeList ', employeeList);

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

                var i = 1;

                stationList.map(function(stationItem, index){
                    
                    // employeeList.map(function(employeeItem, index){
                    
                    for (;i< employeeList.length+1;i++){

                        stationItem.passengers.push(angular.copy(employeeList[i-1]));
                        stationItem.passengerNames.push(angular.copy(employeeList[i-1].name));
                        //stationItem.passengers.push(angular.copy(employeeList[i]));

                        if(i != 1 && (i % 2) == 0){
                            
                            //stationItem.passengers.pop();
                            //stationItem.passengers.push(angular.copy(employeeList[i]));
                            console.log("employeeItem, i, i % stationItem.limit, stationItem: ", employeeList[i-1], i, i % 3, stationItem);
                            i++;
                            break;
                        }

                        console.log("employeeItem, i, i % stationItem.limit, stationItem: ", employeeList[i-1], i, i % 3, stationItem);
                    }
                    // });

                    return stationItem;
                });

                //写入站点信息到数据库
                $scope.addStation(stationList);
            });
        }

        //获取员工列表
        getEmployeeList();

        $scope.addStation = function(dataList) { 
            
            $http.post('/addAllStation',
                        dataList)
                        .success(function(data) {
                if (data.err) {
                    return $scope.err = data.err;
                }

                console.log("in addStation", data);
                //$scope.$parent.setTicket(data); //将index作用域获取的film传递给父级layout作用域
            });
        };

        function fake_click(obj) {
            var ev = document.createEvent("MouseEvents");
            ev.initMouseEvent(
                "click", true, false, window, 0, 0, 0, 0, 0
                , false, false, false, false, 0, null
            );
            obj.dispatchEvent(ev);
        }

        $scope.export_raw = function (name, data) {
            console.log('in export_raw : name , data:', name, data);

            var urlObject = window.URL || window.webkitURL || window;
            var export_blob = new Blob([data]);
            var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
            save_link.href = urlObject.createObjectURL(export_blob);
            save_link.download = name;
            fake_click(save_link);
        }

        //TODO:通过员工坐标算出站点坐标并且导出到station.json
        $scope.exportToJson = function() {
            stationList = stationList.map(function(item,index){
                item["stationId"] = "00" + (index + 1);
                console.log("in exportToJson: stationList item", item);
                return item;                   
            });

            var jsonString = JSON.stringify(stationList);
            $scope.export_raw('station.json', jsonString);
        }

        var map;

        $scope.mapInit = function (){ //初始化地图对象，加载地图。
            map = new AMap.Map('map', {
                zoom: 10,
            });

            //读取并组装JSON数据
            $.getJSON("lib/employee.json", function (data){
                console.log("in createStation: getJSON : data",data);
                
                //组装数据
                angular.forEach(data,function(item){
                    //画出所有员工坐标
                    drawpoints(JSON.parse(item["position"]), item["name"], item["address"]);

                });
                
            });
        }

        function drawpoints(res, name, addr) {

            var marker = new AMap.Marker({
                position: res,
                map: map,
            });

            //信息框
            // name+"</h4><hr>"+addr	
            var title = "<div class='g1-heading'>姓名：" + name + "</div>",
                content = [];
            content.push("<div class='g1-content'>家庭住址" + addr + "</div>");

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
    }];

    return CreateStationController;
});