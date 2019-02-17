var total;
var score;
var red;
var blue;
var yellow;
var green;
var wins = 0;
var losses = 0;
var audio = new Audio("assets/audio/click.wav")

function reset() {
    total = Math.floor(Math.random() * 120) + 19;
    score = 0;
    red = Math.floor(Math.random() * 11) + 1;
    blue = Math.floor(Math.random() * 11) + 1;
    yellow = Math.floor(Math.random() * 11) + 1;
    green = Math.floor(Math.random() * 11) + 1;
}

function checkWin() {
    if (score === total) {
        alert('You Won !')
        wins++;
        $('#wins').text(wins);
        console.log(wins);
        reset();
        gameInit();
    }
    else if (score > total) {
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
    audio.play();
    score = score + red;
    checkWin();
    console.log("red: " + red);
    console.log('score:'+score);
});

$("#blue").on("click", function () {
    audio.play();
    score = score + blue;
    checkWin();
    console.log("blue: " + blue);
    console.log('score:'+score);
});

$("#yellow").on("click", function () {
    audio.play();
    score = score + yellow;
    checkWin();
    console.log("yellow: " + yellow);
    console.log('score:'+score);
});
$("#green").on("click", function () {
    audio.play();
    score = score + green;
    checkWin();
    console.log("green: " + green);
    console.log('score:'+score);
});


function gameInit() {
    total = Math.floor(Math.random() * 101) + 19;
    $("#total").text(" "+total);
    console.log(total);
    $("#score").text(" "+score);
};
reset();
gameInit();