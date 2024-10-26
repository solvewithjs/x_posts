function calculateCalories(activities) {
    return activities.reduce((total, activity) => total + activity.caloriesBurned, 0);
}
