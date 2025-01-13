
var buttonColors=["green","red","yellow","blue"];
var gamePattern=[];
var userClickedPattern=[];

var started=false;
var level=0;  
$(document).keypress(function(){
  if(!started){
    $("#title").text("level "+level);
    nextSequence();
    started=true;
  }

})

$(".div").on("click" ,function(){
  var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);

    playSound(userChosenColor);
    animatePressed(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
 })


function checkAnswer(currentLevel){
if(gamePattern[currentLevel]===userClickedPattern[currentLevel])
  {
    console.log("success");

if(userClickedPattern.length===gamePattern.length)
  setTimeout(function(){
      nextSequence()
  },1000)

}
else{
playSound("wrong")

  $("#title").text("Game Over, Press any key to start again");
    $("body").addClass("game-over");
    setTimeout (function(){
      $("body").removeClass("game-over")
    },200)

  console.log("Wrong");
  startOver();
}
}


function nextSequence(){

 userClickedPattern=[];

level++;

$("#title").text("level "+level);


   var randomNum=Math.random();
   randomNum=randomNum*4;
   randomNum=Math.floor(randomNum);
   console.log(randomNum);

   var buttonChosen=buttonColors[randomNum];
   gamePattern.push(buttonChosen);

   $("#"+buttonChosen).fadeIn(100).fadeOut(100).fadeIn(100);
   
   playSound(buttonChosen);
   
            /*2nd METHOD TO PLAY THE AUDIO OF CHOSEN  COLOUR 
   $(".div").on("click",function(){
     var sound= $(this).attr("id");
   var audio = new Audio("sounds/"+sound+".mp3");
   audio.play();
   })*/
}
      

function playSound(name){
   
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePressed(currentColor){

   $("#"+ currentColor ).addClass("pressed");
   setTimeout(function(){
   $("#"+currentColor).removeClass("pressed");
   },100)
}


function startOver(){
  level=0;
gamePattern=[];
  started=false;
}




