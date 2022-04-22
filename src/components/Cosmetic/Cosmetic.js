import React from 'react';
import { addToCartDb } from '../../utilities/FakeDb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const { id, name, phone } = props.product;
    const addToCart = (id) => {
        addToCartDb(id)

    }
    const addToCartWith = () => addToCart(id);
    return (
        <div className='product'>
            <h1>Id: {id}</h1>
            <h2>Name: {name}</h2>
            <h1>Phone: {phone}</h1>
            <button onClick={addToCartWith}>Add to Cart</button>
            <button onClick={() => addToCart(id)}>Purchase</button>
            {/* <h3>Price: {price}</h3> */}
            {/* <h4>Quantity: {quantity}</h4> */}
        </div >
    );
};

export default Cosmetic;