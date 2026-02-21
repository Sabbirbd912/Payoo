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
    console.log("New Balance", newBalance);
});