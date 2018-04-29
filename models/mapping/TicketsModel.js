/**
 * Created with Sublime Text3.
 * User: 李霖
 * Date: 17 - 10 - 28
 * Time: 下午4:54
 * To change this template use File | Settings | File Templates.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    film_id: {
        type: Schema.ObjectId,
        ref: 'Films'
    },
    play_date: {
        type: Date,
        default: Date.now
    },
    seats: {
        type: Number,
        default: 50
    },
    price: {
        type: Number,
        default: 30
    }
});

mongoose.model('Tickets', schema);