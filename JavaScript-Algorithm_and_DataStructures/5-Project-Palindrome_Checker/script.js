const userInputString = document.getElementById('input-text');
const originalString = document.getElementById("user-text");
const givAnswerToUser = document.getElementById('answer');
const checkButton = document.getElementById('ckeck-btn');

const isPalindrome = (inputString) => {
    if (inputString.length < 1) {
        alert("Please input a value");
        return;
    }
    else if (inputString.length == 1) {
        return true;
    }

    const filteredWord = (inputString.replace(/[^a-zA-Z0-9]/g, '')).toLowerCase();
    const reversedWord = filteredWord.split('').reverse().join('');

    if (filteredWord === reversedWord) {
        return true;
    }
    else {
        return false;
    }
};

const finalResult = (passedString) => {
    if (isPalindrome(passedString) == true) {
        return ' is a palindrome.';
    }
    else if (isPalindrome(passedString) == false) {
        return ' is not a palindrome.';
    }
};

const printResult = () => {
    originalString.innerText = userInputString;
    givAnswerToUser.innerText = finalResult(userInputString);
};

checkButton.addEventListener('click', printResult);
console.log(userInputString);
console.log(original);
console.log(givAnswerToUser);
console.log(isPalindrome(userInputString));