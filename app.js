function inputIdCaller(idName) {
  const inputValue = document.getElementById(idName);
  const valueToNumber = parseFloat(inputValue.value);
  return valueToNumber;
}

function innerTextChanger(idName, changeData) {
  const textFeild = document.getElementById(idName);
  textFeild.innerText = changeData;
}



// const savingRateNumber = inputIdCaller("saving-parcentage");
// function savingParcent(){
//   if
// }


document.getElementById("calculate").addEventListener("click", function () {
  const totalIncome = inputIdCaller("total-income");
const foodCostNumber = inputIdCaller("food-cost");
const rentCostNumber = inputIdCaller("rent-cost");
const clothCostNumber = inputIdCaller("cloth-cost");
  const totalCost = foodCostNumber + rentCostNumber + clothCostNumber;
  const balance = totalIncome - totalCost;
  

  if (
    totalIncome > 0 &&
    foodCostNumber > 0 &&
    rentCostNumber > 0 &&
    clothCostNumber > 0
  ) {
    innerTextChanger("total-expenses", totalCost);
    innerTextChanger("balance", balance);
  }else{
    alert('please give a positive number')
  }
});

document.getElementById("saving").addEventListener("click", function () {
  const totalIncome = inputIdCaller("total-income");
  const savingRateNumber = inputIdCaller("saving-percentage");

  if(savingRateNumber > 100 != savingRateNumber <= 1){
    alert('please give a number between 1 to 100')
  }
  
  const totalSaving = (totalIncome * savingRateNumber) / 100;

  const currentBalance = document.getElementById('balance');
  const currentBalanceNumber = parseFloat(currentBalance.innerText); 

  if(totalSaving < currentBalanceNumber ){
    innerTextChanger("saving-amount", totalSaving)
    innerTextChanger("remaining-balance",totalIncome - totalSaving)
  }else{
    alert('your current balance is not enough')
  }



});
