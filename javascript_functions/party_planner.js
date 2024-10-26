function calculatePartyCost(guests, foodCost, drinkCost) {
    const totalCost = (foodCost + drinkCost) * guests;
    return `The total cost for ${guests} guests is $${totalCost}.`;
}
