document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputValueById('withdraw-field');
    const previousWithdrawTotal = getElementValueById('withdraw-previous');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-previous', newWithdrawAmount);
    const previousBalanceTotal = getElementValueById('balance-previous');
    const newBalance = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-previous', newBalance);
    
})