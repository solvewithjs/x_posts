function manageGiftRegistry(registry, receivedGifts) {
    const updatedRegistry = registry.filter(gift => !receivedGifts.includes(gift));
    return updatedRegistry;
}
