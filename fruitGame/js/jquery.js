var playing =false;
var score;
var trialsLeft;
var action,step;
var fruits=['apple','banana','cherries','grapes','mango','orange','peach','pear','watermelon'];
$("#startreset").click(
    function(){
        if(playing==true){
            location.reload();
        }
        else {
            playing=true;
            score=0;
            $("#trialsLeft").show();
            $("#scorevalue").html(score);
            trialsLeft=3;
           addHeart();
            $("#gameOver").hide();
            $("#startreset").html("Reset Game");
            startAction();
        }
      
function addHeart(){
    $("#trialsLeft").empty();
    for (i = 0; i < trialsLeft; i++) {
        $("#trialsLeft").append('<img src="images/like.png" class="likeIcon">');
    }

}
function startAction(){
    $("#fruit1").show();
    chooseFruit();
    $("#fruit1").css({ 'left': Math.round(550 * Math.random()), 'top': -50 });
    //define step
    step = 1 + Math.round(5 * Math.random());
    
    //action move fruit down by 10ms
    action= setInterval(
        function (){
            $("#fruit1").css('top', $("#fruit1").position().top + step);
            if ($("#fruit1").position().top > $('#fruit1').height()){
                if(trialsLeft >1){
                    $("#fruit1").show();
                    chooseFruit();
                    $("#fruit1").css({ 'left': Math.round(550 * Math.random()), 'top': -50 });
                    //define step
                    step = 1 + Math.round(5 * Math.random());

                    trialsLeft --;
                    addHeart();
                }
                else{
                    playing =false;
                    $("#startreset").html("Start Game");
                    $("#gameOver").show();
                    $("#gameOver").html('<p>Game Over!</p><p>Your Score is ' + score+'</p>');
                    stopAction();
                    $("#trialsLeft").hide();
                }
            }

        },10
    );
    $("#fruit1").mouseover(function () {
        score++;
        $("#scoreValue").html(score);
        document.getElementById("sliceSound").play();
        // $("#sliceSound")[0].play();
       clearInterval(action);

       $("#fruit1").hide("explode",500);
        setTimeout(startAction,500);
        

    });
}
function chooseFruit(){
    $("#fruit1").attr('src', 'images/' + fruits[Math.round(8 * Math.random())] + '.png');
    
}
function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}
    }
);
