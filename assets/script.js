
var startButton = document.getElementById("startButton")
var timer = document.getElementById("timer")
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

var questions = [
    {
        numb: 1,
        question: "Commonly used Data Types do not include:",
        answer: "Alerts"
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
        answer: "Parenthesis"
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
        answer: "All the above"
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
        answer: "Quotes"
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
        answer: "Console.log"
        options: [
            "JavaScript",
            "Terminal/bash",
            "For loops",
            "Console.log",
        ]
    },


]