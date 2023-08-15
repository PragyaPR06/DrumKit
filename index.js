

for(var i=0; i<document.querySelectorAll("button").length; i++){
document.querySelectorAll("button")[i].addEventListener("click",handleclick);
}

function handleclick(){
    var audio = new  Audio('./tom-1.mp3');
    audio.play();
}


