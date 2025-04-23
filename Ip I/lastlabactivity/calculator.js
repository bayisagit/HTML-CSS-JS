const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultDisplay = document.getElementById('result');
const errorDisplay = document.getElementById('error');

const validateInputs = () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    if (isNaN(num1) || isNaN(num2)) {
        errorDisplay.style.display = 'block';
        resultDisplay.textContent = 'Result:';
        return false;
    }
    errorDisplay.style.display = 'none';
    return { num1, num2 };
};

document.getElementById('add').onclick = () => {
    const inputs = validateInputs();
    if (inputs) {
        resultDisplay.textContent = `Result: ${inputs.num1 + inputs.num2}`;
    }
};

document.getElementById('subtract').onclick = () => {
    const inputs = validateInputs();
    if (inputs) {
        resultDisplay.textContent = `Result: ${inputs.num1 - inputs.num2}`;
    }
};

document.getElementById('multiply').onclick = () => {
    const inputs = validateInputs();
    if (inputs) {
        resultDisplay.textContent = `Result: ${inputs.num1 * inputs.num2}`;
    }
};

document.getElementById('divide').onclick = () => {
    const inputs = validateInputs();
    if (inputs) {
        if (inputs.num2 === 0) {
            errorDisplay.textContent = 'Error: Division by zero!';
            errorDisplay.style.display = 'block';
            resultDisplay.textContent = 'Result:';
        } else {
            resultDisplay.textContent = `Result: ${inputs.num1 / inputs.num2}`;
        }
    }
};