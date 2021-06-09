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

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    //write code to change the background color here
   if(gameState === 1){
    background("cyan");
    Contestant.getContestantInfo();
   }
  
    if(allContestants !== undefined){ 
      var display_position=250
  fill("red");
  textSize(20);
  text("*NOTE: Contestant who answered correct are highlighted in yellow colour!" ,130, 230);
  text("RESULT OF THE QUIZ", 300, 50);

  for(var plr in allContestants){
    var correctAns = "2"
  
    if(correctAns === allContestants[plr].answer)
    fill("yellow")
    else("red")
    
    display_position+=30
    textSize(17);
    text(allContestants[plr].name+ ": "+ allContestants[plr].answer,130,display_position);
      }
  
    }
//write code to show a heading for showing the result of Quiz
//call getContestantInfo( ) here
//write condition to check if contestantInfo is not undefined
//write code to add a note here
//write code to highlight contest who answered correctly
    
  }

}
