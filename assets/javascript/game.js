var goal;
var total;
var red;
var blue;
var yellow;
var green;
var wins = 0;
var losses = 0;
//var audio = new Audio("assets/audio/click.wav")

function reset() {
    goal = Math.floor(Math.random() * 120) + 19;
    total = 0;
    red = Math.floor(Math.random() * 11) + 1;
    blue = Math.floor(Math.random() * 11) + 1;
    yellow = Math.floor(Math.random() * 11) + 1;
    green = Math.floor(Math.random() * 11) + 1;
}

function checkWin() {
    if (total === goal) {
        alert('You Won !')
        wins++;
        $('#wins').text(wins);
        console.log(wins);
        reset();
        gameInit();
    }
    else if (total > goal) {
        alert('You Lose !')
        losses++;
        $('#losses').text(losses);
        console.log(losses);
        reset();
        gameInit();
    }
    else {
        
    }
};
$("#red").on('click', function () {
    //audio.play();
    total = total + red;
    checkWin();
    $("#total").text(" "+total);
    console.log("red: " + red);
    console.log('score:'+total);
});

$("#blue").on("click", function () {
    //audio.play();
    total = total + blue;
    checkWin();
    $("#total").text(" "+total);
    console.log("blue: " + blue);
    console.log('score:'+total);
});

$("#yellow").on("click", function () {
    //audio.play();
    total = total + yellow;
    checkWin();
    $("#total").text(" "+total);
    console.log("yellow: " + yellow);
    console.log('score:'+total);
});
$("#green").on("click", function () {
    //audio.play();
    total = total + green;
    checkWin();
    $("#total").text(" "+total);
    console.log("green: " + green);
    console.log('score:'+total);
});


function gameInit() {
    goal = Math.floor(Math.random() * 101) + 19;
    $("#goal").text(" "+goal);
    console.log(goal);
    $("#total").text(" "+total);
    console.log(total);
};
reset();
gameInit();