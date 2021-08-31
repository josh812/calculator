function add(val1, val2) {
    val1 = parseInt(val1);
    val2 = parseInt(val2);
    return val1 + val2;
}
function subtract(val1, val2) {
    val1 = parseInt(val1);
    val2 = parseInt(val2);
    return val1 - val2;
}
function multiply(val1, val2) {
    val1 = parseInt(val1);
    val2 = parseInt(val2);
    return val1 * val2;
}
function divide(val1, val2) {
    val1 = parseInt(val1);
    val2 = parseInt(val2);
    if(val2 !== 0) {
        return val1 / val2;
    } else if(val2 === 0) {
        return undefined;
    }
}