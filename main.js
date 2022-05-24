let operatorState = false;
let num1 = 0;
let operator = undefined;

function main() {
  createListeners();



}

function createListeners() {
  // create clear button listener
  const clearButton = document.querySelector(".clear-button");
  clearButton.addEventListener("click", clearDisplay);

  // create number and operator button listeners
  const inputButtons = document.querySelectorAll(".num-button");
  inputButtons.forEach((button) => {
    button.addEventListener("click", () => {
      onNumInput(button.getAttribute("data-value"));
    });
  });
}

// when the user inputs a number
function onNumInput(val) {
  if (operatorState == false) {
    num1.push(val);
    displayInput(num1);
  }

  else {
    operate(num1, operator, val);
  }
}

function onOperatorInput(val) {

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

main();
