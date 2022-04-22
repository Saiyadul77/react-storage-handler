import React from 'react';
import { multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 10;
    const second = 30;
    const result = multiply(first, second);
    return (
        <div>
            <h1>Result: {result}</h1>
        </div>
    );
};

export default Shoes;