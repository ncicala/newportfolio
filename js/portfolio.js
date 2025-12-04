function playAudio(){
    const audio = new Audio('sounds/bleep.wav');
    audio.play();
}

function navigateWebsiteAbout(){
    document.getElementById("about").addEventListener("click", function() {
        buttonPress.play();
        // window.location.href = ""
    });
}