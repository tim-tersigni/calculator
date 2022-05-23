// add passed argument to display
function displayInput(input) {
  const display = document.querySelector(".display-input");
  display.value += input;
}


// create number and operator button listeners
const inputButtons = document.querySelectorAll(".num-button, .operator-button");

inputButtons.forEach( (button) => {
  button.addEventListener("click", () => {
    displayInput(button.getAttribute('data-value'));
  });
});