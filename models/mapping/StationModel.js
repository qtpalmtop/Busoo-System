/**
 * Created with Sublime Text3.
 * User: 李霖
 * Date: 17-10-28
 * Time: 下午4:54
 * To change this template use File | Settings | File Templates.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({

    stationCode: String,
    address_now: String,
    address_better: String,
    position: {
        type: Array
    },
    passengers:{
        type: Array
    },
    limit: Number

});

mongoose.model('Station', schema);