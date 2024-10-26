function matchPets(adopters, pets) {
    return adopters.map(adopter => {
        const matchedPet = pets.find(pet => pet.type === adopter.preferredPetType);
        return matchedPet ? `${adopter.name} could adopt ${matchedPet.name}.` : `${adopter.name} has no matching pets.`;
    });
}
