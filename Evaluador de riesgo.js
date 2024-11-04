function evaluateRisk(income, hasLoans, latePayments, isStudent) {
    if ((income < 20000 && latePayments >= 3) || (hasLoans = true && isStudent == true)) {
    console.log('High Risk');
   } else if (income > 20000 && income < 50000 && latePayments <= 2){
    console.log("Riskt Moderate")
   } else {
    console.log("Risk Low")
   }
}

evaluateRisk(15000, true, 4, true);