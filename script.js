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
    return answer;
}



const calc_display = document.querySelector('#output-screen');
const equal_key = document.querySelector('#equals');
const clear_key = document.querySelector('#clear')
let display_value = "";


btns = document.querySelectorAll('.value-btn');
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        value_event_function(e.target.value);
    });
});


operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        operator_event_function(e.target.value);
    })
});


equal_key.addEventListener('click', function() {
    update_display(operate_string(display_value));
});


clear_key.addEventListener('click', function() {
    display_value = "";
    calc_display.value = "0";
});

document.addEventListener('keydown', (e) => {
    let array_of_digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

    if(e.key === '+' || e.key === '-' || e.key === '/' || e.key === '*') { // if you pressed an operator
        operator_event_function(' ' + e.key + ' ');
    } else if(e.key === 'x') {
        operator_event_function(' * ');
    } else if(array_of_digits.includes(e.key)) { // if you pressed a number
        value_event_function(e.key);
    } else if(e.key === '=') { // Equals key
        update_display(operate_string(display_value));
    } else if(e.key === 'Backspace') { // AC key
        display_value = "";
        calc_display.value = "0";
    }
});



function update_display(display_value) {
    calc_display.value = display_value;
}

function operate_string(display_value) {
    let values = display_value.split(' ');
    let output = "";
    output = operate(values[0], values[1], values[2]);
    display_value = output;
    return display_value;
}

function value_event_function(value) {
    // checking if there already is a decimal point
    if(value === '.') {
        let array = display_value.split(' ');
        if(array.length === 3) {
            if(array[2].includes('.')) {
                return;
            } else {
                display_value += value;
                update_display(display_value);
            }
        } else if(array.length < 3) {
            if(array[0].includes('.')) {
                return;
            } else {
                display_value += value;
                update_display(display_value);
            }
        }
    } else {
    display_value += value;
    update_display(display_value);
    }
}

function operator_event_function(value) {
    if(display_value.includes('+') || display_value.includes('-') || display_value.includes('*') || display_value.includes('/')) {
        display_value = operate_string(display_value) + value;
        update_display(display_value);
    } else {
        display_value += value;
        update_display(display_value);
    }
}
