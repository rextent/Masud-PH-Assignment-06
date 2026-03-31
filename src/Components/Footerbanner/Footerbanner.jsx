import React from 'react';
import { CiPlay1 } from "react-icons/ci";

const Footerbanner = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-10'>
            <div className='flex flex-col max-w-[1200px] mx-auto items-center justify-between py-20 space-y-5 text-white'>
                <h2 className='text-6xl font-bold'>Ready to Transform Your Workflow?</h2>
                <p className='text-center text-lg'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
                
                <div className='flex gap-5 justify-center'>
                    <button className='bg-white p-3 rounded-full font-semibold text-[#4F39F6]'><a href="">Explore Products</a></button>
                    <button className='px-6 rounded-full border 1px solid'> Watch Demo</button>
                </div>

            </div>
        </div>
    );
};

export default Footerbanner;