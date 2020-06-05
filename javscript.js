console.log("Running FizzBuzz");

//globals
const maxCountEl = document.getElementById("max-value");
let maxCount = 100;
let minCount = 1;
const max = 100;
const min = 0;


function main() {
    console.log("Running function main");

        


    addElements();
    onUserClickAddElements();
}

main();

function addElement(parent, tag, id, classList, content) {
    const newEl = document.createElement(tag);
    if (id !== null) newEl.id = id;
    newEl.classList.add(...classList);
    newEl.innerText = content;
    parent.appendChild(newEl);
}

function addElements() {
    console.log("Generating Elements");
    const innerCont = document.getElementById("id-inner-cont");
    for (let i = 0; i <= maxCount; i++){  
        const id = "box-id-" + i;
        const classList = ["box"];
        if (i % 3 === 0 && i % 5 === 0 ) {
            classList.push("orange-bg");
            addElement(innerCont, "div", id, classList, "FizzBuzz" + i);
        }else if (i % 3 === 0) {
            classList.push("yellow-bg");
            addElement(innerCont, "div", id, classList, "Fizz" + i);
        }else if (i % 5 === 0) {
            classList.push("green-bg");
            addElement(innerCont, "div", id, classList, "Buzz" + i);
        }else {
            classList.push("beige-bg");
            addElement(innerCont, "div", id, classList, " " + i);
        }
    }
}

function onUserClickAddElements () {
    console.log("Generating elements on click");
    const btnGen = document.getElementById("btn-generate");
    btnGen.onclick = addElements;

}

main();
