
var audio = new Audio('../untitled.mp3');
var neverplayed = true

function playthemusic(){
    clicker()
    
    audio.play();
    
 
    document.getElementById("playmusic").style.display = "none";
    document.getElementById("stopmusic").style.display = "block";
    // window.alert("You just ordered");
}

function stopthemusic(){
    clicker()
    audio.pause();
    audio.currentTime = 0;
    document.getElementById("playmusic").style.display = "block";
    document.getElementById("stopmusic").style.display = "none";
}
function changecolor(){
    document.getElementsByClassName("maintext").style.color
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    document.getElementsByClassName("maintext").style.color =
    `rgb(${red} ${green} ${blue})`;
}
var click = 0
function clicker(){
    click +=1
    document.getElementById("counter").innerHTML = 'You have clicked the button ' + click + ' times';
}