//jshint esversion:6
const express = require('express');
var request = require('request'); 
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//--------------------------------//

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/spindle.html');
}); 



app.get('/spindle', function (req, res) {
request('http://server.vmccnc.com/spindle', function (error, response, body) {
var tt = JSON.parse(body);
var totalElements = tt.totalElements;
res.send('totalElements = ' + totalElements);
});
}); 


app.get('/bitcoin', function (req, res) {
    console.log('bitcoin GET');
   res.sendFile(__dirname + '/bitcoin.html');
}); 



app.post('/bitcoin', function (req, res) {
    
 console.log('bitcoin POST');
// res.send("req.body = " + req.body);
        
    var crypto = req.body.crypto;
    var fiat = req.body.fiat;
        
 
//    res.send('ok  =  and ' + fiat);
    res.send('ok  = ' + crypto + ' and ' + fiat);
 
}); 



app.get('/bmicalculator', (req, res) => {
      res.sendFile(__dirname + '/bmicalculator.html');  
      }
 );

app.post('/bmicalculator', (req, res) => {
     
     var weight = parseFloat(req.body.weight);
     console.log('weight' + weight);
     var height = parseFloat(req.body.height);
     
  
     res.send('<h1>Your weight = '+(weight/height)+', height ='+height+' </h1>');
     
        }
       );




app.listen(3000, function(){
    console.log('Server started on port 3000');
});