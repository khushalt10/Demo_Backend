var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Treatment = new Schema({
    treatment_id: {
      type: String,
        required: true
    },
    patient_id: {
      type: String,
       
    },
    doctor_id: {
      type: String,
      
    },
    report_id: {
      type: String,
        
    },
    hospital_id: {
      type: String,
       
    },
    symptoms: {
      type: String,
        required: true
    },
    treatment_status: {
      type: String,
        required: true
    },
    treatment_date: {
      type: String,
        required: true
    },
});

module.exports = mongoose.model('Treatment', Treatment);