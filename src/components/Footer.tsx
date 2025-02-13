import React from 'react';

const Footer = () => {
  return (
    <footer className="nature-gradient py-12 px-6">
      <div className="container mx-auto text-center opacity-75">
        <p className="mb-4">🌍 Combining 5000 Years of Wisdom with Modern Science 🌍</p>
        <p>© {new Date().getFullYear()} Heal Easy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;