var OrdersModel = require("./../models").Orders;
var TicketsModel = require("./../models").Tickets;

exports.show = function(req, res) {
	if (!req.session.user._id) {
		return res.json({
			err: "没有登录！"
		});
	}
	OrdersModel.find({
			user_id: req.session.user._id
		},
		function(err, orders) {
			if (err)
				return res.json({
					err: err
				});
			if (!orders) {
				return res.json({
					err: '该订单不存在'
				});
			}
			//console.log(req.session["user"]);
			console.log("订单列表：" + orders);
			res.json(orders);
		}).populate([{
		path: 'film_id',
		select: {
			name: 1
		},
	}, {
		path: 'ticket_id',
		select: {
			price: 1,
			play_date: 1
		}
	}]);
	//    res.render('index', { title:'NJBlog.' });

};

exports.create = function(req, res) {
	req.body.user_id = req.session.user._id;
	console.log("请求的ticket_id" + req.body.ticket_id);
	if (req.body.user_id) {
		TicketsModel.update({
			_id: req.body.ticket_id
		}, {
			$inc: {
				seats: 1
			}
		});
		TicketsModel.update({
				_id: req.body.ticket_id
			}, {
				$inc: {
					seats: 1
				}
			},
			function(err, ticket) {
				if (err)
					return res.json({
						err: err
					});
				if (!ticket) {
					return res.json({
						err: '票据不存在'
					});
				}
				//console.log(req.session["user"]);
				console.log("修改后票据：" + ticket);
			});
	}
	var createOrder = new OrdersModel(req.body);
	createOrder.save(function(err, order) {
		if (err) {
			return res.json({
				err: err
			});
		}
		//req.session["user"] = user;
		console.log("购买成功！");
		res.json();
	});
}

exports.reback = function(req, res) {
	//req.body.user_id = req.session.user._id;
	console.log("请求的order_id" + req.body._id);
	if (req.body._id) {
		OrdersModel.remove({
				_id: req.body._id
			},
			function(err, order) {
				if (err)
					return res.json({
						err: err
					});
				if (!order) {
					return res.json({
						err: '订单不存在'
					});
				}
				console.log("删除票据：" + order);
				res.json();
			});
	}
}