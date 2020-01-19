//alert('Hi');
let countdown;
const timerDisplay = document.querySelector('.display__time-left');


function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimerLeft(seconds); // immediately run this function only once
    //console.log({now, then});
    counstDown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        // check if we should stop it
        if(secondsLeft < 0) {
            clearInterval(counstDown);
            return; // return will not stop the function from running, it will not just display it
        }
        displayTimerLeft(secondsLeft);
    }, 1000);
}

function displayTimerLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds}`;
    timerDisplay.textContent = display;
    //console.log({minutes, remainderSeconds});
    //console.log(seconds);
    console.log(display);
}