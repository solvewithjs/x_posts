function trackScores(players) {
    return players.reduce((scores, player) => {
        scores[player.name] = (scores[player.name] || 0) + player.score;
        return scores;
    }, {});
}
