let operatorState = true;
let curNum = 0;
let prevNum = undefined;
let operator = undefined;

function main() {
  createListeners();
}

function createListeners() {
  // clear button listener
  const clearButton = document.querySelector(".clear-button");
  clearButton.addEventListener("click", clearDisplay);

  // number button listeners
  const numButtons = document.querySelectorAll(".num-button");
  numButtons.forEach((button) => {
    button.addEventListener("click", () => {
      onNumInput(button.getAttribute("data-value"));
    });
  });

  // operator buttons listeners
  const opButtons = document.querySelectorAll(".operator-button");
  opButtons.forEach((button) => {
    button.addEventListener("click", () => {
      onOperatorInput(button.getAttribute("data-value"));
    });
  });

  // equals button listener
  const equalsButton = document.querySelector(".equals-button");
  equalsButton.addEventListener("click", () => {
    if (prevNum != undefined && operator != undefined) {
      operate(prevNum, operator, curNum);
    }
  });
}

// call when the user inputs a number
function onNumInput(val) {
  console.debug("onNumInput()");
  // update current number
  if (!operatorState) curNum = "" + curNum + val;
  else curNum = val;
  displayInput(curNum);

  operatorState = false;
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
    operate(prevNum, operator, curNum);
    prevNum = curNum
    operator = val;
  }
  operatorState = true;
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
  display.value = 0;
  curNum = 0;
  prevNum = undefined;
  operator = undefined;
}

// evaluate expression
function operate(num1, operator, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  let result = 0;
  if (operator == "+")
    result = num1 + num2;
  else if (operator == "−")
    result = num1 - num2;
  else if (operator == "×")
    result = num1 * num2;
  else if (operator == "÷")
    result = num1 / num2;
  else
    result = undefined;
  curNum = result;
  prevNum = undefined;
  operator = undefined;
  displayInput(curNum);
  operatorState = true;
}

main();
