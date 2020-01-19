//alert('Hi');
function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    //console.log({now, then});
    setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if we should stop it
        If(secondsLeft <= 0) {
            return; // return will not stop the function from running, it will not just display it
        }
        console.log(secondsLeft);
    }, 1000);
}