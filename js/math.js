document.getElementById("start-game").onclick = function startNow(){
   


    var playing = false;
    var score;

    if(playing == true){
        location.reload();
    }
    else{
        score = 0;
        document.getElementById("timeremaining").style.display="block";
    }
}