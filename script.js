
var timeInterval, totalSec;

function startTimer() {

    var hour = Number(document.querySelector('#hour').value)
    var min = Number(document.querySelector('#min').value)
    var sec = Number(document.querySelector('#sec').value)

    totalSec = hour * 3600 + min * 60 + sec;

    timeInterval = setInterval(startCounting, 1000);

}

function startCounting(){
    
    let hourLeft = Math.floor(totalSec / 3600);
    let minLeft = Math.floor((totalSec % 3600) / 60);
    let secLeft = totalSec % 60;

    document.querySelector('#hour').value = hourLeft;
    document.querySelector('#min').value = minLeft;
    document.querySelector('#sec').value = secLeft;

    if (totalSec <= 0) {

        clearInterval(timeInterval);

        var sound = new Audio("sound.mp3");
        sound.play();

        alert("Times up !!");

    }
    else {
        totalSec--;
    }
}

function stopTimer() {

    clearInterval(timeInterval);

}

function resetTimer() {

    clearInterval(timeInterval)
    document.querySelector('#hour').value = 0;
    document.querySelector('#min').value = 0;
    document.querySelector('#sec').value = 0;

}

document.querySelector('.btn1').addEventListener('click', startTimer)
document.querySelector('.btn2').addEventListener('click', stopTimer)
document.querySelector('.reset').addEventListener('click', resetTimer)

