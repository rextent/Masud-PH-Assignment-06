import React from 'react';
import banner from "../../assets/banner.png"
import { CiPlay1 } from "react-icons/ci";


const Hero = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row max-w-[1200px] mx-auto items-center justify-between py-10 md:py-20 px-4'>
            <div className='space-y-4 md:w-[55%] text-center md:text-left'>
                <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full w-fit mx-auto md:mx-0">

                    {/* Outer glow */}
                    <div className="relative flex items-center justify-center">
                        <div className="w-4 h-4 bg-purple-400 rounded-full opacity-40 absolute animate-ping"></div>

                        {/* Inner dot */}
                        <div className="w-2.5 h-2.5 bg-purple-600 rounded-full"></div>
                    </div>

                    <p className="text-purple-600 font-medium text-md">
                        New: AI-Powered Tools Available
                    </p>

                </div>
                <h2 className='text-3xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight max-w-[700px]'>Supercharge Your <br className="hidden md:block" />Digital Workflow</h2>
                <p className='text-sm md:text-lg text-[#627382]'>Access premium AI tools, design assets, templates, and productivity <br />software—all in one place. Start creating faster today. <br /> Explore Products
                </p>
                <div className='flex flex-col sm:flex-row gap-4 items-center md:items-start'>
                    <button className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-6 py-3 rounded-4xl font-semibold text-white'><a href="">Explore Products</a></button>
                    <div className='p-[1px] rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>
                        <button className='flex items-center gap-2 px-6 py-3 rounded-full bg-white font-bold cursor-pointer'><CiPlay1/> <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent flex items-center gap-2'>Watch Demo</span></button>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center md:w-1/2 mt-6 md:mt-0'>
                <img src={banner} className='w-full max-w-[400px] md:max-w-[500px]' alt="" />
            </div>
        </div>
    );
};

export default Hero;