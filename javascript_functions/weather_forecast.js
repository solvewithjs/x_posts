function bestPicnicDay(forecasts) {
    const goodDays = forecasts.filter(day => day.weather === 'sunny');
    return goodDays.length > 0 ? `Best day for a picnic: ${goodDays[0].date}` : "No suitable days for a picnic.";
}
