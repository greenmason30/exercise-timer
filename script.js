const buttons = document.querySelectorAll("button");//".interval > button:not(.remove)");
buttons.forEach(function(btn){
    btn.addEventListener("click", buttonClicked);
  });

function handleIncDecButtons(btn) {
    let intervalTime = btn;
    while (!intervalTime.className.includes("time"))
    {
        intervalTime = intervalTime.nextElementSibling;
    }
    btn.className.includes("dec") ? intervalTime.innerText-- : intervalTime.innerText++;
    if (intervalTime.innerText < 1) {
        intervalTime.innerText = 1;
    }
}

function buttonClicked(e) {
    let item = e.currentTarget;
    const incDec = ["inc", "dec"];
    const containsIncDec = incDec.some(sub => item.className.includes(sub));
    if (containsIncDec) {
        handleIncDecButtons(item);
        
    }
    
}