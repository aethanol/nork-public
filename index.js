'use strict';
var world = require('./lib/world.json');

var readline = require('readline');

var inv = [];
var health = 100;
var playing = true;
var currRoom = world.rooms[0];
var question = "\nWhat would you like to do? ";

var io = readline.createInterface({ //call the interface "io"
    input: process.stdin, //input comes from the terminal ("standard in")
    output: process.stdout //output goes to the terminal ("standard out")
});

// kick off function that prints instructions and prompts the user
var game = function (world) {

    console.log(currRoom.description);

    // if you are in the cave with no phaser, you die and the game ends
    if (currRoom.id === "cave" && inv[0] == undefined) {
        console.log("Oh no you don't have a weapon!\n");
        console.log("That rabbit's got a vicious streak a mile wide! It's a killer! You soil your armour as it leaps at your juggular and you bleed out on the floor.\nGood luck next time!");
        process.exit();

    } else {
        io.question(question, input);
    }

}


// main fuction that parses the user input and calls the correct function
var input = function (answer) {

    // parse text to lowercase and split text by spaces to string array
    var text = answer.toLowerCase().split(" ");

    if (text[0] === "go") {

        go(text[1]);

    } else if (text[0] === "use") {
        use(text[1]);

    } else if (text[0] === "take") {
        take(text[1]);

    } else if (text[0] === "drop") {
        drop(text[1]);

    } else if (text[0] === "brief") {
        brief();
    } else if (text[0] == "inventory"){
        inventory();
    }else {
        console.log("I didn't understand that command");
        io.question(question, input);
    }
}

var go = function (direction) {
    if (currRoom.exits[direction] != undefined) {
        currRoom = world.rooms[currRoom.exits[direction]];
        game();


    } else {
        console.log("you can't go that way");
        io.question(question, input);
    }
}

var inventory = function(){
    if(inv[0] == undefined){
        console.log("Your inventory is empty");
    }else{
        for(var i = 0; i < inv.length; i++){
            console.log(inv[i]);
        }
    }
    io.question(question, input);
    
}


var take = function (item) {
    if(item === "shard"){
        console.log("You feel yourself yanked through a wormhole back into bed, was this all a dream?");
        console.log("\nCongratulations! You made it home safely and won the game.")
        process.exit();
    }
    if (currRoom.items[item]) {
        inv.push(item);

        console.log("It is a " + currRoom.items[item] + "! You add it to your inventory");

        io.question(question, input);
    } else {
        console.log("you can't take that");
        io.question(question, input);
    }
}

// check to see if inventory array is empty
var use = function (item) {
    // since there is only one item in the game, the empty inventory array will be undefined unless the phaser is in it
    if (inv[0] != undefined) {
        // if you are in the cave shoot the rabbit, otherwise shoot yourself in the foot
        if (currRoom.id === "cave") {
            console.log("You set your phaser to kill and aim at the Rabbit of Caerbannog. You pull the trigger and the rabbit disappears in a blast of ozone and burnt fur");
            console.log("Falling from the ashes, is a strange object that you can only describe as a shard of some unknown material");
            console.log("You can see spacetime warp around it and you think you catch a glimpse of your warm bed through the shard");
            io.question(question, input);
        } else {
            console.log("You shoot yourself in the foot and fall to the ground, blacking out!");
            console.log("After a while you slowly regain conciousness, luckily the phaser was set to stun.")

            io.question(question, input);

        }
    } else {
        console.log("you don't have that");
        io.question(question, input);
    }
}


// drops the item
var drop = function (item) {
    if (inv[item]) {
        inv.item = undefined;
    } else {
        console.log("you don't have that");
        io.question(question, input);
    }
}

// print the description of the room, and ask the input question again
var brief = function () {
    console.log(currRoom.description);
    io.question(question, input);
}


// give setup of premise and kick off the game
console.log("The clock reads 2:05am, you've spent the last 20 hours sitting at your desk working on a revolutionary way to process genomic data.");
console.log("If this works, it will have endless effect on human life. But for now you must sleep so you wade through crused cans of redbull to your room, and fall into your bed");
console.log("As you slip into sleep, you feel a sharp tug on your sternum and you are yanked through a wormhole!!");
console.log("\nWelcome to Nork! gl;hf");
game();

