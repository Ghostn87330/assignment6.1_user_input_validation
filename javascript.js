// Function to validate user inputs
function validateInputs() {
    // Get values from input fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const zipCode = document.getElementById('zipCode').value;
    
    // Combine first and last names
    const fullName = firstName + ' ' + lastName;
    
    // Check if full name is too long
    if (fullName.length > 20) {
        // Show warning message
        document.getElementById('warning').innerText = 'Full name must be 20 characters or less.';
        document.getElementById('message').innerText = '';
        return;
    }
    
    // Validate zip code (must be exactly 5 digits)
    const zipCodePattern = /^\d{5}$/;
    if (!zipCodePattern.test(zipCode)) {
        // Show warning message
        document.getElementById('warning').innerText = 'Zip code must be exactly 5 digits.';
        document.getElementById('message').innerText = '';
        return;
    }
    
    // Clear any previous warning messages
    document.getElementById('warning').innerText = '';
    
    // Show secret message if inputs are valid
    document.getElementById('message').innerText = 'Congratulations! Here is your secret message: "You have successfully validated the inputs!"';
}