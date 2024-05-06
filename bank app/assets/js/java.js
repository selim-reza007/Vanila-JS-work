


document.getElementById('depositBtn').addEventListener('click', function () {
    let depositBox = document.getElementById('depositbox');
    let depositAmount = depositBox.value;
    let depositAmountFloat = parseFloat(depositAmount);
    let previousBalanceBox = document.getElementById('pB');
    let pBamount = previousBalanceBox.innerText;
    let pBintiser = parseFloat(pBamount);
    let finaLdepositAmount = depositAmountFloat + pBintiser;
    document.getElementById('pB').innerText = finaLdepositAmount;
    depositBox.value = " ";
})
document.getElementById('withdrawBtn').addEventListener('click', function () {

    let withdrawAmount = document.getElementById('withdrawBox').value;
    let withdrawAmountFloat = parseFloat(withdrawAmount);

    let previousBalanceBox = document.getElementById('pB').innerText;
    let previousBalancfloat = parseFloat(previousBalanceBox);

    if (withdrawAmountFloat > previousBalancfloat) { alert('Insufficient balance!!!'); document.getElementById('withdrawBox').value = " "; return false; }
    else if (isNaN(withdrawAmountFloat) || withdrawAmountFloat < 0) {
        alert('Please type Numbers only!!!!!!!')
        document.getElementById('withdrawBox').value = " ";
    }
    else {
        let finalBalance = previousBalancfloat - withdrawAmountFloat;
        document.getElementById('pB').innerText = finalBalance;
        document.getElementById('withdrawBox').value = " ";
    }
}
)

