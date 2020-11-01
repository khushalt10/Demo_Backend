var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Login = new Schema({

    email: {
      type: String,
        required: true
    },
    password: {
      type: String,
        required: true
    },
    role: {
      type: String,
        required: true
    },

});

module.exports = mongoose.model('Login', Login);