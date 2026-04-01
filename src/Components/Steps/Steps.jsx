import React from 'react';

const Steps = () => {
    return (
        <div className='w-full bg-gray-50'>
            <div className='max-w-[1200px] mx-auto px-4 py-10 md:py-16 text-center space-y-6'>
                <h2 className='text-2xl md:text-4xl lg:text-6xl font-bold'>Get Started In 3 Steps</h2>
                <p className='text-center text-lg'>Start using premium digital tools in minutes, not hours.</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8'>
                    <div className='bg-white shadow-sm p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 relative aspect-square hover:shadow-md transition'>
                        <p className='absolute top-3 right-3 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] w-8 h-8 flex items-center justify-center rounded-full text-white text-xs'>01</p>
                        <img className='w-10 h-10' src="../../assets/user.png" alt="" />
                        <h3 className='text-xl md:text-2xl font-bold'>Create Account</h3>
                        <p className='text-md text-center text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className='bg-white shadow-sm p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 relative aspect-square hover:shadow-md transition'>
                        <p className='absolute top-3 right-3 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] w-8 h-8 flex items-center justify-center rounded-full text-white text-xs'>02</p>
                        <img className='w-10 h-10' src="../../assets/package.png" alt="" />
                        <h3 className='text-xl md:text-2xl font-bold'>Choose Products</h3>
                        <p className='text-md text-center text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                    <div className='bg-white shadow-sm p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 relative aspect-square hover:shadow-md transition'>
                        <p className='absolute top-3 right-3 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] w-8 h-8 flex items-center justify-center rounded-full text-white text-xs'>03</p>
                        <img className='w-10 h-10' src="../../assets/rocket.png" alt="" />
                        <h3 className='text-xl md:text-2xl font-bold'>Start Creating</h3>
                        <p className='text-md text-center text-[#627382]'>Download and start using your premium  tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;