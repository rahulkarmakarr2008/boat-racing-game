class Game {
    constructor() {}
    getState(){
      var gameStateRef=database.ref("gameState");
      gameStateRef.on("value", function(data){
        gameState=data.val();
      })
      }
      upadate(state){
        database.ref()
      }
    start() {
      form = new Form();
      form.display();
      player = new Player();
    }
    
  }
  