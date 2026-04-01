import React from 'react';
import { CiPlay1 } from "react-icons/ci";

const Footerbanner = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-12 md:py-20 px-4'>
            <div className='max-w-[1000px] mx-auto text-center text-white space-y-6'>
                <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold leading-tight'>Ready to Transform Your Workflow?</h2>
                <p className='text-sm md:text-lg text-white/80 max-w-[600px] mx-auto'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
                
                <div className='flex flex-col sm:flex-row gap-4 justify-center items-center pt-4'>
                    <button className='bg-white text-[#4F39F6] px-6 py-3 rounded-full font-semibold hover:scale-105 transition'><a href="">Explore Products</a></button>
                    <button className='px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-[#4F39F6] transition'> Watch Demo</button>
                </div>

            </div>
        </div>
    );
};

export default Footerbanner;