document.getElementById('check-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    const resultsDiv = document.getElementById('results-div');

    if (!userInput.trim()) {
        alert('Please provide a phone number');
    } else {
        const isValid = validatePhoneNumber(userInput);
        if (isValid) {
            resultsDiv.textContent = `Valid US number: ${userInput}`;
        } else {
            resultsDiv.textContent = `Invalid US number: ${userInput}`;
        }
    }
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('user-input').value = '';
    document.getElementById('results-div').textContent = '';
});

function validatePhoneNumber(phoneNumber) {
    // Validation logic implementation here
    // Example: We'll Check if phoneNumber matches a valid US phone number pattern
    const pattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
    return pattern.test(phoneNumber);
}
