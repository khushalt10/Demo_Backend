var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Condition = new Schema({

    condition_id: {
      type: String,
        required: true
    },
    condition_name: {
      type: String,
        required: true
    },
    intensity: {
        type: String,
          required: true
    },
    report_id: {
        type: String,
          
      },
      patient_id: {
        type: String,
         
    },

});

module.exports = mongoose.model('Condition', Condition);