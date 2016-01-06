'use strict';
var readline = require('readline');

var io = readline.createInterface({ //call the interface "io"
  input: process.stdin, //input comes from the terminal ("standard in")
  output: process.stdout //output goes to the terminal ("standard out")
});

var bag = [];
var health = 100;

