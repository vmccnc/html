// alert("Hello");

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function doFunction(){
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
    // $(".b_restart").remove();
  }
}



// let randomChosenColour; // ??

// $(document).keypress(function{   ... });
// document.addEventListener('keypress', function(event) {
//   //        alert('something is presed! ' + event);
//   console.log('Event: ' + event.key);
//   if (!start) {
//     $("h1").text("Start the Game. Level " + level);
//     console.log("Start the Game");
//     nextSequence();
//     start = true;
//   }
//
// });



$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

// document.getElementById("green").addEventListener('click', function() {
//   animatePress("green");
//   playSound("green");
//   addPatern("green");
//   checkAnswer("green");
// });
//
// document.getElementById("red").addEventListener('click', function() {
//   playSound("red");
//   animatePress("red");
//   addPatern("red");
//   checkAnswer("red");
// });
//
// document.getElementById("yellow").addEventListener('click', function() {
//   playSound("yellow");
//   animatePress("yellow");
//   addPatern("yellow");
//   checkAnswer("yellow");
// });
//
// document.getElementById("blue").addEventListener('click', function() {
//   playSound("blue");
//   animatePress("blue");
//   addPatern("blue");
//   checkAnswer("blue");
// });

function animatePress(color) {
  $("#" + color).fadeOut(100).fadeIn(100);
  $("#" + color).addClass("pressed");

  setTimeout(function() {
    $("#" + color).removeClass('pressed');
  }, 100);

}



function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}




function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
      // $('.tt').before('<button class="b_restart" onclick="doFunction();">Restart Game</button>');
    }
}


function playSound(name) {
 var audio = new Audio("sounds/" + name + ".mp3");
 audio.play();
}

function startOver() {
 level = 0;
 gamePattern = [];
 started = false;
}
