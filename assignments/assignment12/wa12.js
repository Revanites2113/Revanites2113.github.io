const minusButton = document.querySelector('.minusButton').addEventListener('click', minus);
const plusButton = document.querySelector('.plusButton').addEventListener('click', plus);
const resetButton = document.querySelector('.resetButton').addEventListener('click', reset);
const submitButton = document.querySelector('.submitButton').addEventListener('click', submit);
const randomButton = document.querySelector('.randomButton').addEventListener('click', random);

const output = document.querySelector('.output');
var outputInt = parseInt(output.textContent);

function submit() {
    alert(output.textContent);
};

function reset() {
    const resetValue = "0000000000";
    outputInt = 0;
    output.textContent = resetValue;
};

function plus() {
    if (outputInt <= 9999999999) {
        outputInt += 1;
        output.textContent = outputInt;
    }
    else {
        return;
    }
};

function minus() {
    if (outputInt <= 0) {
        return;
    }
    else {
        outputInt -= 1;
        output.textContent = outputInt;
    }
};

function random() {
    outputInt = randomNumber(0, 9999999999);
    output.textContent = outputInt;
};

function randomNumber(min, max) {
    const num = Math.floor(Math.random(min, max - min + 1) + min);
    return num;
};


/*const button = document.querySelector('.button');
const output = document.querySelector('.output');
let phone_content = document.querySelector('.phone');

button.addEventListener('click', updateOutput);

function updateOutput() {
    output.textContent = phone_content.value;
    alert("You submitted this number: " + phone_content.value);
}*/

