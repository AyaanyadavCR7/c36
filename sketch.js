var gameState=0;
var playerCount;
var allPlayers;
var database;
var form,player,game;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game=new Game();
game.start();

 
}

function draw(){
  background("white");
 if(playerCount===4) {
   game.update(1);

 }
 if(gameState===1){
   clear();
   game.play();
   
 }
}