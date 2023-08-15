alert("Linked Succesfully!");

for(var i=0; i<document.querySelectorAll("button").length; i++){
document.querySelectorAll("button")[i].addEventListener("click",handleclick);
}

function handleclick(){
    // alert("I got clicked!");
    var audio = new  Audio('./sounds/tom-1.mp3');
    audio.play();
}


