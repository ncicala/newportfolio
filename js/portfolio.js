function playBeep(){
    let beep = document.getElementById("beep");
    beep.volume = 1;
    beep.play();
}

document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');

    header.addEventListener('click', function() {
            header.style.color = 'red'
    });
});