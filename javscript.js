console.log("Running FizzBuzz");

//globals
const max = 101;
const min = 0;

const countElMin = document.getElementById("min-value");
const countElMax = document.getElementById("max-value");
let maxCount = 100;
let minCount = 1;

const countFizzMinMax = document.getElementById("fizz-value");
const countBuzzMinMax = document.getElementById("buzz-value");
let fizzNum = 3;
let buzzNum = 5;

console.log(maxCount, typeof maxCount);
function main() {
    console.log("Running function main");

        


    onUserClickAdd();
    onUserClickClear();
    countElMin.onchange = onMinChange;
    onMinChange();
    countElMax.onchange = onMaxChange;
    onMaxChange();
    countFizzMinMax.onchange = onFizzChange;
    onFizzChange();
    countBuzzMinMax.onchange = onBuzzChange;
    onBuzzChange();
}



function addElement(parent, tag, id, classList, content) {
    const newEl = document.createElement(tag);
    if (id !== null) newEl.id = id;
    newEl.classList.add(...classList);
    newEl.innerText = content;
    parent.appendChild(newEl);
}

function addElements() {
    console.log("Adding Elements");
    const innerCont = document.getElementById("id-inner-cont");
    for (let i = minCount; i <= maxCount; i++){  
        const id = "box-id-" + i;
        const classList = ["box"];
        if (i % fizzNum === 0 && i % buzzNum === 0 ) {
            classList.push("fizzbuzz-bg");
            addElement(innerCont, "div", id, classList, "FizzBuzz  " + i);
        }else if (i % fizzNum === 0) {
            classList.push("fizz-bg");
            addElement(innerCont, "div", id, classList, "Fizz  " + i);
        }else if (i % buzzNum === 0) {
            classList.push("buzz-bg");
            addElement(innerCont, "div", id, classList, "Buzz  " + i);
        }else {
            classList.push("none-bg");
            addElement(innerCont, "div", id, classList, + i);
        }
    }
}

function onUserClickAdd() {
    console.log("Adding elements on click");
    const btnGen = document.getElementById("btn-generate");
    btnGen.onclick = addElements;

}

function clearElements() {
    console.log("Clearing Elements");
    const innerCont = document.getElementById("id-inner-cont");
    while (innerCont.firstChild) {
        innerCont.removeChild(innerCont.firstChild);
    }
}

function onUserClickClear() {
    console.log("Clearing elements on click");
    const btnClear = document.getElementById("btn-clear");
    btnClear.onclick = clearElements;
}

function onMinChange() {
    console.log("New value might be", countElMin.value);
    const elvalue = parseInt(countElMin.value);
    if (elvalue > max || elvalue < min) return;
    minCount = elvalue;
    console.log("Actually maxcount is", minCount);
    console.log(minCount, typeof minCount);
}

function onMaxChange() {
    console.log("New value might be", countElMax.value);
    const elvalue = parseInt(countElMax.value);
    if (elvalue > max || elvalue < min) return;
    maxCount = elvalue;
    console.log("Actually maxcount is", maxCount);
    console.log(maxCount, typeof maxCount);
}

function onFizzChange() {
    console.log("New value might be", countFizzMinMax.value);
    const fvalue = parseInt(countFizzMinMax.value);
    if (fvalue > max || fvalue < min) return;
    fizzNum = fvalue;
    console.log("Actually fizzcount is", fizzNum);
    console.log(fizzNum, typeof fizzNum);
}

function onBuzzChange() {
    console.log("New value might be", countBuzzMinMax.value);
    const bvalue = parseInt(countBuzzMinMax.value);
    if (bvalue > max || bvalue < min) return;
    buzzNum = bvalue;
    console.log("Actually buzzcount is", buzzNum);
    console.log(buzzNum, typeof buzzNum);
}



main();

