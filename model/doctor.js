var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Doctor = new Schema({
    doctor_id: {
      type: String,
        required: true
    },
    hospital_id: {
      type: String,
        
    },
    doctor_email: {
      type: String,
        required: true
    },
    doctor_name: {
      type: String,
        required: true
    },
    doctor_password: {
      type: String,
        required: true
    },
    doctor_phone: {
      type: String,
        required: true
    },
    licence: {
      type: String,
        required: true
    },
    doctor_gender: {
      type: String,
        required: true
    },
    doctor_dob: {
      type: String,
        required: true
    },
    special: {
      type: String,
        required: true
    },
});

module.exports = mongoose.model('Doctor', Doctor);