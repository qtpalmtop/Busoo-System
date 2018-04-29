var EmployeeModel = require("./../models").Employee;

exports.show = function(req, res) {
	console.log("in EmployeeRoute: show");
	
	//    res.render('index', { title:'NJBlog.' });
};

exports.create = function(req, res) {
	console.log("in EmployeeRoute: create");
	var createEmployee = new EmployeeModel(req.body);
	createEmployee.save(function(err, employee) {
		if (err) {
			return res.json({
				err: err
			});
		}
		//req.session["user"] = user;
		console.log("添加员工成功！");
		res.json();
	});
	//    res.render('index', { title:'NJBlog.' });
};

exports.createAll = function(req, res) {
	console.log("in EmployeeRoute: createAll req.body", req.body);
	var createEmployee;
	req.body.map(function(item, index){
		console.log("item ", item);
		createEmployee = new EmployeeModel(item);
		createEmployee.save(function(err, employee) {
			if (err) {
				return res.json({
					err: err
				});
			}
			//req.session["user"] = user;
			console.log("添加员工成功！");
			res.json();
		});
	})
	
	//    res.render('index', { title:'NJBlog.' });
};

exports.getEmployeeList = function(req, res) {
	
	// if (!req.session.user._id) {
	// 	return res.json({
	// 		err: "没有登录！"
	// 	});
	// }

	console.log("in getEmployeeList:req", req);
	EmployeeModel.find({},
		function(err, employees) {
			if (err)
				return res.json({
					err: err
				});
			if (!employees) {
				return res.json({
					err: '员工信息不存在'
				});
			}

			//console.log(req.session["user"]);
			console.log("员工列表：", employees);
			res.json(employees);
		});
	//    res.render('index', { title:'NJBlog.' });

};

