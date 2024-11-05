function evaluateRisk(income, hasLoans, latePayments, isStudent) {
    if ((income < 20000 && latePayments >= 3) || (hasLoans = true && isStudent == true)) {
    return 'High Risk';
   } else if (income > 20000 && income < 50000 && latePayments <= 2){
    return "Riskt Moderate";
   } else {
    return "Risk Low";
   }
}

console.log(evaluateRisk(15000, true, 4, true));