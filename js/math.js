
var playing = false;
var score;
var action;
var timeValue;
document.getElementById("start-game").onclick = function startNow(){
   



    if(playing == true){
        location.reload();
    }
    else{ //if we are not playing
        playing = true;
        score = 0;
        document.getElementById("timeremaining").style.display="block";
        timeValue=3;
        document.getElementById("timevalue").innerHTML=timeValue;
        document.getElementById("scoreValue").innerHTML=score;
        document.getElementById("start-game").innerHTML="Reset Game";


        //startCounter
        startCounter();


       

    }
}
function startCounter() {
    action = setInterval(function () {
        timeValue -= 1;
        document.getElementById("timevalue").innerHTML = timeValue;
        if (timeValue == 0) {
            stopCount();
            document.getElementById("game-over").style.display="block";
            document.getElementById("game-over").innerHTML="<p>Game Over</p> <p>Your Score is "+ score +"</p>";
            document.getElementById("timeremaining").style.display="none";
        }

    }, 1000);
    function stopCount() {
        clearInterval(action);
    }
}