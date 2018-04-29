/**
 * Created with Sublime Text3.
 * User: 李霖
 * Date: 10/29/17
 * Time: 10:21 AM
 * To change this template use File | Settings | File Templates.
 */

define([], function() {

    var EmployeeController = ["$scope", "$rootScope", "$http", "$location", function($scope, $rootScope, $http, $location) {
        
        console.log('in Employee.js: 654');

        function closeModal(){
            $('#modal-prompt').iziModal('close');
            setTimeout("location.href = 'employee-2.html'",500);
        }
        
        $('#modal').iziModal();
        $("#modal-prompt").iziModal({
            title: "是否导入数据？",
            subtitle: "",
            headerColor: "#77c2ef",
            iconClass: 'icon-announcement',
            width: 300,
            padding: 20
        });
        
    }];

    return EmployeeController;
});