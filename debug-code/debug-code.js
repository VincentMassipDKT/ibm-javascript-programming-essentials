
function performOperations() {
    // Introduce a debugger statement to pause execution
    debugger;

    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {

        // Perform the operations
        let results = []
        results.push(add(num1, num2));
        results.push(substract(num1, num2));
        results.push(multiply(num1, num2));
        results.push(divide(num1, num2));
        results.push(divisionRemainder(num1, num2));

        // Display the result
        displayResults(results);
    } else {
        displayError('⚠ Please enter valid numbers ⚠');
    }
}

/**
 * Add the numbers
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Number}
 */
function add(a, b) {
    return a + b;
}

/**
 * Substract the numbers
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Number}
 */
function substract(a, b) {
    return a - b;
}

/**
 * Multiply the numbers
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Number}
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Divide the numbers
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Number}
 */
function divide(a, b) {
    return a / b;
}


/**
 * Divide the numbers and gets the remainder
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Number}
 */
function divisionRemainder(a, b) {
    return a % b;
}

/**
 * Display the result in the paragraph element
 * @param {Array<Number>} results 
 */
function displayResults(results) {
    const resultElement = document.getElementById('result');
    resultElement.innerText = `The result are: 
    - Addition: ${results[0]}
    - Substraction: ${results[1]}
    - Multiplication: ${results[2]}
    - Division: ${results[3]}
    - Division Remainder: ${results[4]}`;
}

/**
 * Display an error message instead of the results
 * @param {String} errorMessage
 */
function displayError(errorMessage) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = errorMessage;
}

