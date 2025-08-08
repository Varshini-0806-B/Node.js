//Import the built in http module
const http = require('http');

//Create a server object
const server = http.createServer((req, res) => {
    //Set HTTP Code to 200 (Ok)
    res.statusCode = 200;
    //set header to tell the browser that we are sending HTML
    res.setHeader('Content-Type', 'text');
    //send a response text
    res.end("Home");
});

//Make the server listen on port 3000
server.listen(5000, () => {
    //Log a message to the console when the server starts
    console.log("Server is running on port 5000");
});