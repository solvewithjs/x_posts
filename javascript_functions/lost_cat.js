function findLostCat(hidingSpots) {
    for (let spot of hidingSpots) {
        if (spot.isSafe) { 
            return `The cat is likely hiding in: ${spot.name}`;
        }
    }
    return "The cat could not be found in any spots.";
}
