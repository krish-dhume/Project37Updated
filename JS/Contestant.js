class Contestant {
    constructor(){
      this.name=null
      this.answer=0
      this.index=null
    }
  
    getCount(){
      var playerCountRef = database.ref('contestantCount');
      playerCountRef.on("value",function(data){
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "players/player" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        answer:this.answer
        
      });
  
    }
    static getContestantInfo(){
       var playerInfoRef=database.ref("players")
       playerInfoRef.on("value",(data)=>{
         allContestants=data.val();
       })
    }
  }