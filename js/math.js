document.getElementById("start-game").onclick = function startNow(){
   


    var playing = false;
    var score;

    if(playing == true){
        location.reload();
    }
    else{ //if we are not playing
        playing = true;
        alert(playing);
        score = 0;
        document.getElementById("timeremaining").style.display="block";
        // document.getElementById("timevalue").innerHTML=score;
        document.getElementById("scoreValue").innerHTML=score;
        document.getElementById("start-game").innerHTML="Reset Game";
    }
}