let startTime = document.querySelector(".time").innerText;
let countdown = document.querySelector("#countdown");
countdown.textContent = `${startTime} sec`;
let intervalId;

const buttons = document.querySelectorAll("button");//".interval > button:not(.remove)");
buttons.forEach(function(btn){
    btn.addEventListener("click", buttonClicked);
  });

function handleIncDecButtons(btn) {
    // Update interval time / rounds
    let intervalNum = btn;
    while (!(intervalNum.className.includes("time") || intervalNum.className.includes("rounds"))) {
        intervalNum = intervalNum.nextElementSibling;
    }
    btn.className.includes("dec") ? intervalNum.textContent-- : intervalNum.textContent++;
    if (intervalNum.textContent < 1) {
        intervalNum.textContent = 1;
    }

    // Update start time / countdown
    startTime = document.querySelector(".time").innerText
    countdown.textContent = `${startTime} sec`;
}

function run() {
    startTime--;
    countdown.textContent = `${startTime} sec`;
    if (startTime == 0) {
        clearInterval(intervalId);
    }
}

function buttonClicked(e) {
    let item = e.currentTarget;
    const incDec = ["inc", "dec"];
    const containsIncDec = incDec.some(sub => item.className.includes(sub));
    if (containsIncDec) {
        handleIncDecButtons(item);
    }
    else if (item.id == "startBtn") {
        intervalId = setInterval(run, 1000);
    }
}