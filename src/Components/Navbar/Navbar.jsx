import React, { useState } from "react";
import { CiShoppingCart, CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Navbar = ({ cartAmount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="shadow-sm bg-white w-full sticky top-0 z-50">
      <div className="flex items-center justify-between py-3 max-w-[1200px] mx-auto px-4">

        {/* Logo */}
        <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
          DigiTools
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="">Products</a></li>
          <li><a href="">Features</a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">Testimonials</a></li>
          <li><a href="">FAQ</a></li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center space-x-4 md:space-x-6">

          {/* Cart */}
          <div className="relative">
            <CiShoppingCart className="text-2xl" />
            <p className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartAmount}
            </p>
          </div>

          {/* Login */}
          <a href="" className="hidden md:block">Login</a>

          {/* Button */}
          <button className="hidden md:block bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-4 py-2 rounded-xl text-white font-semibold">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            <CiMenuFries />
          </button>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] bg-white z-50 p-6 transform transition-transform duration-300 
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end mb-6">
          <IoClose size={26} onClick={() => setMenuOpen(false)} />
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col space-y-6 text-lg font-medium">
          <li><a href="">Products</a></li>
          <li><a href="">Features</a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">Testimonials</a></li>
          <li><a href="">FAQ</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;