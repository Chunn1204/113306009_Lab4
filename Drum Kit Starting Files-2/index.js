const drumButtons = document.querySelectorAll(".drum");

function playSound(key) {
  let sound;
  switch (key) {
    case "w":
      sound = "sounds/crash.mp3";
      break;
    case "a":
      sound = "sounds/kick.mp3";
      break;
    case "s":
      sound = "sounds/snare.mp3";
      break;
    case "d":
      sound = "sounds/tom-1.mp3";
      break;
    case "j":
      sound = "sounds/tom-2.mp3";
      break;
    case "k":
      sound = "sounds/tom-3.mp3";
      break;
    case "l":
      sound = "sounds/tom-4.mp3";
      break;
    default:
      return;
  }

  const audio = new Audio(sound);
  audio.play();
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

drumButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML); 
    buttonAnimation(buttonInnerHTML);
  });
});

document.addEventListener("keydown", function(event) {
  const key = event.key;
  if (["w", "a", "s", "d", "j", "k", "l"].includes(key)) {
    playSound(key); 
    buttonAnimation(key); 
  }
});
