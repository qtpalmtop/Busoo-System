/**
 * Created with Sublime Text3.
 * User: 李霖
 * Date: 10 / 29 / 17
 * Time: 10:21 AM
 * To change this template use File | Settings | File Templates.
 */

define([], function() {

    var AddLineController = ["$scope", "$rootScope", "$http", "$location", function($scope, $rootScope, $http, $location) {
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
            "员工编号": "id",
            "员工姓名": "name",
            "家庭住址": "address",
            "家庭住址坐标": "position",
            "手机号": "phone"
        }

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

        /*
        *写入员工表数据到json
        *TODO:写入员工表数据到数据库
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

                //写入员工数据到数据库
                $scope.addEmployee(dataList);

                //导出到json
                var jsonString = JSON.stringify(dataList);
                $scope.export_raw('employee.json',jsonString);

            };

            // 以二进制方式打开文件
            fileReader.readAsBinaryString(files[0]);
        });

        $scope.addEmployee = function(dataList) { 
            
            $http.post('/addAllEmployee',
                        dataList)
                        .success(function(data) {
                if (data.err) {
                    return $scope.err = data.err;
                }

                console.log("in addEmployee", data);
                //$scope.$parent.setTicket(data); //将index作用域获取的film传递给父级layout作用域
            });
        };

        this.$onInit = function() {
            console.log("in $onInit");
        }

        this.$onInit();
    }];

    return AddLineController;
});