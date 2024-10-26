function findMovie(preferences) {
    const movieRecommendations = {
        action: "Die Hard",
        comedy: "Superbad",
        drama: "The Shawshank Redemption"
    };
    const matchedMovies = preferences.map(pref => movieRecommendations[pref]).filter(Boolean);
    return matchedMovies.length > 0 ? `You could watch: ${matchedMovies.join(', ')}` : "No movies found.";
}
