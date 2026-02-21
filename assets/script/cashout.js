// document.getElementById("cashout-btn").addEventListener("click", function () {
//     const cashoutNumberInput = document.getElementById("agent-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if (cashoutNumber.length !== 11) {
//         alert("Invalid Number!");
//         return
//     }

//     const cashoutAmountInput = document.getElementById("user-number")
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);

//     const balanceElement = document.getElementById("balance");
//     const balanceText = balanceElement.innerText;
//     console.log(balanceText);

//     const newBalance = Number(balanceText) - Number(cashoutAmount);


//     if (isNaN(newBalance) || newBalance < 0) {
//         alert("Insufficient Balance!");
//         return;
//     }

//     const cashOutPinInput = document.getElementById("pin-cacshout");
//     const cashOutPin = cashOutPinInput.value;
//     if (cashOutPin.length === 4 && cashOutPin === "1234") {
//         alert("Cashout Successful!");
//         balanceElement.innerText = newBalance;
//     } else {
//         alert("Invalid Pin!");
//     }
// });

document.getElementById("cashout-btn").addEventListener("click", function () {
    const cashoutNumber = getValueFromInput("agent-number");
    if (cashoutNumber.length !== 11) {
        alert("Invalid Number!");
        return
    }
    // console.log(cashoutNumber);

    const cashoutAmount = getValueFromInput("amount-cashout");
    // if (isNaN(cashoutAmount) || cashoutAmount <= 0) {
    //     alert("Invalid Amount!");
    //     return;
    // }
    // console.log(cashoutAmount);


    const balanceElement = document.getElementById("balance");
    const balance=balanceElement.innerText;
    console.log(balance);

    const newBalance = Number(balance) - Number(cashoutAmount);
    if(newBalance<0){
        alert("Insufficient Balance!");
        return;
    }

    const pin = getValueFromInput("pin-cacshout");
    if(pin==="1234"){
        alert("Cashout Successful!");
        balanceElement.innerText = newBalance;
    } else{
        alert("Invalid Pin!");
        return
    }
});