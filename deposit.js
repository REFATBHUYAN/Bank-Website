
document.getElementById('btn-deposit').addEventListener('click',function(){

    const newDepositAmount = getInputValueById('deposit-field');
    const previousDepositTotal = getElementValueById('deposit-previous');
    const newDepositTotal = newDepositAmount + previousDepositTotal;
    setTextElementValueById('deposit-previous', newDepositTotal);
    const previousBalanceTotal = getElementValueById('balance-previous');
    const newBalanceTotal = newDepositAmount + previousBalanceTotal;
    setTextElementValueById('balance-previous', newBalanceTotal);
})