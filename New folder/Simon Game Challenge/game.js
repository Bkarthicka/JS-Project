// $("h1").css("color","red")
var gamePattern = [];

buttoncolor = ["red","blue","green","yellow"];

var userClickedPattern=[];

$(".btn").click(function(){
    // var userChosenColor
    var userChosenColor = $(this).attr("id");
    
    userClickedPattern.push(userChosenColor);
    // console.log(userClickedPattern)
    playSound(userChosenColor);
});

function nextSequence(){
    var randomnumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttoncolor[randomnumber];
    gamePattern.push(randomChosenColor)
    // console.log(randomChosenColor)
    // console.log(gamePattern)
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}
nextSequence()

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}




