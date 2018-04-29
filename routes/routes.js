/**
 * Created with Sublime Text3.
 * User: 李霖
 * Date: 10/29/17
 * Time: 1:47 PM
 * To change this template use File | Settings | File Templates.
 */

var index = require('./index');
var user = require('./user');

var lineStatus = require('./lineStatus');
var employee = require('./employee');
var driver = require('./driver');
var station = require('./station');
var line = require('./line');

/*
var film = require('./film');
var addline5 = require('./addLine5');
var ticket = require('./ticket');
var comment = require('./comment');
var order = require('./order');
var blog = require('./blog');*/

module.exports = function(app) {
	app.get('/', index.index);
	app.post('/index', index.indexInit);
	app.post('/lineStatus', lineStatus.show);
	app.post('/addline', employee.show);
	
	app.post('/addEmployee', employee.create);
	app.post('/getEmployee', employee.getEmployeeList);
	app.post('/addAllEmployee', employee.createAll);

	app.post('/addDriver', driver.create);
	app.post('/getDriver', driver.getDriverList);
	app.post('/addAllDriver', driver.createAll);

	app.post('/addStation', station.create);
	app.post('/getStation', station.getStationList);
	app.post('/addAllStation', station.createAll);
	
	app.post('/addLine', line.create);
	app.post('/addAllLine', line.createAll);
	app.post('/getLine', line.getLineList);
	// app.post('/addline5', addline5.show);
	// app.post('/film', film.show);
	// app.post('/comment', comment.create);
	// app.post('/commentlist', comment.show);
	// app.post('/ticket', ticket.show);
	// app.post('/order', order.create);
	// app.post('/orderlist', order.show);
	// app.post('/reback', order.reback);
	// app.get('/list', user.list);
	// app.get('/blog', blog.list);
	app.get('/user', user.list);
	app.post('/signup', user.create);
	app.post('/login', user.login);
	app.get('/logout', user.logout);
	app.get('/checklogin', index.getLoginUser);
};