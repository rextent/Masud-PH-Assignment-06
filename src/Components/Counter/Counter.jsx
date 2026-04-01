import React from 'react';

const Counter = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-10'>
            <div className='max-w-[1000px] mx-auto flex justify-between'>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-7xl font-bold text-white'>50K</h2>
                    <p className='text-2xl font-semibold text-gray-300'>Active Users</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-7xl font-bold text-white'>200+</h2>
                    <p className='text-2xl font-semibold text-gray-300'>Premium Tools</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-7xl font-bold text-white'>4.9</h2>
                    <p className='text-2xl font-semibold text-gray-300'>Rating</p>
                </div>
                
            </div>
        </div>
    );
};

export default Counter;