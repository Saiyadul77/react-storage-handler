import React, { useEffect, useState } from 'react';
import { add, divide } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
// import add from '../../utilities/calculate';

const Cosmetics = () => {
    const first = 50;
    const second = 30;
    const total = add(first, second)
    const result = divide(first, second)
    /* const products =
        [
            {
                "id": "6238899141de712804827b25",
                "name": "Ericka Booth",
                "phone": "+1 (922) 401-3839"
            },
            {
                "id": "62388991c14f1ac3700452a7",
                "name": "Johnson Melton",
                "phone": "+1 (964) 524-2418"
            },
            {
                "id": "62388991eef06a70a4ffb806",
                "name": "Wilcox Jimenez",
                "phone": "+1 (831) 448-3960"
            },
            {
                "id": "62388991633c841a64ced182",
                "name": "Stewart Herring",
                "phone": "+1 (869) 578-2662"
            },
            {
                "id": "62388991ac7045f989855d56",
                "name": "Fay Kerr",
                "phone": "+1 (802) 526-2944"
            },
            {
                "id": "62388991264c0e26ce9cf715",
                "name": "Janis Byers",
                "phone": "+1 (821) 529-2005"
            },
            {
                "id": "62388991f8b812f2f440835e",
                "name": "Stacie Malone",
                "phone": "+1 (965) 537-2629"
            }
        ] */
    // { id: 1, name: 'alta', price: '200', quantity: 2 },
    // { id: 2, name: 'malis', price: '300', quantity: 5 },
    // { id: 3, name: 'palis', price: '400', quantity: 1 },
    // { id: 4, name: 'nalis', price: '500', quantity: 1 },
    // { id: 5, name: 'ibro', price: '600', quantity: 1 },
    // { id: 6, name: 'icleaner', price: '700', quantity: 1 },
    // { id: 7, name: 'leap', price: '800', quantity: 1 },
    // { id: 8, name: 'hear', price: '900', quantity: 1 },
    // { id: 9, name: 'shoulder', price: '1000', quantity: 1 },
    // { id: 10, name: 'yellow', price: '1100', quantity: 1 }
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h1>Welcome to Cosmetics</h1>
            <h5>Addition: {total}</h5>
            <h3>Divition: {result}</h3>
            {
                products.map(product => <Cosmetic product={product}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;