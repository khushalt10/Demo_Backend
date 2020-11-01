var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Disease = new Schema({

    disease_id: {
      type: String,
        required: true
    },
    disease_name: {
      type: String,
        required: true
    },
    doctor_id: {
        type: String,
          
    },
    treatment_id: {
        type: String,
          
    },
    patient_id: {
        type: String,
         
    },

});

module.exports = mongoose.model('Disease', Disease);