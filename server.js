// this part installs the packages your going to use in the file.
const express = require('express');
const path = require('path');

// this part creates an instance of the express package and sets it to a variable called app.
const app = express();
// setting the port to a variable for ease of use.
const port = '3000';

// using express variable from line 6 to "get" the home route at the first parameter. 
// And also using res.sendFile to send our index.html page.
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/fithub.html');
});

// this tells express to use the whole folder you're in as middleware and to serve those files to  
// the client.
app.use(express.static(path.join(__dirname)));

// this is express listening for activity on the port 3000. When it connects to this port,
// the function is called and it console.logs('Server listening on port 3000').
app.listen(port, function () {
    console.log('Server listening on port ' + port); 
});