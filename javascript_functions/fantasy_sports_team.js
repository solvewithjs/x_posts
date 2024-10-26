function calculateTotalPoints(players) {
    return players.reduce((total, player) => total + player.points, 0);
}
