var database,gameState=0;
var form,contestant,game,allContestants;
var contestantCount=0;
var title;
function preload()
{
}

function setup() {
	createCanvas(1200,800);

	database=firebase.database();
	game = new Quiz();
	game.getState();
	game.start();
}
function draw() {
	background("pink")
	if(contestantCount===2){
		game.update(1)
	  }
	  if(gameState===1){
		clear();
		game.play();
	  }
 
  

  

  

}



	

	//writw code to move fairy left and right
	

