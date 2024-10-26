function recommendBook(genres) {
    const genreCount = {};
    genres.forEach(genre => {
        genreCount[genre] = (genreCount[genre] || 0) + 1;
    });
    const popularGenre = Object.keys(genreCount).reduce((a, b) => genreCount[a] > genreCount[b] ? a : b);
    return `We recommend a book from the ${popularGenre} genre.`;
}
