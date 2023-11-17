let h1 = document.querySelector("h1")
let timer = document.querySelector(".counter")
let startBtn = document.querySelector(".start")
let clickBtn = document.querySelector(".click")
let score = document.querySelector(".score")
let span = document.querySelector("span")

// coundown functions

timerValue = 16;

function countdown() {
    timerValue--
    timer.innerHTML = timerValue;
    if (timerValue == 0) {
        clearInterval(interval)
        clickBtn.style.display = "none"
        timer.style.display = 'none'
        score.style.fontSize = "3.1rem"
        score.style.color = "#224b42"
    }

}
let interval = setInterval(() => {
    if (start >= 1) {
        countdown();
    }
}, 1000);

let start = 0;

startBtn.addEventListener("click", () => {
    start++
    startBtn.style.display = "none"
    clickBtn.style.display = "block"
})

// click count
let clicks = 0;

clickBtn.addEventListener("click", () => {
    clicks++
    span.innerHTML = clicks;
    clickBtn.style.boxShadow = "0px 0px 8px 2px rgba(0,0,0,.25)";

})