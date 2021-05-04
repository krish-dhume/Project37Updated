class Quiz {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    start(){
      if(gameState === 0){
        contestant = new Contestant();
        contestant.getCount();
        form = new Question()
        form.display();
      }
    }
    play(){
      form.hide();
      title.hide();
      background("yellow")
      var tit = createElement('h1')
      tit.html("Result");
      tit.position(500, 0);
      Contestant.getContestantInfo();
       console.log(allContestants)
      if(allContestants!==undefined){
        var display_position=400
        
       fill("Blue")
       textSize(20)
       text("*NOTE*:Contestant who answer correct are highlighted  in green color",130,430)
        for(var plr in allContestants){
          var correctAns="2";
          if(correctAns===allContestants[plr].answer){
            fill("Green")
          }
          else{
            fill("red")
            
          }
          display_position+=50

          textSize(24)
          text(allContestants[plr].name+":" +allContestants[plr].answer,240,display_position)
        }
      }
    }
  }