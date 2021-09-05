function add(val1, val2) {
    val1 = parseFloat(val1);
    val2 = parseFloat(val2);
    return val1 + val2;
}
function subtract(val1, val2) {
    val1 = parseFloat(val1);
    val2 = parseFloat(val2);
    return val1 - val2;
}
function multiply(val1, val2) {
    val1 = parseFloat(val1);
    val2 = parseFloat(val2);
    return val1 * val2;
}
function divide(val1, val2) {
    val1 = parseFloat(val1);
    val2 = parseFloat(val2);
    if(val2 !== 0) {
        return val1 / val2;
    } else if(val2 === 0) {
        return "Nice try ;]";
    }
}
function operate(val1, operator, val2) {
    let answer;
    if(operator === '+') {
        answer = add(val1, val2);
    } else if(operator === '-') {
        answer = subtract(val1, val2);
    } else if(operator === '*' || operator === 'x') {
        answer = multiply(val1, val2);
    } else if(operator === '/') {
        answer = divide(val1, val2);
    }
    return Math.round(answer * 10000) / 10000;
}



const calc_display = document.querySelector('#output-screen');
const equal_key = document.querySelector('#equals');
const clear_key = document.querySelector('#clear')
let display_value = "";


btns = document.querySelectorAll('.value-btn');
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        valueEventFunction(e.target.value);
    });
});


operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        operatorEventFunction(e.target.value);
    })
});


equal_key.addEventListener('click', function() {
    updateDisplay(operateString(display_value));
});


clear_key.addEventListener('click', function() {
    display_value = "";
    calc_display.value = "0";
});

document.addEventListener('keydown', (e) => {
    let array_of_digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

    if(e.key === '+' || e.key === '-' || e.key === '/' || e.key === '*') { // if you pressed an operator
        operatorEventFunction(' ' + e.key + ' ');
    } else if(e.key === 'x') {
        operatorEventFunction(' * ');
    } else if(array_of_digits.includes(e.key)) { // if you pressed a number
        valueEventFunction(e.key);
    } else if(e.key === '=') { // Equals key
        updateDisplay(operateString(display_value));
    } else if(e.key === 'Backspace') { // AC key
        display_value = "";
        calc_display.value = "0";
    }
});



function updateDisplay(display_value) {
    calc_display.value = display_value;
}

function operateString(display_value) {
    let values = display_value.split(' ');
    let output = "";
    output = operate(values[0], values[1], values[2]);
    display_value = output;
    return display_value;
}

function valueEventFunction(value) {
    // checking if there already is a decimal point
    if(value === '.') {
        let array = display_value.split(' ');
        if(array.length === 3) {
            if(array[2].includes('.')) {
                return;
            } else {
                display_value += value;
                updateDisplay(display_value);
            }
        } else if(array.length < 3) {
            if(array[0].includes('.')) {
                return;
            } else {
                display_value += value;
                updateDisplay(display_value);
            }
        }
    } else {
    display_value += value;
    updateDisplay(display_value);
    }
}

function operatorEventFunction(value) {
    if(display_value.includes('+') || display_value.includes('-') || display_value.includes('*') || display_value.includes('/')) {
        display_value = operateString(display_value) + value;
        updateDisplay(display_value);
    } else {
        display_value += value;
        updateDisplay(display_value);
    }
}
