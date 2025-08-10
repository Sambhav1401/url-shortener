import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-purple-600 text-white">
      <div className=" mx-auto px-4 py-3 flex justify-between items-center">
  
        <h1 className="text-lg font-bold"><Link href="/" className="hover:text-gray-200">BitLinks</Link></h1>

        <div className="flex items-center space-x-6">
          <Link href="/" className="text-white hover:text-gray-200">Home</Link>
          <Link href="/about" className="text-white hover:text-gray-200">About</Link>
          <Link href="/contact" className="text-white hover:text-gray-200">Contact Us</Link>

       
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
