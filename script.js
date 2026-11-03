const operators = {
    "+": function(op1, op2) {
        return op1 + op2;
    }, 
    "-": function(op1, op2) {
        return op1 - op2;
    }, 
    "*": function(op1, op2) {
        return op1 * op2;
    }, 
    "/": function(op1, op2) {
        return op1 / op2;
    }
}

const btn = document.getElementById("btn");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const op = document.getElementById("op");
const res = document.getElementById("res");
const opVis = document.getElementById("op-visual");


function fillOperatorOptions() {
    let newInner = "";

    for(const [key, value] of Object.entries(operators)) {
        newInner += "<option value=\"" + 
            key + "\">" + 
            key + "</option>";
    }

    op.innerHTML = newInner;
}

function initHtml() {
    fillOperatorOptions();
}

function updateResVisual() {
    if(Number(res.value) < 0) {
        res.classList.add("red");
        console.log("huh");
    } else {
        res.classList.remove("red");
    }
}

btn.onclick = function() {
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    let opr = op.value;

    res.value = operators[opr](n1, n2);

    updateResVisual();
}

op.onchange = function() {
    opVis.innerHTML = op.value;
}


initHtml();