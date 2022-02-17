function inputIdCaller(idName) {
  const inputValue = document.getElementById(idName);
  const valueToNumber = parseInt(inputValue.value);
  return valueToNumber;
}

function innerTextChanger(idName, changeData) {
  const textFeild = document.getElementById(idName);
  textFeild.innerText = changeData;
}

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
    
  }
});

document.getElementById("saving").addEventListener("click", function () {
  const savingRate = document.getElementById("saving-percentage");
  const savingRateNumber = parseInt(savingRate.value);

  const balanceFeild = document.getElementById("balance");
  const balanceFeildNumber = parseInt(balanceFeild.innerText);

  const totalSaving = (balanceFeildNumber * savingRateNumber) / 100;

  const savingAmount = document.getElementById("saving-amount");
  savingAmount.innerText = totalSaving;

  const remainingBalance = document.getElementById("remaining-balance");
  remainingBalance.innerText = balanceFeildNumber - totalSaving;

  console.log(remainingBalance.innerText);
});
