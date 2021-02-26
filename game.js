var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var level = 0;

var started = false;

$(document).keydown(function() {
  if (!started) {
  $("#level-title").html("Level " + level);
  nextSequence();
started = true;
}})


$(".btn").click(function() {
  // var userChosenColour = $(this).attr("id");
  var userChosenColour = this.id;
  userClickedPattern.push(this.id);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
})

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");
  if (userClickedPattern.length === gamePattern.length) {
    setTimeout(function() {
      nextSequence();
    }, 1000);
  }

else {console.log("wrong");
}
}
else { playSound("wrong");
$("body").addClass("game-over");
setTimeout(function() { $("body").removeClass("game-over");
}, 200);
$("#level-title").html("Game Over, Press Any Key to Restart");
startOver();
}
}



function nextSequence() {
  userClickedPattern.length = 0;
  level++;
  $("#level-title").html("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);


}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


function animatePress(currentColour) {
  $("." + currentColour).addClass("pressed");
  setTimeout(function() {
    $("." + currentColour).removeClass("pressed");
  }, 100);
}

function startOver () {
level = 0;
gamePattern = [];
started = false;
}




  //
  // Код ниже покажет все 4 цвета из массива по очереди
  //   for (var i=0;i<4;i++){
  //   var randomChosenColour = buttonColours[nextSequence ()];
  //  alert(randomChosenColour);
  // }
