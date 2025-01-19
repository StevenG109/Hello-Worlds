const express = require('express');
const server = express();
const port = 3000;

server.get('/hello', function (req, res) {
  res.send('Hello World! My name is Steven Ghafari');
});

server.listen(port, function() {
    console.log(`listening on ' + port}`);
    });