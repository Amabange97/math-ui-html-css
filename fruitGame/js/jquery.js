var playing =false;
var score;
var trialsLeft;
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
        }
    }
);

function addHeart(){
    for (i = 0; i < trialsLeft; i++) {
        $("#trialsLeft").append(" X ");
    }

}