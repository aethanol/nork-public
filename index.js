'use strict';
var world = require('./lib/world.json');

var readline = require('readline');

var inventory = {};
var health = 100;
var playing = true;
var currRoom = world.rooms[0];
var question = "What would you like to do? ";

var io = readline.createInterface({ //call the interface "io"
    input: process.stdin, //input comes from the terminal ("standard in")
    output: process.stdout //output goes to the terminal ("standard out")
});

// kick off function that prints instructions and prompts the user
var game = function(world){
        console.log(currRoom.description);
        //console.log("Welcome to Nork! gl;hf");
        //console.log("You find yourself in a barren snowy wasteland naked but a broken fitbit and a pair of flip flops");
        //console.log("To the north there is a cabin, to the east is a foreboding forest");
        io.question(question, input);
}


// main fuction that parses the user input and calls the correct function
var input = function(answer){
        var text = answer.toLowerCase().split(" ");
        
        if(text[0] === "go") {
            
           go(text[1]);
            
        }else if(text[0] === "use"){
            use(text[1]);
            
        }else if(text[0] === "take"){
            take(text[1]);
            
        }else if(text[0] === "drop"){
            drop(text[1]);
            
        }else if(text[0] === "brief"){
            brief();
        }else{
            console.log("I didn't understand that command");
            io.question(question , input);
        }
}

var go = function(direction){
    if(currRoom.exits[direction]){
       
        currRoom = world.rooms[currRoom.exits[direction]];
        game();
        
        
    }else{
        console.log("you can't go that way");
        io.question(question , input);
    }
}

var take = function(item){
    if(currRoom.items[item]){
        inventory.item = item;
    }else{
        console.log("you can't take that");
        io.question(question , input);
    }
}

var use = function(item){
    if(inventory[item]){
        
    }else{
        console.log("you don't have that");
        io.question(question , input);
    }
}

var drop = function(item){
    if(inventory[item]){
        inventory.item = undefined;
    }else{
        console.log("you don't have that");
        io.question(question , input);
    }
}

var brief = function(){
    console.log(currRoom.description);
    io.question(question , input);
}

console.log("Welcome to nork! gl; hf")
game();

