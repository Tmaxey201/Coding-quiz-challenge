// created a timer to countdown when start button is pressed
var startButton = document.getElementById("startButton");
var timer = document.getElementById("timer");
var secondsLeft = 75;

var questions = [
    {
        numb: 1,
        question: "Commonly used Data Types do not include:",
        answer: "Alerts",
        options: [
            "Strings",
            "Booleans",
            "Alerts",
            "Numbers",
        ]
    },
    {
        numb: 2,
        question: "The condition in an if/else statement is enclosed within _______.",
        answer: "Parenthesis",
        options: [
            "Quotes",
            "Curly brackets",
            "Parenthesis",
            "Square brackets",
        ]
    },
    {
        numb: 3,
        question: "Arrays in JavaScript can be used to store _____.",
        answer: "All the above",
        options: [
            "Numbers and strings",
            "Other arrays",
            "Booleans",
            "All the above",
        ]
    },
    {
        numb: 4,
        question: "String values must be enclosed within _______",
        answer: "Quotes",
        options: [
            "Commas",
            "Curly brackets",
            "Quotes",
            "Parenthesis",
        ]
    },
    {
        numb: 5,
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: "Console.log",
        options: [
            "JavaScript",
            "Terminal/bash",
            "For loops",
            "Console.log",
        ]
    },


];

var counter = 1 
var questions

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
    showQuestions(0)
}

let que_count = 0


//pulling question,option,answers from the array


function showQuestions(index){
    var que_text = document.querySelector(".que_text");
    var option_list = document.querySelector(".option_list");
    var que_tag = '<span>' + questions[index].question + '</span>';
    var option_tag = '<div class="buttons">' + questions[index].options[0] + '<span></span></div>'
                    + '<div class="buttons">' + questions[index].options[1] + '<span></span></div>'
                    + '<div class="buttons">' + questions[index].options[2] + '<span></span></div>'
                    + '<div class="buttons">' + questions[index].options[3] + '<span></span></div>'
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
}