var LineModel = require("./../models").Line;

exports.show = function(req, res) {
	console.log("in LineRoute: show");
	
	//    res.render('index', { title:'NJBlog.' });
};

exports.create = function(req, res) {
	console.log("in LineRoute: create");
	var createLine = new LineModel(req.body);
	createLine.save(function(err, line) {
		if (err) {
			return res.json({
				err: err
			});
		}
		//req.session["user"] = user;
		console.log("添加线路成功！");
		res.json();
	});
	//    res.render('index', { title:'NJBlog.' });
};

exports.createAll = function(req, res) {
	console.log("in LineRoute: createAll req.body", req.body);
	var createLine;
	req.body.map(function(item, index){
		console.log("item ", item);
		createLine = new LineModel(item);
		createLine.save(function(err, line) {
			if (err) {
				return res.json({
					err: err
				});
			}
			//req.session["user"] = user;
			console.log("添加线路成功！");
			res.json();
		});
	})
	
	//    res.render('index', { title:'NJBlog.' });
};

exports.getLineList = function(req, res) {
	
	// if (!req.session.user._id) {
	// 	return res.json({
	// 		err: "没有登录！"
	// 	});
	// }

	LineModel.find({},
		function(err, lines) {
			if (err)
				return res.json({
					err: err
				});
			if (!lines) {
				return res.json({
					err: '站点信息不存在'
				});
			}

			//console.log(req.session["user"]);
			console.log("站点列表：", lines);
			res.json(lines);
		});
	//    res.render('index', { title:'NJBlog.' });

};