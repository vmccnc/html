//jshint esversion:6
const express = require('express');
var request = require('request'); 
const bodyParser = require('body-parser');

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

//--------------------------------//

 let items = ["Buy food", "Cook food", "Eat food"];    

app.get('/render_ejs', (req, res) => {
    let today = new Date();
    let currentDay = today.getDay();
 
   
    let day ="";
    switch(currentDay){

           case 1:
              day = "Monday";
              break;           
           case 2:
              day = "Tursday";
              break;           
           case 3:
              day = "Wensday";
              break;           
           case 4:
              day = "Thersday";
              break;           
           case 5:
              day = "Suturday";
              break;
           case 6:
              day = "Friday";
              break;           
           case 7:
              day = "Suturday";
              break;
           case 0:
              day = "Sunday";
              break;
           
           
           default:
              day = "Some mistake";
              break;
           }
    
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
     let dayAndData =today.toLocaleDateString("en-US", options);
      
     res.render('list', {
                        dayOf: day, 
                        dayAndDataOf: dayAndData,
                        newListItems: items
                     } );
});

 
// post
    app.post('/render_ejs', (req, res) => {
   let newItem = req.body.newItem;
        items.push(newItem);
     console.log('newItem = ' + newItem);
//     res.send('<h1>tt = '+newItem+'</h1>');
 res.redirect("render_ejs");
     }
 );



// 1 - send html file
app.get('/', function (req, res) {
   res.sendFile(__dirname + '/spindle.html');
}); 


// 2
app.get('/spindle', function (req, res) {
    request('http://server.vmccnc.com/spindle', function (error, response, body) {
    var tt = JSON.parse(body);
    var totalElements = tt.totalElements;
    res.send('totalElements = ' + totalElements);
    });
}); 



// 2
app.get('/bitcoin', function (req, res) {
    console.log('bitcoin GET');
    res.sendFile(__dirname + '/bitcoin.html');
}); 


app.post('/bitcoin', function (req, res) {
    
 console.log('bitcoin POST');
// res.send("req.body = " + req.body);
        
    var crypto = req.body.crypto;
    var fiat = req.body.fiat;
    var amount = req.body.amount;
        
    
    var options = {
        url: "https://apiv2.bitcoinaverage.com/convert/global",
        method: "GET",
        qs: {
        from: crypto,
        to: fiat,
        amount: amount
    }
    }
    
 request(options, function(error, response, body){
    
    var data = JSON.parse(body);
    var price = data.price;
    var currentData = data.time;
    
    console.log(price);
    
    res.send('price  = ' + price + ' (' + currentData + ')');
    
});
 
}); 


// 4
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




// 5
app.get('/signup', (req, res) => {
      res.sendFile(__dirname + '/signup.html');  
      }
);

app.post('/signup', (req, res) => {
     
     var firstname = req.body.fname;
     var lastname  = req.body.lname;
     var email     = req.body.email;
    
     console.log(firstname, lastname, email );
    
     res.send('<h1>Your firstname = '+firstname+', lastname ='+lastname+', email' + email + '</h1>');    
        }
 ) ;


// 6
app.get('/lesson229', (req, res) => {
      res.write("<h1>Hello, how are you?</p>") ;
      res.write("<h1>Where you from?</p>") ;
      res.send();
      }
);




app.listen(3000, function(){
    console.log('Server started on port 3000');
});


// 90a5183c0dfab9cd6b3a7071fd178ca8-us3