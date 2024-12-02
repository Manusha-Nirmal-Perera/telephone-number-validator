document.getElementById('check-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value.trim();
    const resultsDiv = document.getElementById('results-div');
    
    if (userInput === '') {
        alert("Please provide a phone number");
        return;
    }

    if (isValidPhoneNumber(userInput)) {
        resultsDiv.textContent = `Valid LK number: ${userInput}`;
    } else {
        resultsDiv.textContent = `Invalid LK number: ${userInput}`;
    }
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('user-input').value = '';
    document.getElementById('results-div').textContent = '';
});

function isValidPhoneNumber(phoneNumber) {
    const phonePatterns = [
        /^94?\s?7\d{1}-\d{3}-\d{4}$/,               // 94 7X-XXX-XXXX or 7X-XXX-XXXX
        /^94?\s?7\(\d{1}\)\s?\d{3}-\d{4}$/,         // 94 (7X) XXX-XXXX or (7X) XXX-XXXX
        /^94?\(7\d{1}\)\d{3}-\d{4}$/,               // 94(7X)XXX-XXXX or (7X)XXX-XXXX
        /^94?\s?7\d{8}$/,                           // 947XXXXXXXX OR 7XXXXXXXX
        /^94?\s?7\d{1}\s\d{3}\s\d{4}$/,             // 94 7X XXX XXXX or 7X XXX XXXX
        /^7\d{8}$/                                  // Simple 9-digit number starting with 7
    ];

    const countryCodePattern = /^94?\s?|^7/;

    // Ensure the phone number starts with 94 or 7
    if (!countryCodePattern.test(phoneNumber)) {
        return false;
    }

    // Check against phone patterns
    return phonePatterns.some(pattern => pattern.test(phoneNumber));
}
