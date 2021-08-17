function getInputValue(inputValue) {
    const inputField = document.getElementById(inputValue);

    const inputValueText = inputField.value;

    const newAmount = parseFloat(inputValueText);

    inputField.value = '';

    return newAmount;
}

function updateTotalField(totalValue, newValue) {
    const totalField = document.getElementById(totalValue);

    const previousTotalText = totalField.innerText;

    const previousTotal = parseFloat(previousTotalText);

    totalField.innerText = previousTotal + newValue;
}

function updateBalance(newInputValue, isTrueFalse) {
    const balanceTotal = document.getElementById('balance-total');

    const previousBalanceTotalText = balanceTotal.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalText);

    if (isTrueFalse == true) {
        balanceTotal.innerText = previousBalanceTotal + newInputValue;
    }

    else {
        balanceTotal.innerText = previousBalanceTotal - newInputValue;
    }



}






































document.getElementById('deposite-button').addEventListener('click', function () {

    //get deposite input;
    const newDepositeAmount = getInputValue('deposite-input');
    // const depositeInput = document.getElementById('deposite-input');

    // const depositeAmountText = depositeInput.value;

    // const depositeAmount = parseFloat(depositeAmountText);

    //get and update deposite total;

    updateTotalField('deposite-total', newDepositeAmount);

    // const depositeTotal = document.getElementById('deposite-total');

    // const depositeTotalText = depositeTotal.innerText;

    // const previouDepositeTotal = parseFloat(depositeTotalText);

    // depositeTotal.innerText = previouDepositeTotal + depositeAmount;

    //update balance
    updateBalance(newDepositeAmount, true);
    // const balanceTotal = document.getElementById('balance-total');

    // const balanceTotalText = balanceTotal.innerText;

    // const previousbalanceTotal = parseFloat(balanceTotalText);

    // balanceTotal.innerText = depositeAmount + previousbalanceTotal;
});

document.getElementById('withdraw-button').addEventListener('click', function () {

    //get withdraw

    const newWithdrawAmount = getInputValue('withdraw-input');

    // const withdrInput = document.getElementById('withdraw-input');

    // const withdrawAmountText = withdrInput.value;

    // const withdrawAmount = parseFloat(withdrawAmountText);

    //set and update withdraw

    updateTotalField('withdraw-total', newWithdrawAmount);

    // const withdrawTotal = document.getElementById('withdraw-total');

    // const previousWithdrawText = withdrawTotal.innerText;

    // const previousWithdraw = parseFloat(previousWithdrawText);

    // withdrawTotal.innerHTML = previousWithdraw + withdrawAmount;

    //update balance
    updateBalance(newWithdrawAmount);
    // const balanceTotal = document.getElementById('balance-total');

    // const balanceTotalText = balanceTotal.innerText;

    // const previousbalanceTotal = parseFloat(balanceTotalText);

    // balanceTotal.innerText
    //     = previousbalanceTotal - withdrawAmount;

})










































































