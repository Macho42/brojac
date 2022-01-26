"use strict";

let count = 0;

document.querySelector("#increase").addEventListener("click", () => {
    changeCount(1);
});

document.querySelector("#decrease").addEventListener("click", () => {
    changeCount(-1);
});

let changeCount = (number) => {
    count += number;
    document.querySelector("#count").textContent = count;
};