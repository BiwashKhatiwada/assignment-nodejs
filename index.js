const express = require('express');
const app = express();
const router = express.Router();
var path = require('path');

app.use(express.static(path.join(__dirname, 'templates')))

router.get('/about',function(req,res){
    res.sendFile( __dirname + "/templates/" + "aboutus.html" );
  });
  
  router.get('/contact',function(req,res){
    res.sendFile( __dirname + "/templates/" + "contactus.html" );
  });

  router.get('*',function(req,res){
    res.redirect('/');
   });
   
app.use(router);
app.listen(process.env.port || 3000);