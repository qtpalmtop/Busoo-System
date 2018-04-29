/**
 * Created with Sublime Text3.
 * User: 李霖
 * Date: 17-10-28
 * Time: 下午4:37
 * To change this template use File | Settings | File Templates.
 */

var DaoBase = require('./DaoBase'),
    models = require('./../models'),
    Blog = models.Blog;

var BlogDao = new DaoBase(Blog);

module.exports = BlogDao;