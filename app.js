document.getElementById("calculate").addEventListener("click", function () {
    const totalIncome = document.getElementById('total-income');
    const totalIncomeNumber = parseInt(totalIncome.value);
    
    const foodCost = document.getElementById('food-cost');
    const foodCostNumber = parseInt(foodCost.value);

    const rentCost = document.getElementById('rent-cost');
    const rentCostNumber = parseInt(rentCost.value)


    const clothCost = document.getElementById('cloth-cost');
    const clothCostNumber = parseInt(clothCost.value)

    const totalCost = foodCostNumber + rentCostNumber + clothCostNumber;

    const balance = totalIncomeNumber - totalCost;

    const totalExpensesFeild = document.getElementById('total-expenses');
    totalExpensesFeild.innerText = totalCost;
    const balanceFeild = document.getElementById('balance');
     balanceFeild.innerText = balance;

  console.log(totalIncomeNumber,foodCostNumber,rentCostNumber,clothCostNumber, totalCost, balance);
});

document.getElementById("saving").addEventListener("click", function () {
    const savingRate = document.getElementById('saving-percentage');
    const savingRateNumber = parseInt(savingRate.value)

    const balanceFeild = document.getElementById('balance');
    const balanceFeildNumber = parseInt(balanceFeild.innerText);

    const totalSaving =  (balanceFeildNumber * savingRateNumber) / 100;

    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = totalSaving;

    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = balanceFeildNumber - totalSaving;

  console.log(remainingBalance.innerText);
});
