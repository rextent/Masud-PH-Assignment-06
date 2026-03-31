import React from 'react';
import banner from "../../assets/banner.png"
import { CiPlay1 } from "react-icons/ci";


const Hero = () => {
    return (
        <div className='flex max-w-[1200px] mx-auto items-center justify-between py-20'>
            <div className='space-y-4 '>
                <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full w-fit">

                    {/* Outer glow */}
                    <div className="relative flex items-center justify-center">
                        <div className="w-4 h-4 bg-purple-400 rounded-full opacity-40 absolute animate-ping"></div>

                        {/* Inner dot */}
                        <div className="w-2.5 h-2.5 bg-purple-600 rounded-full"></div>
                    </div>

                    <p className="text-purple-600 font-medium text-sm">
                        New: AI-Powered Tools Available
                    </p>

                </div>
                <h2 className='text-7xl font-bold'>Supercharge Your <br />Digital Workflow</h2>
                <p className='text-lg'>Access premium AI tools, design assets, templates, and productivity <br />software—all in one place. Start creating faster today. <br /> Explore Products
                </p>
                <div className='flex gap-5 items-center'>
                    <button className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-3 rounded-4xl font-semibold text-white'><a href="">Explore Products</a></button>
                    <button className='btn btn-outline btn-secondary'><CiPlay1/> Watch Demo</button>
                </div>
            </div>

            <div className='flex justify-center items-center'>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Hero;