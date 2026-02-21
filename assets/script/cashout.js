document.getElementById("cashout-btn").addEventListener("click", function() {
    const cashoutNumberInput=document.getElementById("agent-number");
    const cashoutNumber=cashoutNumberInput.value ;
    console.log(cashoutNumber);

    const cashoutAmountInput=document.getElementById("user-number")
    const cashoutAmount=cashoutAmountInput.value;
    console.log(cashoutAmount);

    const balanceElement=document.getElementById("balance");
    const balanceText=balanceElement.innerText;
    console.log(balanceText);

    const newBalance= Number(balanceText) - Number(cashoutAmount);
    
    
    if(newBalance < 0){
        alert("Invalid Amount!");
        return
    }
    const cashOutPinInput=document.getElementById("pin-cacshout");
    const cashOutPin=cashOutPinInput.value;
    if(cashOutPin.length === 4 && cashOutPin === "1234"){
        alert("Cashout Successful!");
        balanceElement.innerText = newBalance;
    }else{
        alert("Invalid Pin!");
    }
});