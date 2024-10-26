function calculateQuizScore(correctAnswers, totalQuestions) {
    return `Your score: ${(correctAnswers / totalQuestions * 100).toFixed(2)}%`;
}
