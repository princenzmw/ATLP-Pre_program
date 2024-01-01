const originalString = document.getElementById("result");
const checkButton = document.getElementById("check-btn");

const isPalindrome = () => {
    const userInputString = document.getElementById('text-input').value;
    if (userInputString.length < 1) {
        alert("Please input a value");
    }
    else if (userInputString.length == 1) {
        originalString.innerText = `${userInputString} is a palindrome.`;
    }

    const filteredWord = (userInputString.replace(/[^a-zA-Z0-9]/g, '')).toLowerCase();
    const reversedWord = filteredWord.split('').reverse().join('');

    if (filteredWord === reversedWord) {
        originalString.innerText = `${userInputString} is a palindrome.`;
    }
    else {
        originalString.innerText = `${userInputString} is not a palindrome.`;
    }
};

checkButton.addEventListener('click', isPalindrome);

console.log(userInputString);
console.log(original);
console.log(givAnswerToUser);
console.log(isPalindrome(userInputString));