function analyzeFeedback(feedbacks) {
    const totalRatings = feedbacks.length;
    const averageRating = feedbacks.reduce((sum, rating) => sum + rating, 0) / totalRatings;
    return `Average feedback rating: ${averageRating.toFixed(2)}`;
}
