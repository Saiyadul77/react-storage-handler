const addToCartDb = id => {
    let shoppingCart;
    //get the shopping cart
    const stored = localStorage.getItem('shopping-cart')
    if (stored) {
        shoppingCart = JSON.parse(stored);
    }
    else {
        shoppingCart = {};
    }
    // add the quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))


}

export { addToCartDb }