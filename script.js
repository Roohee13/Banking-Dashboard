// Get the balance element
const balanceElement = document.getElementById('balance');

// Set the initial balance
let balance = 1000;

// Update the balance display
balanceElement.textContent = `$${balance}`;

// Add event listeners to the deposit and withdrawal buttons
document.getElementById('deposit-button').addEventListener('click', depositMoney);
document.getElementById('withdraw-button').addEventListener('click', withdrawMoney);

// Deposit money function
function depositMoney() {
    // Get the deposit amount
    const depositAmount = parseFloat(document.getElementById('deposit-amount').value);

    // Clear the deposit input field
    document.getElementById('deposit-amount').value = '';

    // Update the balance
    balance += depositAmount;

    // Update the balance display
    balanceElement.textContent = `$${balance}`;
}

// Withdraw money function
function withdrawMoney() {
    // Get the withdrawal amount
    const withdrawalAmount = parseFloat(document.getElementById('withdrawal-amount').value);

    // Clear the withdrawal input field
    document.getElementById('withdrawal-amount').value = '';

    // Check if the withdrawal amount exceeds the balance
    if (withdrawalAmount > balance) {
        // Display the alert message in the middle of the page
        const alertMessageElement = document.getElementById('alert-message');
        alertMessageElement.textContent = 'Insufficient funds!';
        alertMessageElement.style.display = 'block';

        // Add a timeout to hide the alert message after 2 seconds
        setTimeout(function() {
            alertMessageElement.style.display = 'none';
        }, 5000);

        return;
    }

    // Update the balance
    balance -= withdrawalAmount;

    // Update the balance display
    balanceElement.textContent = `$${balance}`;
}