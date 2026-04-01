import React from 'react';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




const Footer = () => {
    return (
        <div className='bg-[#101727] px-4 py-12 md:py-16'>
            <div className='max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-white'>
                <div className='space-y-3'>
                    <h2 className='text-3xl font-bold'>DigiTools</h2>
                    <p className='text-gray-400 text-sm max-w-[300px]'>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                </div>

                <div className='space-y-3'>
                    <h3 className='text-2xl font-bold'>Product</h3>
                    <ul className='space-y-3'>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Template</li>
                        <li>Integrations</li>
                    </ul>
                </div>

                <div className='space-y-3'>
                    <h3 className='text-2xl font-bold'>Product</h3>
                    <ul className='space-y-3'>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Template</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div className='space-y-3'>
                    <h3 className='text-2xl font-bold'>Product</h3>
                    <ul className='space-y-3'>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Template</li>
                        <li>Integrations</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-4'>
                    <h2>Social Links</h2>
                    <div className='flex gap-3'>
                        <FaSquareInstagram className='w-9 h-9 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer'/>
                        <FaFacebookSquare className='w-9 h-9 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer' />
                        <FaXTwitter className='w-9 h-9 bg-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer'/>
                    </div>
                </div>

            </div>
            <div className='max-w-[1200px] py-20 space-y-5 text-white mx-auto'>
                <div className="divider before:bg-gray-400 after:bg-gray-400 text-gray-400"></div>
                <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm'>
                    <div>
                        <p>© 2026 Digitools. All rights reserved.</p>
                    </div>
                    <div className='flex gap-5'>
                        <a className='hover:text-white transition' href="">Privacy Policy</a>
                        <a className='hover:text-white transition' href="">Terms of Service</a>
                        <a className='hover:text-white transition' href="">Cookies</a>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;