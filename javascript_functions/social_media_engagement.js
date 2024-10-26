function calculateEngagement(likes, comments, shares) {
    const totalEngagement = likes + comments + shares;
    return `Engagement rate: ${((totalEngagement / (likes + shares + comments)) * 100).toFixed(2)}%`;
}
