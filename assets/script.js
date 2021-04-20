
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
    document.getElementById('startBox').style.display = "none";
    document.getElementById('quiz').style.display = "block";
}




// button.onclick = function() {
//     var div = document.getElementById('quiz');
//     if (div.style.display == 'none') {
//         div.style.display == "block";
//     }
// }


//pulling question,option,answers from the array

