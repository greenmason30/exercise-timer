let startTime = document.querySelector(".time").textContent;
let countdown = document.querySelector("#countdown");
countdown.textContent = `${startTime} sec`;
const currRoundDiv = document.querySelector(".currRound");
const currTotalRoundsDiv = document.querySelector(".currTotalRounds");
let firstIntervalRounds = document.querySelector(".rounds").textContent;
let intervalId;
let running = false;

// Set up initial buttons / event listeners
const intervalsDiv = document.querySelector(".intervals");
let intervalButtons = intervalsDiv.querySelectorAll("button");
intervalButtons.forEach(function(btn){
    btn.addEventListener("click", buttonClicked);
    btn.classList.add("interval-btn-enable-hover")
});

const controlsDiv = document.querySelector(".controls");
const controlButtons = controlsDiv.querySelectorAll("button");
controlButtons.forEach(function(btn){
    btn.addEventListener("click", buttonClicked);
    btn.classList.add("control-btn-enable-hover")
});

let firstInput = document.querySelector("input");
const exerciseDiv = document.querySelector("h1");
exerciseDiv.textContent = firstInput.textContent ? firstInput.textContent : firstInput.placeholder;
firstInput.addEventListener("input", function(e) {
    exerciseDiv.textContent = e.target.value ? e.target.value : firstInput.placeholder;
});

// FUNCTIONS
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
    startTime = document.querySelector(".time").textContent
    countdown.textContent = `${startTime} sec`;

    // Update rounds
    totalRounds = document.querySelector(".rounds").textContent;
    currTotalRoundsDiv.textContent = totalRounds;
}

function disableIntervalButtons() {
    intervalButtons.forEach(function(btn){
        btn.classList.remove("interval-btn-enable-hover")
        btn.disabled = true;
    });
}

function enableIntervalButtons() {
    intervalButtons.forEach(function(btn){
        btn.classList.add("interval-btn-enable-hover")
        btn.disabled = false;
    });
}

function reset() {
    clearInterval(intervalId);
    // Time
    startTime = document.querySelector(".time").textContent;
    countdown.textContent = `${startTime} sec`;
    // Rounds
    currRoundDiv.textContent = 1;
    currTotalRoundsDiv.textContent = document.querySelector(".rounds").textContent;
    // Buttons
    enableIntervalButtons();
    document.querySelector("#startBtn").hidden = false;
}

function run() {
    startTime--;
    countdown.textContent = `${startTime} sec`;
    if (startTime == 0 && !running) {
        reset();
    }
    // else {
    //     startTime = 
    // }
}

function buttonClicked(e) {
    let item = e.currentTarget;
    const incDec = ["inc", "dec"];
    const containsIncDec = incDec.some(sub => item.className.includes(sub));
    if (containsIncDec) {
        handleIncDecButtons(item);
    }
    else if (item.id == "startBtn") {
        disableIntervalButtons();
        document.querySelector("#startBtn").hidden = true;
        intervalId = setInterval(run, 1000);
    }
    else if (item.id == "restartBtn") {
        reset();
    }
    else if (item.id == "pauseBtn") {
        clearInterval(intervalId);
        document.querySelector("#startBtn").hidden = false;
    }
}