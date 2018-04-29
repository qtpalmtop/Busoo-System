/**
 * Created with Sublime Text3.
 * User: 李霖
 * Date: 10/29/17
 * Time: 10:21 AM
 * To change this template use File | Settings | File Templates.
 */

define([], function() {

    var DriverController = ["$scope", "$rootScope", "$http", "$location", function($scope, $rootScope, $http, $location) {
        
        console.log('in Driver.js: 323');

        $scope.isShow = true;

        var $ctrl = this;
        /*{
            "id": 1236712181,
            "name": "刘颖",
            "address": "建设路",
            "position": [104.085389, 30.627031],
            "scheduling": "3号线-9:00-3车",
            "phone": 18328020681
        },*/

        //转换字典
        var dic = {
            "司机工号": "driverCode",
            "司机姓名": "name",
            "所属线路": "lineCode",
            "所属车辆": "carCode",
            "手机号": "phone",
            "发车时间": "startTime"
        }

        function fake_click(obj) {
            var ev = document.createEvent("MouseEvents");
            ev.initMouseEvent(
                "click", true, false, window, 0, 0, 0, 0, 0
                , false, false, false, false, 0, null
            );
            obj.dispatchEvent(ev);

            console.log("2333333?@!3");
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

        /*
        *写入司机表数据到json
        */
        $scope.changeToJson = function (data){
            if (data == null)
                return;
        
            var newData = data.map(function(item, index){

                var obj = new Object();

                //转换key成字典中value字段以便表格的读取
                for (key in item){                    
                    obj[dic[key]] = item[key];
                    console.log("in exportToJson: obj", obj);
                }

                return obj;
            })    

            console.log("in exportToJson: newData :",newData);
            
            return newData;
        }

        

        $('#excel-file').change(function(e) {
            var files = e.target.files;

            var fileReader = new FileReader();
            fileReader.onload = function(ev) {
                try {
                    var data = ev.target.result,
                        workbook = XLSX.read(data, {
                            type: 'binary'
                        }), // 以二进制流方式读取得到整份excel表格对象
                        persons = []; // 存储获取到的数据
                } catch (e) {
                    console.log('文件类型不正确');
                    return;
                }

                // 表格的表格范围，可用于判断表头是否数量是否正确
                var fromTo = '';

                // 遍历每张表读取
                for (var sheet in workbook.Sheets) {
                    if (workbook.Sheets.hasOwnProperty(sheet)) {
                        fromTo = workbook.Sheets[sheet]['!ref'];
                        console.log(fromTo);
                        persons = persons.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
                        break; // 如果只取第一张表，就取消注释这行
                    }
                }

                console.log(persons);

                //转换格式
                var dataList = $scope.changeToJson(persons);

                //写入司机数据到数据库
                $scope.addDriver(dataList);

                //导出到json
                var jsonString = JSON.stringify(dataList);
                $scope.export_raw('driver.json',jsonString);

                setTimeout(function(){window.location.reload();$scope.isShow = false;},3000);
            };

            // 以二进制方式打开文件
            fileReader.readAsBinaryString(files[0]);
        });

        $scope.addDriver = function(dataList) { 
            
            $http.post('/addAllDriver',
                        dataList)
                        .success(function(data) {
                if (data.err) {
                    return $scope.err = data.err;
                }

                console.log("in addDriver", data);
            });
        };
    }];

    return DriverController;
});