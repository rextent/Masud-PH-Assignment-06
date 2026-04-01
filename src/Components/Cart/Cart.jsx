import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';


const Cart = ({ selectedProduct, setSelectedProduct, setCartAmount, cartAmount }) => {

    // console.log(selectedProduct)

    const handleDeleteCartproducts = (product) => {
        toast.warning(`${product.name} removed from the cart`);
        console.log(product)
        const filteredProduct = selectedProduct.filter(selectedProduct => selectedProduct.name !== product.name)
        // console.log(filteredProduct);
        setSelectedProduct(filteredProduct);
        setCartAmount(cartAmount - 1);

    }

    return (
        <div>
            {
                selectedProduct.length === 0 ? (
                    <div className="text-center py-10">
                        <h2 className="text-xl font-semibold">Your cart is empty 🛒</h2>
                        <p>Please add Products </p>
                    </div>
                ) :
                    (selectedProduct.map((product, ind) => {
                        return <div key={ind} className='flex flex-col mb-5'>
                            <div className='flex items-center justify-between  p-5 bg-gray-100 rounded-2xl'>
                                <div className='flex gap-5 justify-center items-center'>
                                    <div>
                                        <img src={product.icon} alt="" />
                                    </div>
                                    <div>
                                        <h3>{product.name}</h3>
                                        <p className='font-bold'>${product.price}</p>
                                    </div>
                                </div>
                                <div className='btn text-red-400' onClick={() => handleDeleteCartproducts(product)}>
                                    <MdDelete />
                                </div>
                            </div>
                        </div>

                    }))

            }
        </div>
    );
};

export default Cart;