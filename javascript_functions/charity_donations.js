function calculateTotalDonations(donations) {
    return donations.reduce((total, donation) => total + donation, 0);
}
