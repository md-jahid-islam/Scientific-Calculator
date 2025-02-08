 // }
 let display = document.getElementById('display');
 let lastAnswer = null;

 // Display clear function
 function clearDisplay() {
  display.value = '';
  lastAnswer = null;
}

// Display append function
function appendToDisplay(value) {
  display.value += value;
}

 // Cancel last input function
function cancelLastInput() {
  let currentValue = display.value;
  if (currentValue.length > 0) {
    // Remove the last character from the display
    display.value = currentValue.slice(0, -1);
  }
}

// Function to perform calculation
function calculate() {
  try {
    let expression = display.value;
    
    // Handle π and e constants
    expression = expression.replace(/π/g, Math.PI);
    expression = expression.replace(/e/g, Math.E);
    
    // Handle factorial
    expression = expression.replace(/(\d+)!/g, (match, num) => factorial(num));
    
    // Handle Rad/Deg
    expression = expression.replace(/Rad/g, '*Math.PI/180');
    expression = expression.replace(/Deg/g, '*180/Math.PI');
    
    // Evaluate the expression
    lastAnswer = eval(expression);
    display.value = lastAnswer;
  } catch (error) {
    display.value = 'Error'; // Show error for invalid calculations
  }
}

// Factorial calculation function
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
