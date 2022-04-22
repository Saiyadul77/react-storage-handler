const addToCartDb = id => {
    const quantity = localStorage.getItem(id);
    if (quantity) {
        console.log('already exist')
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity);
    }
    else {
        console.log('newItem')
        localStorage.setItem(id, 1)
    }


}

export { addToCartDb }