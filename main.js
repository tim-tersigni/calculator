let operatorState = false;
let operand1 = 0;
let operator = undefined;

function main() {
  // create clear button listener
  const clearButton = document.querySelector(".clear-button");
  clearButton.addEventListener("click", clearDisplay);
}

// add passed argument to display
function displayInput(input) {
  const display = document.querySelector(".display-input");
  display.value += input;
}

// clear display
function clearDisplay() {
  const display = document.querySelector(".display-input");
  display.value = "";
}

// evaluate expression
function operate(num1, operator, num2) {
  console.log("todo");
}

// create number and operator button listeners
const inputButtons = document.querySelectorAll(".num-button, .operator-button");
inputButtons.forEach((button) => {
  button.addEventListener("click", () => {
    displayInput(button.getAttribute("data-value"));
  });
});

main();
