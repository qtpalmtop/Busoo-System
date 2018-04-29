var DriverModel = require("./../models").Driver;

exports.show = function(req, res) {
	console.log("in DriverRoute: show");
	
	//    res.render('index', { title:'NJBlog.' });
};

exports.create = function(req, res) {
	console.log("in DriverRoute: create");
	var createDriver = new DriverModel(req.body);
	createDriver.save(function(err, Driver) {
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
	console.log("in DriverRoute: createAll req.body", req.body);
	var createDriver;
	req.body.map(function(item, index){
		console.log("item ", item);
		createDriver = new DriverModel(item);
		createDriver.save(function(err, Driver) {
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

exports.getDriverList = function(req, res) {
	
	// if (!req.session.user._id) {
	// 	return res.json({
	// 		err: "没有登录！"
	// 	});
	// }

	console.log("in getDriverList:req", req);
	DriverModel.find({},
		function(err, Drivers) {
			if (err)
				return res.json({
					err: err
				});
			if (!Drivers) {
				return res.json({
					err: '员工信息不存在'
				});
			}

			//console.log(req.session["user"]);
			console.log("员工列表：", Drivers);
			res.json(Drivers);
		});
	//    res.render('index', { title:'NJBlog.' });

};

