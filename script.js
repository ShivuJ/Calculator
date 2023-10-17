let display = document.getElementById("display");
let currentValue = "";

function appendChar(char) {
    currentValue += char;
    display.value = currentValue;
}

function deleteChar() {
    currentValue = currentValue.slice(0, -1);
    display.value = currentValue;
}

function clearChar() {
    currentValue = "";
    display.value = currentValue;
}

function calculate() {
    currentValue = eval(currentValue);
    display.value = currentValue;
    currentValue += char;
}