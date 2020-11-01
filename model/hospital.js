var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Hospital = new Schema({
    hospital_id: {
      type: String,
        required: true
    },
    hospital_name: {
      type: String,
        required: true
    },
    hospital_phone: {
      type: String,
        required: true
    },
    hospital_address: {
      type: String,
        required: true
    },

});

module.exports = mongoose.model('Hospital', Hospital);