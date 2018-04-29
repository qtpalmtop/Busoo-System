var CommentsModel = require("./../models").Comments;

exports.create = function(req, res) {
	if (!req.session.user._id) {
		return res.json({
			err: "没有登录！"
		});
	}
	req.body.user_id = req.session.user._id;
	console.log("评论的user_id：" + req.body.user_id);
	var createComment = new CommentsModel(req.body);
	createComment.save(function(err, order) {
		if (err) {
			return res.json({
				err: err
			});
		}
		console.log("评论成功");
	});

}

exports.show = function(req, res) {
	CommentsModel.find({
			film_id: req.body.film_id
		},
		function(err, comments) {
			if (err)
				return res.json({
					err: err
				});
			if (!comments) {
				return res.json({
					err: '该评论不存在'
				});
			}
			console.log("评论列表：" + comments);
			res.json(comments);
		}).populate('user_id');
}