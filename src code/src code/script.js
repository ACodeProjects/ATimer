// script.js
// Timer function
function startTimer(duration, display) {
    var timer = duration;//, minutes, seconds;
    var intervalId;

    function updateDisplay() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
    }

    function decrementTimer() {
        if (--timer < 0) {
            clearInterval(intervalId);
            timer = duration;
        }
        updateDisplay();
    }

    // Add click event listener to startButton
    document.getElementById('startButton').addEventListener('click', function () {
        intervalId = setInterval(decrementTimer, 1000);
        updateDisplay();
    });

    // Add click event listener to stopButton
    document.getElementById('stopButton').addEventListener('click', function () {
        clearInterval(intervalId); // Stop the timer
        updateDisplay();
    });

    // Add click event listener to refreshButton
    document.getElementById('refreshButton').addEventListener('click', function () {
        clearInterval(intervalId); // Stop the timer
        const inputElement = document.getElementById("timeInput");
        const inputValue = inputElement.value;
        timer = inputValue * 60;
        updateDisplay();
    });
}

window.onload = function () {
  var fiveMinutes = 60 * 5; // change 5 to desired minutes
        //var aot = document.getElementsByName("timeInput")[0].value;
        display = document.querySelector('#timer');
    startTimer(fiveMinutes, display);
    updateDisplay();
};
