import React from 'react';

const Counter = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-10'>
            <div className='max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center'>
                <div className='flex flex-col gap-2 items-center'>
                    <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold text-white'>50K</h2>
                    <p className='text-sm md:text-lg text-gray-300'>Active Users</p>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold text-white'>200+</h2>
                    <p className='text-sm md:text-lg text-gray-300'>Premium Tools</p>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold text-white'>4.9</h2>
                    <p className='text-sm md:text-lg text-gray-300'>Rating</p>
                </div>
                
            </div>
        </div>
    );
};

export default Counter;