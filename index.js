'use strict';
var world = require('./lib/world.json');

var readline = require('readline');

var inventory = [];
var health = 100;
var playing = true;
var currRoom = world.rooms[0];

var io = readline.createInterface({ //call the interface "io"
    input: process.stdin, //input comes from the terminal ("standard in")
    output: process.stdout //output goes to the terminal ("standard out")
});


var game = function(world){
        console.log("Welcome to Nork! gl;hf");
        console.log("You find yourself in a barren snowy wasteland naked but a broken fitbit and a pair of flip flops");
        console.log("To the north there is a cabin, to the east is a foreboding forest");
        io.question("What would you like to do?", input);
}

var input = function(answer){
        var text = answer.toLowerCase().split(" ");
        
        if(text[0] === "go") {
            
           go(text[1]);
            
        }else if(text[0] === "use"){
            use(text[1]);
            
        }else if(text[0] === "take"){
            
        }else if(text[0] === "drop"){
            
        }else if(text[0] === "breif"){
            this.breif();
        }
}

var go = function(direction){
    if(world.rooms.exits.indexOf(direction) > -1){
        currRoom = world.rooms[direction];
    }else{
        console.log("you can't go that way");
    }
}

var take = function(item){
    
}

var use = function(item){
    
}

var drop = function(item){
    console.log(inventory[0]);
}

