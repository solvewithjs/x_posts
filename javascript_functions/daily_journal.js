function addEntry(journal, entry) {
    journal.push(entry);
    return journal.sort((a, b) => new Date(a.date) - new Date(b.date));
}
