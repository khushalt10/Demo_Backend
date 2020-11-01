var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Medicine = new Schema({
    patient_id: {
      type: String,
        
    },
    doctor_id: {
      type: String,
       
    },
    medicine_id: {
        type: String,
          required: true
      },
    status: {
        type: String,
          required: true
    },
    start_date: {
      type: String,
        required: true
    },
    end_date: {
      type: String,
        required: true
    },
    medicine_name: {
        type: String,
          required: true
      },

});

module.exports = mongoose.model('Medicine', Medicine);