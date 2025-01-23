import { Search, ShoppingCart } from "lucide-react";
import React from "react";

const Nav = () => {
  return (
    <nav className="bg-zinc-950 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-blue-500">
            Imageiscribe
          </a>
        </div>

        <div className="hidden md:flex space-x-6">
          <a
            href="/products"
            className="hover:text-blue-500 transition duration-200"
          >
            Products
          </a>
          <a
            href="/pricing"
            className="hover:text-blue-500 transition duration-200"
          >
            Pricing
          </a>
          <a
            href="/docs"
            className="hover:text-blue-500 transition duration-200"
          >
            Docs
          </a>
          <a
            href="/contact"
            className="hover:text-blue-500 transition duration-200"
          >
            Contact
          </a>
        </div>

        
        <div className="hidden md:flex space-x-4">
          <a
            href="/signin"
            className="bg-transparent border border-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition duration-200"
          >
            <ShoppingCart/>
          </a>
          <a
            href="/signup"
            className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition duration-200"
          >
            <Search/>
          </a>
        </div>

        
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
