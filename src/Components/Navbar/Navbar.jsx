import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Navbar = () => {
    return (
        <div className='shadow-md w-full'>
            <div className='flex items-center justify-between py-4  max-w-[1200px] mx-auto'>
                <h2 className='text-4xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h2>
                <div className=''>
                    <ul className='flex space-x-8'>
                        <li><a href="">Products</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </div>
                <div className='flex space-x-6 items-center'>
                    <div>
                        <CiShoppingCart className='text-2xl'></CiShoppingCart>
                    </div>
                    <a href="">Login</a>
                    <button className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-3 rounded-4xl font-semibold text-white'><a href="">Get Started</a></button>
                </div>
            </div>
        </div>
        
    );
};

export default Navbar;