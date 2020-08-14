
var playing = false;
var score;
var action;
var timeValue;
var correctAnswer
document.getElementById("start-game").onclick = function startNow(){
   



    if(playing == true){
        location.reload();
    }
    else{ //if we are not playing
        playing = true;
        score = 0;
        show("timeremaining");
        timeValue=3;
        document.getElementById("timevalue").innerHTML=timeValue;
        document.getElementById("scoreValue").innerHTML=score;
        document.getElementById("start-game").innerHTML="Reset Game";
        show("score");
        hide("game-over");


        //startCounter
        startCounter();
        startQuestion();

       

    }
}
function startCounter() {
    action = setInterval(function () {
        timeValue -= 1;
        document.getElementById("timevalue").innerHTML = timeValue;
        if (timeValue == 0) {
            stopCount();
            show("game-over");
            document.getElementById("game-over").innerHTML="<p>Game Over</p> <p>Your Score is "+ score +"</p>";
            hide("timeremaining");
            hide("score");
            hide("correct");
            hide("tryAgain");
            playing=false;
            document.getElementById("start-game").innerHTML="Start Game";
        }

    }, 1000);
    function stopCount() {
        clearInterval(action);
    }
}
function show(id){
    document.getElementById(id).style.display="block";
}
function hide(id){
    document.getElementById(id).style.display="none";
}
function startQuestion(){
    
    var x = 1+ Math.round(9 * Math.random());
    var y = 1+ Math.round(9 * Math.random());
    correctAnswer =  x*y;
    document.getElementById("question").innerHTML=x +"x"+ y;
    var correctPosition = 1 + Math.round(3 * Math.random());
   
    document.getElementById("box" + correctPosition).innerHTML=correctAnswer;

    
    for (i=1; i<5; i++){
        if(correctPosition != i){
            var wrongAnswer;
            do {
                wrongAnswer = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()));
                document.getElementById("box" + i).innerHTML = wrongAnswer;

            } while (correctAnswer==wrongAnswer);
           

        }
    }
}