
function mirrortext(id){
    const textElement = document.getElementById(id);
    textElement.classList.toggle('mirrored');
}


var audio = new Audio('Langt_hår.mp3');
var neverplayed = true

function playthemusic(){
    if (neverplayed){
        audio.play();
        neverplayed = false
    }
    document.getElementById("playmusic").style.display = "none";
    document.getElementById("stopmusic").style.display = "block";
    // window.alert("You just ordered");
}

function stopthemusic(){
    audio.pause();
    audio.currentTime = 0;
    document.getElementById("playmusic").style.display = "block";
    document.getElementById("stopmusic").style.display = "none";
}