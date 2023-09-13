const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;                  //Save the port number where your server will be listening

const fs = require("fs");           //For file reading/writing purpose

//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname})      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`) 
});

app.get('/read', (req, res) =>{
    // res.sendFile('index.html', {root: __dirname})
    fs.readFile("./assets/temp.json", "utf8", (err, jsonString) => {   //Reading JSON file.
        if (err) {
        console.log("Error reading file from disk:", err);
        return;
        }
        try {
        const questions = JSON.parse(jsonString);
        // print(questions)
        // console.log(questions); // => "Customer address is: Infinity Loop Drive"
        } catch (err) {
        console.log("Error parsing JSON string:", err);
        }
    });
})


fs.readFile("./assets/temp.json", "utf8", (err, jsonString) => {   //Reading JSON file.
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }
  try {
    const questions = JSON.parse(jsonString);
    // console.log(questions); // => "Customer address is: Infinity Loop Drive"
    console.log(questions)
    console.log(typeof questions)
    // print(questions)
    // document.getElementById("display").innerHTML = questions
    } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});

const generateQuestions = function() { 
    alert("HEY")
}
