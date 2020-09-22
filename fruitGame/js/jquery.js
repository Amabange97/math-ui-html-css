var playing =false;
var score;
var trialsLeft;
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

            $("#startreset").html("Reset Game");
            startAction();
        }
    }
);

function addHeart(){
    for (i = 0; i < trialsLeft; i++) {
        $("#trialsLeft").append('<img src="images/like.png" class="likeIcon">');
    }

}
function startAction(){
    $("#fruit1").show();
    chooseFruit();
    $("#fruit1").css({ 'left': Math.round(550 * Math.random()), 'top': -50 });
}
function chooseFruit(){
    $("#fruit1").attr('src', 'images/' + fruits[Math.round(8 * Math.random())] + '.png');
    
}
