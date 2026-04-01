import React from 'react';
import { FcCheckmark } from "react-icons/fc";


const Productscard = ({ product }) => {
    console.log(product)

    const tagStyles = {
        best: "bg-yellow-100 text-yellow-600",
        popular: "bg-purple-100 text-purple-600",
        new: "bg-green-100 text-green-600",
    };

    return (
        <div>
            <div className='bg-white border border-gray-200 shadow-sm rounded-2xl p-5 space-y-5'>
                <div className='relative'>
                    <p className={` absolute top-1 right-1 px-3 py-1 text-lg rounded-full font-semibold ${tagStyles[product.tagType]}`}>{product.tag}</p>
                </div>
                <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center'>
                    <img src={product.icon} alt="" />
                </div>
                <h3 className='text-2xl font-bold'>{product.name}</h3>
                <p className='text-lg text-[#627382]'>{product.description}</p>
                <p>{product.price}/Mo</p>
                <ul className='space-y-1'>
                    {
                        product.features.map((feature) => (
                            <li className='flex items-center gap-2 text-lg text-[#627382]'><FcCheckmark></FcCheckmark>{feature}</li>
                        )
                        )}

                </ul>
                <div className='flex justify-center'>
                    <button className='cursor-pointer bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-6 py-2 rounded-full font-semibold text-white shadow-md w-full'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Productscard;