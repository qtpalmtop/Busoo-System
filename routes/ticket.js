var TicketsModel = require("./../models").Tickets;

exports.show = function(req, res) {

	TicketsModel.find({
			film_id: req.body.film_id
		},
		function(err, tickets) {
			if (err)
				return res.json({
					err: err
				});
			if (!tickets) {
				return res.json({
					err: '该电影票未录入'
				});
			}
			console.log(tickets);
			res.json(tickets);
		}).populate('film_id');
	//    res.render('index', { title:'NJBlog.' });
};