//alert('Hi');
let countdown;

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
    const minutes = seconds / 60;
    console.log({minutes});
    console.log(seconds);
}