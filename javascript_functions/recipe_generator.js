function suggestRecipe(availableIngredients, recipes) {
    return recipes.filter(recipe =>
        recipe.ingredients.every(ingredient => availableIngredients.includes(ingredient))
    ).map(recipe => recipe.name);
}
