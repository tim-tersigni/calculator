let overwrite = true;
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

  // delete button listener
  const deleteButton = document.querySelector(".delete-button");
  deleteButton.addEventListener("click", deleteDigit);

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

  // negative button listener
  const negativeButton = document.querySelector(".negative-button");
  negativeButton.addEventListener("click", () => {
    onNegativePress();
  })

  //Key listener
  document.addEventListener("keydown", (ev) => {
    onKeyPress(ev.code, ev)
  });
}

function onKeyPress(keyCode, ev) {
  switch(keyCode) {
    case "Digit0":
      onNumInput(0);
      break;
    case "Digit1":
      onNumInput(1);
      break;
    case "Digit2":
      onNumInput(2);
      break;
    case "Digit3":
        onNumInput(3);
      break;
    case "Digit4":
      onNumInput(4);
      break;
    case "Digit5":
      onNumInput(5);
      break;
    case "Digit6":
      onNumInput(6);
      break;
    case "Digit7":
      onNumInput(7);
      break;
    case "Digit8":
      if (ev.shiftKey) onOperatorInput("×");
      else onNumInput(8);
      break;
    case "Digit9":
      onNumInput(9);
      break;
    case "Equal":
      if (ev.shiftKey) onOperatorInput("+");
      else operate(prevNum, operator, curNum);
      break;
    case "Minus":
      if (ev.shiftKey) onNegativePress();
      else onOperatorInput("−");
      break;
    case "Slash":
      onOperatorInput("÷");
      break;
    case "Enter":
      operate(prevNum, operator, curNum);
      break;
    case "Backspace":
      clearDisplay();
      break;
    case "Delete":
      deleteDigit();
      break;
  }
}

// call when the user inputs a number
function onNumInput(val) {
  // for decimal input
  if (val == ".") {
    if ((""+curNum).includes(val)) return;
  }

  // update current number
  if (!overwrite) {
    // prevent -0 getting appended to
    if (curNum === "-0") {
      curNum = "-";
    }
    curNum = "" + curNum + val;
  }
  else curNum = val;
  displayInput(curNum);

  overwrite = false;
}

// call when the user inputs an operator
function onOperatorInput(val) {
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
  overwrite = true;
  displayInput(curNum);
}

// on negative / positive press
function onNegativePress() {
  if ((""+curNum).split("")[0] != "-") {
    curNum = "-" + curNum;
  }
  else {
    curNum = curNum.slice(1)
  }
  overwrite = false;
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
  overwrite = true;
}

// delete last digit
function deleteDigit() {
  if (curNum.length > 1) curNum = (""+curNum).slice(0, curNum.length - 1);
  else {
    curNum = 0;
    overwrite = true;
  }
  displayInput(curNum);
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
  overwrite = true;
}

main();
