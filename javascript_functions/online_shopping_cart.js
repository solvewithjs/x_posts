function calculateCartTotal(cart, discountRate, taxRate) {
    const subtotal = cart.reduce((total, item) => total + item.price, 0);
    const discount = subtotal * discountRate;
    const tax = (subtotal - discount) * taxRate;
    return subtotal - discount + tax;
}
