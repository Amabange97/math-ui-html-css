
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
        timeValue=60;
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
for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick = function () {
        if (playing == true) {
            if (this.innerHTML == correctAnswer) {
                score++;
                document.getElementById("scoreValue").innerHTML = score;
                show("correct");
                hide("tryAgain");

                setTimeout(function () {
                    hide("correct");
                }, 1000);
                startQuestion();

            }
            else {
                show("tryAgain");
                hide("correct");
                setTimeout(function () { hide("tryAgain"); }, 1000);
                startQuestion();
            }
        }
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

    var answers=[correctAnswer];
    for (i=1; i<5; i++){
        if (i != correctPosition){
            var wrongAnswer;
            do {
                wrongAnswer = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()));
            } while (answers.indexOf(wrongAnswer)>-1);
            document.getElementById("box" + i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
           

        }
    }
}