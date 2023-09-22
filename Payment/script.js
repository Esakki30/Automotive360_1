
document.addEventListener('DOMContentLoaded', function () {
    const paymentMethodSelect = document.getElementById('paymentMethod');
    const cardFields = document.getElementById('cardFields');
    const upiFields = document.getElementById('upiFields');

    // Function to show or hide fields based on the selected payment method
    function toggleFields() {
        const selectedMethod = paymentMethodSelect.value;
        cardFields.style.display = selectedMethod === 'card' ? 'block' : 'none';
        upiFields.style.display = selectedMethod === 'upi' ? 'block' : 'none';
    }

    // Initial state
    toggleFields();

    // Listen for changes in the payment method selection
    paymentMethodSelect.addEventListener('change', toggleFields);
});
