import React from 'react';
import { FcCheckmark } from "react-icons/fc";


const Pricing = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-between py-4  max-w-[1200px] mx-auto space-y-5 pt-10'>
                <h2 className='text-6xl font-bold'>Simple, Transparent Pricing</h2>
                <p className='text-center text-lg'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

                <div className='grid grid-cols-3 justify-between gap-10 max-w-[1120px mx-auto'>

                    <div className='bg-gray-100 shadow-sm p-10 flex flex-col  rounded-2xl space-y-5 h-full'>
                        <div className='my-3'>
                            <p className='text-2xl font-bold'>Starter</p>
                            <p>Perfect for getting started</p>
                        </div>
                        <p><span className='text-xl font-bold'>$0</span> / Month</p>
                        <ul className='flex flex-col gap-2'>
                            <li className='flex items-center gap-3'><FcCheckmark></FcCheckmark> Access to 10 free tools</li>
                            <li className='flex items-center gap-3'><FcCheckmark></FcCheckmark> Basic templates</li>
                            <li className='flex items-center gap-3'> <FcCheckmark></FcCheckmark>Community support</li>
                            <li className='flex items-center gap-3'> <FcCheckmark></FcCheckmark>1 project per month</li>
                        </ul>
                        <button className='mt-auto bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-3 rounded-4xl font-semibold text-white'>Get Started Free</button>
                    </div>

                    <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] shadow-sm p-10  flex flex-col  rounded-2xl space-y-5 h-full text-white '>
                        <div className='my-3'>
                            <p className='text-2xl font-bold'>Pro</p>
                            <p>Best for professionals</p>
                        </div>
                        <p><span className='text-xl font-bold'>$29</span> / Month</p>
                        <ul className='flex flex-col gap-2'>
                            <li className='flex items-center gap-3'><FcCheckmark></FcCheckmark> Access to all premium tools</li>
                            <li className='flex items-center gap-3'><FcCheckmark></FcCheckmark> Unlimited templates</li>
                            <li className='flex items-center gap-3'> <FcCheckmark></FcCheckmark>Priority support</li>
                            <li className='flex items-center gap-3'> <FcCheckmark></FcCheckmark>Unlimited projects</li>
                            <li className='flex items-center gap-3'> <FcCheckmark></FcCheckmark>Cloud sync</li>
                            <li className='flex items-center gap-3'> <FcCheckmark></FcCheckmark>Advanced analytics</li>
                            
                        </ul>
                        <button className='mt-auto bg-white p-3 rounded-4xl font-semibold text-[#4F39F6]'>Get Started Free</button>
                    </div>

                    <div className='bg-gray-100 shadow-sm p-10  flex flex-col rounded-2xl space-y-5 h-full'>
                        <div className='my-3'>
                            <p className='text-2xl font-bold'>Enterprise</p>
                            <p>For teams and business</p>
                        </div>
                        <p><span className='text-xl font-bold'>$99</span> / Month</p>
                        <ul className='flex flex-col gap-2'>
                            <li className='flex items-center gap-3'><FcCheckmark></FcCheckmark> Everything in Pro</li>
                            <li className='flex items-center gap-3'><FcCheckmark></FcCheckmark> Team collaboration</li>
                            <li className='flex items-center gap-3'> <FcCheckmark></FcCheckmark>Custom integrations</li>
                            <li className='flex items-center gap-3'> <FcCheckmark></FcCheckmark>Dedicated support</li>
                            <li className='flex items-center gap-3'> <FcCheckmark></FcCheckmark>SLA guarantee</li>
                            <li className='flex items-center gap-3'> <FcCheckmark></FcCheckmark>Custom branding</li>
                        </ul>
                        <button className='mt-auto bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-3 rounded-4xl font-semibold text-white'>Get Started Free</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Pricing;