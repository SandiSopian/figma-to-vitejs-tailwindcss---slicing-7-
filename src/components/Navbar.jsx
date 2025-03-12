import React from "react";
import { navItems } from "../services/database";

const Navbar = () => {
  const { quoteLogo } = navItems;
  return (
    <nav className="flex fixed top-0 left-0 w-full bg-white/30 backdrop-blur-lg bg-opacity-80 text-white p-4 z-50">
      <div className="flex items-center gap-2">
        <img src={quoteLogo} alt="Logo" className="w-7 sm:w-10 rounded-lg" />
        <h1 className="sm:text-2xl font-bold text-gray-700">Quotes Of The Day</h1>
      </div>
    </nav>
  );
};

export default Navbar;
