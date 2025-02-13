import React from 'react';
import { ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  return (
    <section className="bg-black py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left side - Images collage */}
        <div className="relative w-full lg:w-1/2 h-[600px]">
          <img 
            src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=500" 
            alt="Success story" 
            className="absolute top-0 left-[10%] w-48 h-48 object-cover rounded-xl shadow-lg transform -rotate-6"
          />
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=500" 
            alt="Success story" 
            className="absolute top-[15%] right-[15%] w-40 h-40 object-cover rounded-xl shadow-lg transform rotate-3"
          />
          <img 
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500" 
            alt="Success story" 
            className="absolute top-[40%] left-[5%] w-44 h-44 object-cover rounded-xl shadow-lg transform rotate-6"
          />
          <img 
            src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&q=80&w=500" 
            alt="Success story" 
            className="absolute bottom-[20%] right-[10%] w-52 h-52 object-cover rounded-xl shadow-lg transform -rotate-3"
          />
          <img 
            src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=500" 
            alt="Success story" 
            className="absolute bottom-[5%] left-[20%] w-48 h-48 object-cover rounded-xl shadow-lg transform rotate-12"
          />
        </div>

        {/* Right side - Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-7xl md:text-8xl font-bold mb-6">23,801</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Case studies of success
          </h3>
          <p className="text-gray-400 text-lg mb-8 max-w-xl">
            Heal Easy has some of the highest success rates in the world at transforming 
            our patients' health. Browse case studies and stories of success from our 
            community.
          </p>
          <button className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors">
            Read stories
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;