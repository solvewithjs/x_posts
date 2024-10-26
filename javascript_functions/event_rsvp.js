function trackRSVPs(rsvps) {
    const counts = { yes: 0, no: 0 };
    rsvps.forEach(response => {
        counts[response] += 1;
    });
    return `Yes: ${counts.yes}, No: ${counts.no}`;
}
