import React, { use, useState } from 'react';
import Productscard from '../ProductsCard/Productscard';
import Cart from '../Cart/Cart';

const Toolsbar = ({ productPromise, setCartAmount, cartAmount }) => {
    const products = use(productPromise)
    // console.log(products)

    const [activeButton, setActiveButton] = useState('products')

    const [selectedProduct, setSelectedProduct] = useState([])

    return (
        <div className='max-w-[1200px] mx-auto px-4 py-10 md:py-20 space-y-6'>
            <h2 className='text-2xl md:text-4xl lg:text-6xl font-bold text-center'>Premium Digital Tools</h2>
            <p className='text-center text-lg text-[#627382]'>Choose from our curated collection of premium digital products designed <br />  to boost your productivity and creativity.</p>

            <div className='flex justify-center'>
                <div className='flex items-center bg-gray-100 rounded-full p-1'>
                    <button onClick={() => setActiveButton("products")} className={`${activeButton === "products" ? "cursor-pointer bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-6 py-2 rounded-full font-semibold text-white shadow-md" : "cursor-pointer px-6 py-2 rounded-full text-gray-600 font-medium"} `}>Products</button>

                    <button onClick={() => setActiveButton("cart")} className={`${activeButton === "cart" ? "cursor-pointer bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-6 py-2 rounded-full font-semibold text-white shadow-md" : "cursor-pointer px-6 py-2 rounded-full text-gray-600 font-medium"} `}>Cart <span>{selectedProduct.length}</span></button>
                </div>
            </div>
            {
                activeButton === "products" ?
                    (<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                        {
                            products.map(product => <Productscard setCartAmount={setCartAmount} cartAmount={cartAmount} key={product.id} product={product} setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct}></Productscard>)
                        }
                    </div>) :
                    (<div className='w-full border border-gray-200 rounded-2xl p-4 md:p-8 flex flex-col gap-5'>
                        <h3>Your Cart</h3>
                        {
                            <Cart selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} setCartAmount={setCartAmount} cartAmount={cartAmount}></Cart>
                        }
                    </div>)
            }

            {/* <div className='grid grid-cols-3 gap-5'>
                {
                    products.map(product => <Productscard setCartAmount={setCartAmount} cartAmount={cartAmount} key={product.id} product={product}></Productscard>)
                }
            </div> */}
        </div>
    );
};

export default Toolsbar;