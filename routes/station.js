var StationModel = require("./../models").Station;

exports.show = function(req, res) {
	console.log("in StationRoute: show");
	
	//    res.render('index', { title:'NJBlog.' });
};

exports.create = function(req, res) {
	console.log("in StationRoute: create");
	var createStation = new StationModel(req.body);
	createStation.save(function(err, station) {
		if (err) {
			return res.json({
				err: err
			});
		}
		//req.session["user"] = user;
		console.log("添加站点成功！");
		res.json();
	});
	//    res.render('index', { title:'NJBlog.' });
};

exports.createAll = function(req, res) {
	console.log("in StationRoute: createAll req.body", req.body);
	var createStation;
	req.body.map(function(item, index){
		console.log("item ", item);
		createStation = new StationModel(item);
		createStation.save(function(err, station) {
			if (err) {
				return res.json({
					err: err
				});
			}
			//req.session["user"] = user;
			console.log("添加站点成功！");
			res.json();
		});
	})
	
	//    res.render('index', { title:'NJBlog.' });
};

exports.getStationList = function(req, res) {
	
	// if (!req.session.user._id) {
	// 	return res.json({
	// 		err: "没有登录！"
	// 	});
	// }

	StationModel.find({},
		function(err, stations) {
			if (err)
				return res.json({
					err: err
				});
			if (!stations) {
				return res.json({
					err: '站点信息不存在'
				});
			}

			//console.log(req.session["user"]);
			console.log("站点列表：", stations);
			res.json(stations);
		});
	//    res.render('index', { title:'NJBlog.' });

};