import React, { useState } from 'react';

const Cart = ({product}) => {

    const [selectedProduct, setSelectedProduct] = useState([])

    return (
        <div>
            <h2>{product.name}</h2>
        </div>
    );
};

export default Cart;