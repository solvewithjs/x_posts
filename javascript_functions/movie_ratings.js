function averageRating(ratings) {
    const total = ratings.reduce((sum, rating) => sum + rating, 0);
    return `Average rating: ${(total / ratings.length).toFixed(2)}`;
}
