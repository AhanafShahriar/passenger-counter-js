
let count = 0;
let countText = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");


function increment() {
    count++;
    countText.innerText = count;
}

function save() {
    let countStr = count + " - ";
    
    saveEl.textContent += countStr;
    countText.innerText = "0";
    count = 0;
}
