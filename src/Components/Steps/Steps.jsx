import React from 'react';

const Steps = () => {
    return (
        <div className='w-full bg-gray-50'>
            <div className='flex flex-col items-center justify-between py-4  max-w-[1200px] mx-auto space-y-5 py-14'>
                <h2 className='text-6xl font-bold'>Get Started In 3 Steps</h2>
                <p className='text-center text-lg'>Start using premium digital tools in minutes, not hours.</p>
                <div className='flex gap-10'>
                    <div className='bg-white shadow-sm p-5 flex flex-col flex items-center justify-center rounded-2xl space-y-5 relative aspect-square'>
                        <p className='absolute top-3 right-3 flex items-center justify-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full h-7 w-7 text-white text-xs'>01</p>
                        <img className='w-15 h-15' src="../../assets/user.png" alt="" />
                        <h3 className='text-3xl font-bold'>Create Account</h3>
                        <p className='text-md text-center text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className='bg-white shadow-sm p-5 flex flex-col flex items-center justify-center rounded-2xl space-y-5 relative aspect-square'>
                        <p className='absolute top-3 right-3 flex items-center justify-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full h-7 w-7 text-white text-xs'>02</p>
                        <img className='w-15 h-15' src="../../assets/package.png" alt="" />
                        <h3 className='text-3xl font-bold'>Choose Products</h3>
                        <p className='text-md text-center text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                    <div className='bg-white shadow-sm p-5 flex flex-col flex items-center justify-center rounded-2xl space-y-5 relative aspect-square'>
                        <p className='absolute top-3 right-3 flex items-center justify-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full h-7 w-7 text-white text-xs'>03</p>
                        <img className='w-15 h-15' src="../../assets/rocket.png" alt="" />
                        <h3 className='text-3xl font-bold'>Start Creating</h3>
                        <p className='text-md text-center text-[#627382]'>Download and start using your premium  tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;