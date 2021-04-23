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


var count = 0
button.onclick = function() {
    document.getElementById('startBox').style.display = "none";
    document.getElementById('quiz').style.display = "block";
    showQuestions(count)
};



var buttons0EL = document.querySelector("#button0");
var buttons1EL = document.querySelector("#button1");
var buttons2EL = document.querySelector("#button2");
var buttons3EL = document.querySelector("#button3");
console.log(buttons0EL)


buttons0EL.addEventListener("click", function() {
    count++; 
    showQuestions(count);
  });
buttons1EL.addEventListener("click", function() {
    count++; 
    showQuestions(count);
  });
buttons2EL.addEventListener("click", function() {
    count++; 
    showQuestions(count);
  });
buttons3EL.addEventListener("click", function() {
    count++; 
    showQuestions(count);
  });


//pulling question,option,answers from the array


function showQuestions(index){
    var que_text = document.querySelector(".que_text");
    var option_list = document.querySelector(".option_list");
   
    document.querySelector("#que_text").textContent = questions[index].numb + ". " + questions[index].question
    document.querySelector("#button0").textContent = questions[index].options[0]
    document.querySelector("#button1").textContent = questions[index].options[1]
    document.querySelector("#button2").textContent = questions[index].options[2]
    document.querySelector("#button3").textContent = questions[index].options[3]

//     que_text.innerHTML = que_tag;
//     option_list.innerHTML = option_tag;
}