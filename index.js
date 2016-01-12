'use strict';
var world = require('./lib/world.json');

var readline = require('readline');

var io = readline.createInterface({ //call the interface "io"
    input: process.stdin, //input comes from the terminal ("standard in")
    output: process.stdout //output goes to the terminal ("standard out")
});


class Room{
    constructor(id, description){
        this.id = id;
        this.description = description;
        this.items = [];
        this.exits = [];
    }
}


class Item{
    constructor(location, id){
        this.location = location;
        this.id = id;
    }
}

class Headlamp extends Item{
    constructor(){
        super();
    }
    
    on(){
        
    }
}

class Phaser extends Item{
    constructor(){
        super();
    }
    
    setting(){
        
    }
}

class Pamphlet extends Item{
    constructor(){
        super();
    }
    
}
// Game object
var Game = function(world){
    this.build(world);
}

// build the world
Game.prototype.build = function(world){
    var worldArr = world.rooms;

    for(var i = 0; i < worldArr.length; i++){
        
        var newRoom = new Room(worldArr[i].id, worldArr[i].description);
        
        
        // for(var j = 0; j < worldArr[i].exits[j].length; j++){
        //     newRoom.exits.push(worldArr[i].exits[j]);
        // }
               
    }
  
};

// play the game
Game.prototype.play = function(){
    var self = this;
    console.log('Welcome to Nork! gl;hf');
    console.log('You find yourself in a barren snowy wasteland naked but a broken fitbit and a pair of flip flops');
    console.log('To the north there is a cabin, to the east is a foreboding forest');
};

// uses item
Game.prototype.use = function(item){
    var self = this;
};

// takes item
Game.prototype.take = function(item){
    
};

// goes direction
Game.prototype.go = function(){
    
};

// drop item
Game.prototype.drop = function(){
    
};

// gives description of area
Game.prototype.brief = function(){
    
};

// read item
Game.prototype.read = function(item){
    
};


var game = new Game(world);
game.play();

