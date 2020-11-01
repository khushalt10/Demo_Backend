const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const apiPort = 9000
const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/doctorDB", { useNewUrlParser: true })
   .then( response => {
      console.log("MongoDB Connected"); 
   }).catch(err => {
       console.log("Connection failed");
   });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
// AM1aLLPSQfiyRj6h


//Router routes
const defaultRoutes = require('./routes/default');
app.use("/api",defaultRoutes);


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))