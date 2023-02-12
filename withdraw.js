document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputValueById('withdraw-field');
    if(isNaN(newWithdrawAmount)){
        alert('please enter number amount');
        return;
    }
    const previousBalanceTotal = getElementValueById('balance-previous');
    if(newWithdrawAmount > previousBalanceTotal){
        alert('baap er bank e tk nai ato');
        return;
    }
    const previousWithdrawTotal = getElementValueById('withdraw-previous');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-previous', newWithdrawTotal);
    
    const newBalance = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-previous', newBalance);
    
})