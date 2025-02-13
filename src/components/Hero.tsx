import React from 'react';

const Hero = () => {
  return (
    <section className="nature-gradient min-h-screen pt-32 px-6 pb-24">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          Your Journey to Health<br />
          <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Starts Here
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
          42,000+ success stories in reversing chronic conditions through our blend of<br />
          ancient Ayurvedic wisdom and modern medical science
        </p>
      </div>
    </section>
  );
};

export default Hero;