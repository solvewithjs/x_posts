function budgetSummary(income, expenses) {
    const totalExpenses = expenses.reduce((total, expense) => total + expense, 0);
    const balance = income - totalExpenses;
    return `Your balance is $${balance}.`;
}
