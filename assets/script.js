// created a timer to countdown when start button is pressed
var startButton = document.getElementById("startButton");
var timer = document.getElementById("timer");
var secondsLeft = 75;

function setTime() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent= "Time:" + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
}

startButton.addEventListener('click', setTime);


// created an onclick function to hide start page and show quiz page when start button is pressed

var button = document.getElementById('startButton');


button.onclick = function() {
    document.getElementById('startBox').style.display = "none";
    document.getElementById('quiz').style.display = "block";
}




//pulling question,option,answers from the array

var  lastquestionIndex = questions.legnth - 1
let runningQuestionIndex = 0

function showQuestion() {
    let q = questions[runningQuestionIndex]
    questions.innerHTML = "<p>" +q.question+  "</p>"
    choiceA.innerHTML = q.choiceA
    choiceB.innerHTML = q.choiceB
    choiceC.innerHTML = q.choiceC
    choiceD.innerHTML = q.choiceD

}