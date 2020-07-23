const express = require('express');
const app = express();
app.use(express.static('public'));
 /* this line tells Express to use the public folder as our static folder from which we can serve static files*/

//define route 3020
app.listen(3020, function(){
  console.log("Listening on port 3020!")
});


//post reuqest to home page 
app.get('/', function(req, res){
    res.sendFile(__dirname + '/hard.html');
  }); 


//used to update data 
  app.post('/', function (req, res) {
    res.send('Got a POST request')
  })

  //send data to server update 
  app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
  })


  //will delete 
  app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
  })