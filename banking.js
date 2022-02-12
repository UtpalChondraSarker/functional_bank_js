function getInputValue(inputId){
    const inputField=document.getElementById(inputId);
    const inputAmountField=inputField.value ;
    const amountValue=parseFloat(inputAmountField);
    inputField.value='';
    return amountValue;
}

function updateTotalField(totalFeildId,amount){
    const totalElement=document.getElementById(totalFeildId);
   const totalText= totalElement.innerText;
   const previousTotal=parseFloat(totalText);
   totalElement.innerText=previousTotal+amount;
}
function getCurrentBalance(){
    const balanceTotal=document.getElementById('balance-total')
   const balanceTotalText=balanceTotal.innerText;
   const previousBanlanceTotal=parseFloat(balanceTotalText);
   return previousBanlanceTotal;
}

function updateBalance(depositInput,isadd){
    const balanceTotal=document.getElementById('balance-total')
//    const balanceTotalText=balanceTotal.innerText;
//    const previousBanlanceTotal=parseFloat(balanceTotalText);
   const previousBanlanceTotal=getCurrentBalance();
   if(isadd==true){
    balanceTotal.innerText=previousBanlanceTotal+depositInput;
   }
   else{
    balanceTotal.innerText=previousBanlanceTotal-depositInput;
   }
}
//event hander button
document.getElementById('deposit-button').addEventListener('click',function(){
// //input field
    // const inputField=document.getElementById('deposit-input');
    // const inputAmountField=inputField.value ;
    // const amountValue=parseFloat(inputAmountField)
      //const depositInput=getInputValue('deposit-input');

    // get current deposit total
//    const totalElement=document.getElementById('deposit-total');
//    const totalText= totalElement.innerText;
//    const previousTotal=parseFloat(totalText);
//    totalElement.innerText=previousTotal+depositInput;
       // updateTotalField('deposit-total',depositInput);
   //update balance

//    const balanceTotal=document.getElementById('balance-total')
//    const balanceTotalText=balanceTotal.innerText;
//    const previousBanlanceTotal=parseFloat(balanceTotalText);
//    balanceTotal.innerText=previousBanlanceTotal+depositInput;

   //inputField.value='';
   const depositInput=getInputValue('deposit-input');
   if(depositInput>0){
    updateTotalField('deposit-total',depositInput);
    updateBalance(depositInput,true);
    
   }
   if(depositInput!=-1){
    alert(`Not a allow in this amount`)
}
   
   
})
//  withdraw button;
document.getElementById('Withdraw-button').addEventListener('click',function(){
    //const withdrawInput=document.getElementById('Withdraw-input');
    // const withdrawAmountText=withdrawInput.value;
    // const withdrawAmount=parseFloat(withdrawAmountText)

         // const withdrawAmount=getInputValue('Withdraw-input')
    

    // withdraw update total
    // const withdrawTotal=document.getElementById('withdraw-total');
    // const withdrawTotalText=withdrawTotal.innerText;
    // const previousWithdrawTotal=parseFloat(withdrawTotalText);
    // withdrawTotal.innerText=previousWithdrawTotal+withdrawAmount;
         // updateTotalField('withdraw-total', withdrawAmount)
    //update balance after withdraw
    // const balanceTotal= document.getElementById('balance-total');
    // const balanceTotalText=balanceTotal.innerText;
    // const previousBanlanceTotal=parseFloat(balanceTotalText);
    // balanceTotal.innerText=previousBanlanceTotal-withdrawAmount;

     //withdrawInput.value='';
     const withdrawAmount=getInputValue('Withdraw-input')
     const currentBalance=getCurrentBalance();
     if(withdrawAmount> 0 && withdrawAmount <currentBalance ){
        updateTotalField('withdraw-total', withdrawAmount)
     updateBalance(withdrawAmount,false)
     }
     if(withdrawAmount>currentBalance){
         alert(`Your acount Balance is not available`)
     }
     if(withdrawAmount!=-1){
         alert('Not a allow in this amount')
     }
});