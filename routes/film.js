var FilmsModel = require("./../models").Films;

exports.show = function(req, res) {

	console.log("in FileRoute");
	FilmsModel.findOne({
			_id: req.body._id
		},
		function(err, film) {
			if (err)
				return res.json({
					err: err
				});
			if (!film) {
				return res.json({
					err: '该电影未录入'
				});
			}
			console.log(film);
			res.json(film);
		});


	//    res.render('index', { title:'NJBlog.' });
};