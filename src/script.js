let currentInput = '';
let operation = null;
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
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
    if (operation === null || currentInput === '' || previousInput === '') return;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    switch (operation) {
        case '+':
            currentInput = (num1 + num2).toString();
            break;
        case '-':
            currentInput = (num1 - num2).toString();
            break;
        case '*':
            currentInput = (num1 * num2).toString();
            break;
        case '/':
            currentInput = (num2 !== 0 ? (num1 / num2).toString() : 'Error');
            break;
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
