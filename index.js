var drumButtons = document.querySelectorAll("button");

for (var i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {
    innerHTML = this.innerHTML;

    makeSound(innerHTML);
    addAnimation(innerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  addAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/crash.mp3").play();

      break;
    case "a":
      new Audio("sounds/kick-bass.mp3").play();

      break;
    case "s":
      new Audio("sounds/snare.mp3").play();

      break;
    case "d":
      new Audio("sounds/tom-1.mp3").play();

      break;
    case "j":
      new Audio("sounds/tom-2.mp3").play();

      break;
    case "k":
      new Audio("sounds/tom-3.mp3").play();

      break;
    case "l":
      new Audio("sounds/tom-4.mp3").play();

      break;
    default:
      console.log(soundKey);
      break;
  }
}

function addAnimation(animationKey) {
  var viewAnimation = document.querySelector("." + animationKey);
  viewAnimation.classList.add("pressed");
  setTimeout(function () {
    viewAnimation.classList.remove("pressed");
  }, 200);
}
