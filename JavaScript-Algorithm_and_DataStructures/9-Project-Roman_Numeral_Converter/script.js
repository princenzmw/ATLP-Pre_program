// Function to convert Arabic numeral to Roman numeral
const convertToRoman = (num) => {
    // Check if the number is less than 1
    if (num < 1) return 'Please enter a number greater than or equal to 1';
    
    // Check if the number is 4000 or greater
    if (num >= 4000) return 'Please enter a number less than or equal to 3999';

    // Array of objects representing Roman numeral values and symbols
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    // Initialize an empty string to store the Roman numeral
    let roman = '';

    // Iterate through each object in the array
    romanNumerals.forEach((item) => {
        // While the number is greater than or equal to the current symbol value
        while (num >= item.value) {
            // Append the current symbol (Roman numeral) to the result
            roman += item.numeral;
            // Subtract the current symbol's value from the number
            num -= item.value;
        }
    });

    // Return the final converted Roman numeral
    return roman;
}

// Add an Event listener for the button click
document.getElementById('convert-btn').addEventListener('click', () => {
    // Get the input and output elements from the DOM
    const numberInput = document.getElementById('number');
    const outputDiv = document.getElementById('output');
    
    // Parse the input value as an integer
    const number = parseInt(numberInput.value, 10);

    // Check if the input is not a valid number
    if (isNaN(number)) {
        outputDiv.className = 'badanswer';
        outputDiv.textContent = 'Please enter a valid number';
    } else if (number < 1 || number >= 4000) {
        // Check if the input is out of range
        // Set the output style and Display the text result for out-of-range input
        outputDiv.className = 'badanswer';
        outputDiv.textContent = convertToRoman(number);
    } else {
        // Set the output style and Display the result with a positive outcome
        outputDiv.className = 'goodanswer';
        outputDiv.textContent = convertToRoman(number);
    }
});
