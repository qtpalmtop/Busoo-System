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

    employeeCode: String,
    name: String,
    phone: String,
    address: String,
    position: {
        type: Array
    }
    
    /*date: {
        type: Date,
        default: Date.now
    },
    director: String,
    actors: String,
    type: String,
    director: String,
    country: String,
    version: String,
    play_time: String,
    story: String,
    img_urls: {
        type: Array
    },
    comments: {
        type: Schema.ObjectId,
        ref: 'Comments'
    },
    small_img: String,
    is_run: {
        type: Boolean,
        default: true
    }*/
});

mongoose.model('Employee', schema);