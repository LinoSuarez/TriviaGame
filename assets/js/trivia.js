var timerID;
var questionIndex = 0;
var correct = 0;
var Incorrect = 0;
var questions = { //QUESTION, 3 possible answers
    0: ["In a photo editing program, what do the letters RGB stand for?", "Red, Green & Blue", "Roll, Gorila, Baby", "Rolling, Gorillas, Bowling"],
    1: ["The Commonwealth of the Bahamas gained independence in 1973 from what country?", "Spain","United Kingdom", "Grait Britain"],
    2: ["Who painted the Sistine Chapel?", "Michelangelo", "Leonardo da Vinci", "Lorenzo Ghiberti"],
    3: ["American mobster Al Capone was sentenced to 11 years in federal prison for what crime?", "Murder", "Rape", "Tax Evasion"]
}
var answers = { //Question & answer Index
    0: [1],
    1: [2],
    2: [1],
    3: [3]
}


var countDown;
function StartTimer(){
    showCuestion(questionIndex);
    countDown = 29;
    $("#timer").text("Time Remining: " + countDown + " seconds.");
    timerID = setInterval(function(){
        //console.log(countDown);
        $("#timer").text("Time Remining: " + countDown + " seconds.");
        countDown--;
        if (countDown < 0){
            lost();
        }
    },1000)
}
function StopTimer(){
    clearInterval(timerID)
}
function lost(){
    $("#timer").text("Time Out")
    StopTimer();
}

function showCuestion(index){
    if (questionIndex < Object.keys(questions).length){
        console.log(index)
        $("#question").text(questions[index][0])
        $("#option1").text(questions[index][1]).attr("value", "1").attr("onclick", "answerSelected($(this).attr('value'))")
        $("#option2").text(questions[index][2]).attr("value", "2").attr("onclick", "answerSelected($(this).attr('value'))")
        $("#option3").text(questions[index][3]).attr("value", "3").attr("onclick", "answerSelected($(this).attr('value'))")
        questionIndex++;
    } else {
        finish()
    }

}
function answerSelected(index){
    console.log(answers[questionIndex -1], index)
    if (answers[questionIndex -1] == index){
        console.log("Correct")
        correct++;
    } else {
        console.log("Incorrect")
        Incorrect++;
    }
    nextBtn();
}
function finish(){
    console.log("DONEEE")
    $("#content").empty();
    $("#content").append($("<p>").text("Correct Answers: " + correct))
    $("#content").append($("<p>").text("Incorrect Answers: " + Incorrect))

}
//Get object length
//console.log(Object.keys(questions).length)
function nextBtn(){
    //console.log(this)
    StopTimer();
    StartTimer();
   // showCuestion(questionIndex)
}
$(document).ready(function(){
    $("#startBtn").click(function(){
        $("#option1").attr("class", "answers")
        $("#option2").attr("class", "answers")
        $("#option3").attr("class", "answers")

        $("#startBtn").remove();
        StartTimer();
    });

});

