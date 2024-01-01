const userInputString = document.getElementById('text-input').value;
const originalString = document.getElementById("result");
const givAnswerToUser;
const checkButton = document.getElementById("check-btn");

const isPalindrome = (inputString) => {
    if (inputString.length < 1) {
        alert("Please input a value");
    }
    else if (inputString.length == 1) {
        originalString.innerHTML = `<span style="font-weight:700;">${userInputString} </span><span>is a palindrome.</span>`;
    }

    const filteredWord = (inputString.replace(/[^a-zA-Z0-9]/g, '')).toLowerCase();
    const reversedWord = filteredWord.split('').reverse().join('');

    if (filteredWord === reversedWord) {
        originalString.innerHTML = `<span style="font-weight:700;">${userInputString} </span><span>is a palindrome.</span>`;
    }
    else {
        originalString.innerHTML = `<span style="font-weight:700;">${userInputString} </span><span>is not a palindrome.</span>`;
    }
};

checkButton.addEventListener('click', isPalindrome);

console.log(userInputString);
console.log(original);
console.log(givAnswerToUser);
console.log(isPalindrome(userInputString));