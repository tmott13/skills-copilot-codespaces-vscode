// create web server 
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// create a file to store comments
var comments = [];
var commentsFile = 'comments.json';

// read comments from file
fs.readFile(commentsFile, function(err, data) {
  if (err) {
    console.log('Error reading comments file: ' + err);
  } else {
    comments = JSON.parse(data);
  }
});