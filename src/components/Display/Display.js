import React from 'react';
import { substruct } from '../../utilities/calculate';

const Display = () => {
    const first = 30;
    const second = 20;
    const minus = substruct(first, second)
    return (
        <div>
            <h3>Substruction: {minus}</h3>
        </div>
    );
};

export default Display;