function rankParticipants(participants) {
    return participants.sort((a, b) => b.steps - a.steps);
}
