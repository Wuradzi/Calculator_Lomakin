let currentInput = '';
let operation = null;

function appendNumber(number) {
    currentInput += number;
    updateResult();
}

function appendCharacter(char) {
    currentInput += char;
    updateResult();
}

function setOperation(op) {
    if (currentInput === '' && op !== '-') return; // Allow negative numbers
    if (currentInput.endsWith(op)) return; // Prevent duplicate operators
    currentInput += ` ${op} `;
    updateResult();
}

function calculateResult() {
    try {
        // Replace ^ with ** for exponentiation in eval
        const expression = currentInput.replace(/\^/g, '**');
        currentInput = eval(expression).toString();
    } catch (e) {
        currentInput = 'Error';
    }
    updateResult();
}

function clearResult() {
    currentInput = '';
    updateResult();
}

function updateResult() {
    document.getElementById('result').value = currentInput;
}
