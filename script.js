let display = document.getElementById('display');
let currentValue = "";

function appendChar(char) {
    currentValue += char;
    display.value = currentValue;
}