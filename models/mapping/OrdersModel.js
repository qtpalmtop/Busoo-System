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

    ticket_id: {
        type: Schema.ObjectId,
        ref: 'Tickets'
    },
    user_id: {
        type: Schema.ObjectId,
        ref: 'Users'
    },
    film_id: {
        type: Schema.ObjectId,
        ref: 'Films'
    },
    is_get: {
        type: Boolean,
        default: false
    },
    is_reback: {
        type: Boolean,
        default: false
    }
});

mongoose.model('Orders', schema);