const countEl = document.querySelector(".count");
const prevCountEl = document.querySelector(".prev-count");
const incrementBtn = document.querySelector(".increment-btn");
const decrementBtn = document.querySelector(".decrement-btn");
const saveBtn = document.querySelector(".save-btn");

let count = 0;

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
saveBtn.addEventListener("click", save);

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
