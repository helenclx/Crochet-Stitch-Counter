const countEl = document.querySelector(".count");
const prevCountEl = document.querySelector(".prev-count");

let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function decrement() {
    count -= 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    prevCountEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}
