import React, { use } from 'react';
import Productscard from '../ProductsCard/Productscard';

const Toolsbar = ({ productPromise }) => {
    const products = use(productPromise)
    // console.log(products)
    return (
        <div className='flex flex-col max-w-[1200px] mx-auto items-center justify-between py-20 space-y-5'>
            <h2 className='text-6xl font-bold'>Premium Digital Tools</h2>
            <p className='text-center text-lg text-[#627382]'>Choose from our curated collection of premium digital products designed <br />  to boost your productivity and creativity.</p>
            <div className='flex items-center bg-gray-100 rounded-full p-1 w-fit'>
                <button className='cursor-pointer bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-6 py-2 rounded-full font-semibold text-white shadow-md'>Products</button>
                <button className='cursor-pointer px-6 py-2 rounded-full text-gray-600 font-medium'>Cart</button>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {
                    products.map(product => <Productscard key={product.id} product={product}></Productscard>)
                }
            </div>
        </div>
    );
};

export default Toolsbar;