let startTime;
let elapsedTime = 0;
let lapTime = 0; 
let timerInterval;

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        displayTime(elapsedTime);
    }, 1000);
}

function pause() {
    clearInterval(timerInterval);
}

function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    lapTime = 0; 
    displayTime(elapsedTime);
    displayLapTime(lapTime); 
    clearLapList(); 
}

function lap() {
    const currentLapTime = elapsedTime - lapTime;
    lapTime = elapsedTime; 
    displayLapTime(currentLapTime); 
}

function displayLapTime(time) {
    const lapsList = document.querySelector('.laps');
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap Time: ${formatTime(time)}`; 
    lapsList.appendChild(lapItem);
}

function clearLapList() {
    const lapsList = document.querySelector('.laps');
    lapsList.innerHTML = ''; 
}

function displayTime(time) {
    const display = document.querySelector('.display');
    display.textContent = formatTime(time);
}

function formatTime(time) {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

document.querySelector('.start').addEventListener('click', start);
document.querySelector('.pause').addEventListener('click', pause);
document.querySelector('.reset').addEventListener('click', reset);
document.querySelector('.lap').addEventListener('click', lap);
