notes 

// document.querySelector("button").addEventListener("click", handelClick);

// // addEventListner() sets up a FUNCTION to be called whenever the specified event is delivered to be the target
// // it has 2 parameters
// // 1th is the TYPE a case-sensitive string representing the EVENT TYPE  to listen for ( list https://developer.mozilla.org/en-US/docs/Web/Events)
// // the 2th is the LISTENER; usulay that javascript FUNCTION that going to be called when that click event get detected

// function handelClick() {
//   alert("I got clicked!");
// }

// faster way to do this also

for (
  var i = 0;
  i < document.querySelectorAll(".drum").length;
  i++ // this is how we select all the button
) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I got clicked ");

    // [i] started at 0, the next time is run we get to add one [i++]
    // whats to do when click detected
  });
}

//


//

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // alert("I got clicked ");

    // to select the button
    // this is the identite of the BUTTON it targeting the evenListner
    // this.style.color = "white";

    var buttonInnerHtml = this.innerHTML;

    // passing in the key witch it the key
    makeSound(buttonInnerHtml);
  });
}

//using keyboard  Event Listener
//passing a paramter into te function(Event) THIS IS HELP US TO TAP IN TO THE EVENT THAT TRAGERS THE EVENTLISTENER
// now is the console you can see wehn you press any key

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHtml);
  }
}

// we gonna play the sound you can use google https://stackoverflow.com/questions/9419263/how-to-play-audio
// var audio = new Audio("./sounds/tom-2.mp3");
//     audio.play();
