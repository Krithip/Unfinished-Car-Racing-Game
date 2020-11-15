var allPlayers, distance = 0
var canvas, backgroundImage, gameState = 0, playerCount, form, game, player;
var database, position;

function setup(){
    createCanvas(500,500);
    database = firebase.database()
    game = new Game()
    game.getState()
    game.start()
}

function draw(){
  if(playerCount == 4) {
      game.update(1)
  }
  if(gameState == 1) {
      clear()
      game.play()
  }
}

