let operatorState = false;
let curNum = 0;
let prevNum = undefined;
let operator = undefined;

function main() {
  createListeners();
}

function createListeners() {
  // create clear button listener
  const clearButton = document.querySelector(".clear-button");
  clearButton.addEventListener("click", clearDisplay);

  // create number and operator button listeners
  const numButtons = document.querySelectorAll(".num-button");
  numButtons.forEach((button) => {
    button.addEventListener("click", () => {
      onNumInput(button.getAttribute("data-value"));
    });
  });

  const opButtons = document.querySelectorAll(".operator-button");
  opButtons.forEach((button) => {
    button.addEventListener("click", () => {
      onOperatorInput(button.getAttribute("data-value"));
    });
  });
}

// call when the user inputs a number
function onNumInput(val) {
  console.debug("onNumInput()");
  // update current number
  if (curNum != 0) curNum = "" + curNum + val;
  else curNum = val;
}

// call when the user inputs an operator
function onOperatorInput(val) {
  console.debug("onOperatorInput()");
  // no previous expression
  if (prevNum == undefined) {
    prevNum = curNum;
    curNum = 0;
    operator = val;
  }
  else {
    prevNum = operate(prevNum, operator, curNum);
    curNum = 0;
    operator = val;
  }
  displayInput(curNum);
}


// add passed argument to display
function displayInput(input) {
  const display = document.querySelector(".display-input");
  display.value = input;
}

// clear display
function clearDisplay() {
  const display = document.querySelector(".display-input");
  display.value = "";
  num1 = 0;
}

// evaluate expression
function operate(num1, operator, num2) {
  alert("operate!");
  switch(operator) {
    case "÷":
      return num1 / num2;
    case "×":
      return num1 * num2;
    case "−":
      return num1 - num2;
    case "+":
      return num1 + num2;
    default:
      return 0;
  }
}

main();
