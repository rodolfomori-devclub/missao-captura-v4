var video = document.getElementById("bg-video");
var button = document.getElementById("play");

button.onclick = function() {
  if (video.paused) {
    video.play();
    button.style.display = "none";
  } else {
    video.pause();
  }
};
video.addEventListener("touchstart",()=> {
    if (video.paused) {
        video.play();
        button.style.display = "none";

      } else {
        video.pause();
        // button.style.display = "inline";

      }
})