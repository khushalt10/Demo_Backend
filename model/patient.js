var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Patient = new Schema({
    patient_id: {
      type: String,
        required: true
    },
    doctor_id: {
      type: String,
        
    },
    patient_password: {
        type: String,
          required: true
      },
    patient_email: {
      type: String,
        required: true
    },
    patient_name: {
      type: String,
        required: true
    },
    patient_phone: {
      type: String,
        required: true
    },
    patient_gender: {
      type: String,
        required: true
    },
    patient_dob: {
      type: String,
        required: true
    },
});

module.exports = mongoose.model('Patient', Patient);