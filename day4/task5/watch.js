let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;

document.getElementById('startStopButton').addEventListener('click', toggleTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);

function toggleTimer() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStopButton").textContent = "Start";
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById("startStopButton").textContent = "Stop";
    }
    isRunning = !isRunning;
}

function updateTime() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }

    document.getElementById("timeDisplay").textContent = formatTime(minutes, seconds);
}

function formatTime(minutes, seconds) {
    let min = minutes < 10 ? `0${minutes}` : minutes;
    let sec = seconds < 10 ? `0${seconds}` : seconds;
    return `${min}:${sec}`;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    document.getElementById("timeDisplay").textContent = "00:00";
    document.getElementById("startStopButton").textContent = "Start";
}
