document.getElementById("btn-withdraw").addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat (newWithdrawAmountString);

    //step 3

    withdrawField.value = '';

    //step 4

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //step 5
    const newWithdrawTotal = previousWithdrawTotal+newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    //step 6

    const balanceTotalElement   = document.getElementById('balance-total');
const previousBalanceTotalString  = balanceTotalElement.innerText;
const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

//step 7

const newBalanceTotal = previousBalanceTotalAmount - newWithdrawAmount;
balanceTotalElement.innerText = newBalanceTotal;




























})