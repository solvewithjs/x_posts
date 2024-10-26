function organizeShoppingList(items) {
    const categorized = {};
    items.forEach(item => {
        const category = item.category;
        if (!categorized[category]) {
            categorized[category] = [];
        }
        categorized[category].push(item.name);
    });
    return categorized;
}
