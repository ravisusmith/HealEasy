import React from 'react';

const Navbar = () => {
  return (
    <nav className="nature-gradient fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center">
          <span className="mr-2">🌿</span>Heal Easy
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#programs" className="hover:text-green-300 transition-colors">Programs</a>
          <a href="#success" className="hover:text-green-300 transition-colors">Success Stories</a>
          <a href="#community" className="hover:text-green-300 transition-colors">Community</a>
          <button className="bg-green-600 px-6 py-2 rounded-full hover:bg-green-700 transition-all">
            Start Healing
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;