
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


// hide start page

var button = document.getElementById('startButton');

button.onclick = function() {
    var div = document.getElementById('startBox');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

// show quiz page 

// button.onclick = function() {
//     var div = document.getElementById('quiz');
//     if (div.style.display == 'none') {
//         div.style.display == "block";
//     }
// }


//pulling question,option,answers from the array

