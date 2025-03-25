let currentInput = '';
let operation = null;
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateResult();
}

function appendCharacter(char) {
    currentInput += char;
    updateResult();
}

function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') calculateResult();
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
    } catch (e) {
        currentInput = 'Error';
    }
    operation = null;
    previousInput = '';
    updateResult();
}

function clearResult() {
    currentInput = '';
    operation = null;
    previousInput = '';
    updateResult();
}

function updateResult() {
    document.getElementById('result').value = currentInput;
}
