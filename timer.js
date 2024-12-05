function startTimer(durationInSeconds, displayElementId) {
    let remainingTime = durationInSeconds;

    const intervalId = setInterval(() => {
        const minutes = Math.floor(remainingTime / 60).toString().padStart(2, '0');
        const seconds = (remainingTime % 60).toString().padStart(2, '0');
        
        const displayElement = document.getElementById(displayElementId);
        displayElement.textContent = `${minutes}:${seconds}`;

        if (remainingTime <= 0) {
            clearInterval(intervalId);
            displayElement.textContent = "Time's up!";
        }

        remainingTime--;
    }, 1000);
}
