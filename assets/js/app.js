$(document).ready(function() {

    let currentAnswer;
    let choice1 = ["Turtwig", "Squirtle", "Tepig", "Oshawoot"]
    let choice2 = ["10", "8", "3", "6"]
    let choice3 = ["Pokémon Omega Ruby", "Pokémon Platinum", "Pokémon Delta Emerald", "Pokémon Alpha Saphire"]
    let choice4 = ["Psychic", "Dragon", "Fire", "Flying"]
    let choice5 = ["Soul Stone", "Water Stone", "Deep Sea Tooth", "KingsRock"]
    let choice6 = ["Bulbasaur", "Mew", "Arceus", "Rhydon"]
    let choice7 = ["Ho-oh", "Palkia", "Dialga", "Lugia"]
    let choice8 = ["Charmander", "Squirtle", "Bulbasaur", "Mew"]
    
    let questions = ["Which is a starter in the game Pokémom Pearl?", "How many Eevee-lutions are there now?", "Which is not a Pokémon video game?", "What type of Pokémon is Dratini?", "What is required to evolve the Pokémon slowpoke into slowking?", "Who is the First Pokémon in the National Pokédex?", "Which Pokémon is on the cover of the Pokémon Silver/Soul Siver games?", "Which Pokémon didn't Ash have?"]
    
    let counter = 12;    
    var intervalId;
    
    function runCounter() {
        counter = 12;
        $(".timer").html("<h2>" + "12" + "</h1>");
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
        counter--;
        $(".timer").html("<h2>" + counter + "</h2>");
        if (counter === 0) {
            unanswered++;   
            stop();
            $(".button").hide();
            let clefairyNo = $("<img>").attr("src", "assets/images/clefairyNo.gif");
            $("#result").append("<h6>" + "Ouch Out of Time!" + "</h6>");
            $("#result").append(clefairyNo);
    }
}
    function stop() {
        clearInterval(intervalId);
    }

    start();
    function start() {
        reset();
        var titlePic = $("<img>").attr("src", "assets/images/GottaCatch.gif");
        $(".title").prepend("<h1>" + "It's Trivia time!!!" + "</h1>")
        $(".title").prepend(titlePic);
        $(".answers").hide();
        $("#start").on("click", function(){
            $(".answers").show();
            $(".title").hide();
            q1();
        });
    }

    function reset() {
        clearInterval();
        $("#result").empty();
        $(".questions").empty();
        $(".button").empty().show();
        $(".stats").empty();
    }

    function q1() {
        runCounter();
        reset();
        currentAnswer = "Turtwig";
        $(".questions").append(questions[0]);
        $("#answer0").append(choice1[0]);
        $("#answer1").append(choice1[1]);
        $("#answer2").append(choice1[2]);
        $("#answer3").append(choice1[3]);
        setTimeout(q2, 15000);

}

    function q2() {
        runCounter();
        reset();
        currentAnswer = "8";
        $(".questions").append(questions[1]);
        $("#answer0").append(choice2[0]);
        $("#answer1").append(choice2[1]);
        $("#answer2").append(choice2[2]);
        $("#answer3").append(choice2[3]);    
        setTimeout(q3, 15000);    
}

    function q3() {
        runCounter();
        reset();
        currentAnswer = "Pokémon Delta Emerald";
        $(".questions").append(questions[2]);
        $("#answer0").append(choice3[0]);
        $("#answer1").append(choice3[1]);
        $("#answer2").append(choice3[2]);
        $("#answer3").append(choice3[3]);
        setTimeout(q4, 15000);
    }

    function q4() {
        runCounter();
        reset();
        currentAnswer = "Dragon";
        $(".questions").append(questions[3]);
        $("#answer0").append(choice4[0]);
        $("#answer1").append(choice4[1]);
        $("#answer2").append(choice4[2]);
        $("#answer3").append(choice4[3]);
        setTimeout(q5, 15000);
    }

    function q5() {
        runCounter();
        reset();
        currentAnswer = "KingsRock";
        $(".questions").append(questions[4]);
        $("#answer0").append(choice5[0]);
        $("#answer1").append(choice5[1]);
        $("#answer2").append(choice5[2]);
        $("#answer3").append(choice5[3]);
        setTimeout(q6, 15000);
    }

    function q6() {
        runCounter();
        reset();
        currentAnswer = "Bulbasaur";
        $(".question").append(questions[5]);
        $("#anwser0").append(choice6[0]);
        $("#anwser1").append(choice6[1]);
        $("#anwser2").append(choice6[2]);
        $("#anwser3").append(choice6[3]);
        setTimeout(q7, 15000);
    }

    function q7() {
        runCounter();
        reset();
        currentAnswer = "Lugia";
        $(".question").append(questions[6]);
        $("#anwser0").append(choice7[0]);
        $("#anwser1").append(choice7[1]);
        $("#anwser2").append(choice7[2]);
        $("#anwser3").append(choice7[3]);
        setTimeout(q8, 15000);
    }
    
    function q8() {
        runCounter();
        reset();
        currentAnswer = "Mew";
        $(".question").append(questions[7]);
        $("#anwser0").append(choice8[0]);
        $("#anwser1").append(choice8[1]);
        $("#anwser2").append(choice8[2]);
        $("#anwser3").append(choice8[3]);
        setTimeout(showStats , 15000);
    }

let right = 0;
let wrong = 0;
let unanswered = 0;


function showStats(){
    stop();
    reset();
    $(".stats").append("<h1>" + "Right Answers: " + right + "</h1>");
    $(".stats").append("<h1>" + "Wrong Answers: " + wrong + "</h1>");
    $(".stats").append("<h1>" + "Unanswered: " + unanswered + "</h1>");
    let percentage = right / 8 * 100;   
    $(".stats").append("<h1>" + percentage + "%" + "</h1>");
    $(".timer").empty();
    $(".answers").empty();
}

    $(".button" ).on("click", function (){
        let userGuess = $(this).text();
        $(".button").hide();        

        if (userGuess === currentAnswer){
            $("#result").append("<h6>" + "Way to Go!" + "</h6>");
            var squirtleYes = $("<img>").attr("src", "assets/images/SquirtleYes.gif");
            $("#result").append(squirtleYes);
            right++;
            stop();
         } else if (userGuess !== currentAnswer){
            $("#result").append("<h6>" + "Sorry!" + "</h6>");
            let clefairyNo = $("<img>").attr("src", "assets/images/clefairyNo.gif");
            $("#result").append(clefairyNo);
            wrong++;
            stop();
        }
     
$(".stats").append("<p>" + "Right Answers: " + right + "</p>");
$(".stats").append("<p>" + "Wrong Answers: " + wrong + "</p>");
$(".stats").append("<p>" + "Unanswered: " + unanswered + "</p>");
        
    });
})