const Doctor = require('../model/doctor'); 
const bcrypt = require("bcrypt");
const salts = 10

module.exports = {
    index:(req,res) => {
        // const doctor = new Doctor({
        //     doctor_id:"2",
        //     hospital_id:"22",
        //     doctor_email: "user@gmail.com",
        //     doctor_name: "khushal",
        //     doctor_phone: "8879844352",
        //     licence: "18102B0024",
        //     doctor_gender: "Male",
        //     doctor_dob: "22 Jan",
        //     specialization: "Cancer",

        // });
        // doctor.save();
        // console.log("Saved");
        res.send("gg");
    },

    registerPost:(req,res) => {
        console.log(req.body.object);
        const {pass1, pass2,special, user,gender, username, email, license, dob, phone} = req.body.object;

       
            console.log("Match")
            if (user == "doctor"){
                Doctor.findOne({doctor_email:email}).then(doctor => {
                    if(doctor){
                        console.log("Already Doctor")
                    }
                    else {
                        const newDoctor = new Doctor({
                            doctor_id:"1234121",
                            doctor_email:email,
                            doctor_password:pass1,
                            doctor_phone:phone,
                            special:special,
                            licence:license,
                            doctor_gender:gender,
                            doctor_dob:dob,
                            doctor_name:username
                        });
                        
                        newDoctor.save();
                        console.log("Saved the doctor");
                        
                    }
                })
            }
            else if(user == "patient") {
                Doctor.findOne({patient_email:email}).then(patient => {
                    if(patient){
                        console.log("Already patient")
                    }
                    else {
                        const newpatient = new Patient({
                            patient_id:"1234121",
                            patient_email:email,
                            patient_password:pass1,
                            patient_phone:phone,  
                            patient_gender:gender,
                            patient_dob:dob,
                            patient_name:username
                        });
                        
                        newPatient.save();
                        console.log("Saved the doctor");
                        
                    }
                })
            }
           
      
        // User.findOne({email:email}).then(user => {
        //     if(user){
        //         req.flash("error-message","User with this email already exists.");
        //         res.redirect("/register");
        //     }
        //     else{
        //         const newUser = new User(req.body);

        //         bcrypt.hash(newUser.password,salts,(err,hash) => {
        //             newUser.password= hash
        //             newUser.save().then(user => {
        //                 req.flash("success-message","Successfully registered.");
        //                 res.redirect("/login");
        //             });
        //         })
        //     }
        // })
        


        res.send("DOneeeee")
    },

    loginPost:(req,res) => {
        const {email, pass} = req.body.object;
        Doctor.find({doctor_email:email,doctor_password:pass},(err,user) => {
            if(user){
                console.log("Logged in")
            }else{
                console.log("Not Found")
            }
        })
        
    }
}