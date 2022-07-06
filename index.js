let minute = document.querySelector("#minute")
let second = document.querySelector("#second")
let start = document.querySelector("#start")
let pause = document.querySelector("#pause")
let reset = document.querySelector("#reset")

let timeInterval;


function decreaseMinute() {
    if(minute.value != 0){
        timeMinute = minute.value
        timeMinute--
        minute.value = timeMinute
        second.value = 59
        decreaseSecond()
    }else{
        clearInterval(timeInterval)
        let audio = new Audio("openhat.wav")
        audio.play()
    }
}

function decreaseSecond() {
     timeInterval = setInterval(function time() {
        if (second.value != 0) {
            timeSecond = second.value
            timeSecond--
            second.value = timeSecond
        }
        if (second.value == 0) {
            clearInterval(timeInterval)
            decreaseMinute()
        }
    }, 1000)
}

function stopTimer() {
    clearInterval(timeInterval)
}

function resetTimer() {
    if(timeInterval){
        clearInterval(timeInterval)
        second.value = 0
        minute.value = 0
    } else{
        second.value = 0
        minute.value = 0
    }
}

start.addEventListener("click", decreaseSecond)
pause.addEventListener("click", stopTimer)
reset.addEventListener("click", resetTimer)
