var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Report = new Schema({

    report_id: {
      type: String,
        required: true
    },
    report_date: {
      type: String,
        required: true
    },
    file_name: {
      type: String,
        required: true
    },

});

module.exports = mongoose.model('Report', Report);