const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
var admin = require('firebase-admin');
var serviceAccount = require("./secret/config.json");

var path = require('path');

require('dotenv').config()
app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'))
// app.use(express.static(path.join(__dirname, '//frontend/public')));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:"https://console.firebase.google.com/project/portfolio-88cee/firestore",
  storageBucket: process.env.BUCKET_URL
});

const db = admin.firestore();
const userService = require("./user_service");


app.post("/user/create", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.addUser(email, password);
    res.status(201).json(user);
  } catch (err) {
    res.json({
      success:false,
      message:"no user added"
     });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.authenticate(email, password);
    res.json(user);
  } catch (err) {
    res.status(404).json({ 
      success:false,
      message:"no user found"
    });
  }
});


app.post("/projects", cors(), async (req,res) =>{
     var title     = req.body.title;
	  var description = req.body.description;
	  var url   = req.body.url;
	  var projectid = req.body.projectid;
    var projectimg=req.body.projectimg;
    
	    var project  = {
	        title: title,
	        description: description,
	        projectid: projectid,
	        url: url,
          projectimg: projectimg
	      };
        res.json({
          project
        })  
          await storeProject( project);
          return project
      
})

app.listen(process.env.PORT || 5000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

