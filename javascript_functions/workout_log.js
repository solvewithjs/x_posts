function calculateTotalWeight(exercises) {
    return exercises.reduce((total, exercise) => total + (exercise.weight * exercise.reps), 0);
}
