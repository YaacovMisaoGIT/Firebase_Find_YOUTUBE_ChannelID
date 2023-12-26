const express = require("express"); 
const { channelId } = require("@gonetone/get-youtube-id-by-url"); 
const bodyParser = require("body-parser"); 
const app = express(); 
  
app.use( 
  bodyParser.urlencoded({ 
    extended: true, 
  }) 
); 
  
// Home Route 
app.get("/", (req, res) => { 
  res.sendFile(__dirname + "/views/index.html"); 
}); 
 
// Channel Id route 
app.post("/channel-id", (req, res) => { 
    const url = req.body.url; 
    channelId(url) 
      .then((id) => { 
        //Success   
        const response =  
  `<center><h2>Channel Id is - ${id}</h2><center>`; 
        res.send(response); 
      }) 
      .catch((err) => { 
        // Error 
        res.send("Some error occurred"); 
      }); 
  }); 

  app.listen(4000, () => { 
    console.log("Server running on port 4000"); 
  }); 
