

window.addEventListener("keydown", function(event) {
    document.querySelector("#" + event.key).classList.add("keypress");
    const audio = document.querySelector(`audio[data-key="${event.key}"]`);
    if (!audio) return; // Stop the function if no audio is found
    audio.currentTime = 0; // Rewind to the start
    audio.play();
});


window.addEventListener("keyup", function(event) {
    document.querySelector("#" + event.key).classList.remove("keypress");
});