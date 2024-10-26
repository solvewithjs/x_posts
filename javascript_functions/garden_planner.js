function layoutGarden(plants) {
    return plants.map(plant => `${plant.name} needs ${plant.spacing} feet of space`).join('\n');
}
