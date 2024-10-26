function manageTimers(dishes) {
    dishes.forEach(dish => {
        setTimeout(() => {
            console.log(`${dish} is ready!`);
        }, dish.cookingTime);
    });
}
