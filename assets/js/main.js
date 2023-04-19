const som = document.querySelector(".hole_sound")

som.addEventListener('ended', function() {
    som.currentTime = 0;
    som.play();
}, false);

function tocaSom(){
    som.play()
}

tocaSom()