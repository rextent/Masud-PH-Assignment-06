import React from 'react';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




const Footer = () => {
    return (
        <div className='bg-[#101727] p-10'>
            <div className='flex max-w-[1200px] mx-auto  justify-between py-5 space-y-5 text-white'>
                <div className='space-y-5'>
                    <h2 className='text-3xl font-bold'>DigiTools</h2>
                    <p>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
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

                <div>
                    <h2>Social Links</h2>
                    <div className='flex gap-4'>
                        <FaSquareInstagram />
                        <FaFacebookSquare />
                        <FaXTwitter />
                    </div>
                </div>

            </div>
            <div className='max-w-[1200px] py-20 space-y-5 text-white mx-auto'>
                <div className="divider before:bg-gray-400 after:bg-gray-400 text-gray-400"></div>
                <div className='flex justify-between'>
                    <div>
                        <p>© 2026 Digitools. All rights reserved.</p>
                    </div>
                    <div className='flex gap-5'>
                        <a href="">Privacy Policy</a>
                        <a href="">Terms of Service</a>
                        <a href="">Cookies</a>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;