const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');

const decimalToBinary = (input) => {};

const checkUserInput = () => {
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    alert('Please provide a decimal number');
    return;
  }

  decimalToBinary(parseInt(numberInput.value));
};

convertBtn.addEventListener('click', checkUserInput);

numberInput.addEventListener('keydown', () => {});

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});