const paymentMethodSelect = document.getElementById('paymentMethod');
const cardFields = document.getElementById('cardFields');
const upiFields = document.getElementById('upiFields');
const netbankingFields = document.getElementById('netbankingFields');

paymentMethodSelect.addEventListener('change', () => {
    const selectedMethod = paymentMethodSelect.value;

    if (selectedMethod === 'card') {
        cardFields.style.display = 'block';
        upiFields.style.display = 'none';
        netbankingFields.style.display = 'none';
    } else if (selectedMethod === 'upi') {
        cardFields.style.display = 'none';
        upiFields.style.display = 'block';
        netbankingFields.style.display = 'none';
    } else if (selectedMethod === 'netbanking') {
        cardFields.style.display = 'none';
        upiFields.style.display = 'none';
        netbankingFields.style.display = 'block';
    }
});

// Trigger the change event to hide fields on page load
paymentMethodSelect.dispatchEvent(new Event('change'));
