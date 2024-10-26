function assignSecretSanta(participants) {
    const assignments = {};
    const shuffled = [...participants].sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < participants.length; i++) {
        assignments[participants[i]] = shuffled[(i + 1) % participants.length]; // Assign next person
    }
    
    return assignments;
}
