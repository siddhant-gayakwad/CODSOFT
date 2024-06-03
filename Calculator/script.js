document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentInput = '0';
    let firstOperand = null;
    let secondOperand = false;
    let operator = null;

    const updateDisplay = () => {
        display.textContent = currentInput;
    };

    const handleNumber = (number) => {
        if (secondOperand) {
            currentInput = number;
            secondOperand = false;
        } else {
            currentInput = currentInput === '0' ? number : currentInput + number;
        }
    };

    const handleOperator = (nextOperator) => {
        const inputValue = parseFloat(currentInput);
        
        if (operator && secondOperand) {
            operator = nextOperator;
            return;
        }

        if (firstOperand === null) {
            firstOperand = inputValue;
        } else if (operator) {
            const result = performCalculation(firstOperand, inputValue, operator);
            currentInput = `${parseFloat(result.toFixed(8))}`;  // Limit to 8 decimal places
            firstOperand = result;
        }

        secondOperand = true;
        operator = nextOperator;
    };

    const performCalculation = (first, second, operator) => {
        switch (operator) {
            case '+':
                return first + second;
            case '-':
                return first - second;
            case '*':
                return first * second;
            case '/':
                return first / second;
            case '%':
                return (first * second) / 100;
            case '√':
                return Math.sqrt(first);
            default:
                return second;
        }
    };

    const handleClear = () => {
        currentInput = '0';
        firstOperand = null;
        secondOperand = false;
        operator = null;
    };

    const handleKeyPress = (event) => {
        const { key } = event;
        if (!isNaN(key)) {
            handleNumber(key);
        } else if (['+', '-', '*', '/', '%', '√'].includes(key)) {
            handleOperator(key);
        } else if (key === 'Enter' || key === '=') {
            handleOperator('=');
        } else if (key === 'Escape' || key === 'C') {
            handleClear();
        } else if (key === '.') {
            handleNumber(key);
        }
        updateDisplay();
    };

    document.querySelector('.buttons').addEventListener('click', (event) => {
        const { target } = event;
        if (!target.matches('button')) return;

        const { value } = target.dataset;

        switch (value) {
            case '+':
            case '-':
            case '*':
            case '/':
            case '%':
            case '√':
                handleOperator(value);
                break;
            case '=':
                handleOperator(value);
                break;
            case 'C':
                handleClear();
                break;
            default:
                handleNumber(value);
        }

        updateDisplay();
    });

    document.addEventListener('keydown', handleKeyPress);

    updateDisplay();
});
