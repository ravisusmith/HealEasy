import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const programs = [
  {
    id: 'diabetes',
    title: "I'm looking to",
    heading: "REVERSE\nDIABETES",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 'gut',
    title: "I'm looking to",
    heading: "HEAL MY\nGUT",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 'weight',
    title: "I want to",
    heading: "LOSE\nWEIGHT",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 'thyroid',
    title: "I'm dealing with",
    heading: "THYROID\nISSUES",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 'pcos',
    title: "I'm managing",
    heading: "PCOS &\nFERTILITY",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1000",
  },
];

const ProgramSelector = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-black py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm uppercase tracking-wider mb-4">BEGIN YOUR JOURNEY</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">A better you</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform your health, reclaim your vitality, and embrace a balanced lifestyle.{' '}
            <span className="text-white">Tell us your goals</span>, and begin your healing journey today.
          </p>
        </div>

        <div className="relative">
          {/* Scroll buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable container */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {programs.map((program) => (
              <div 
                key={program.id}
                className="relative flex-none w-[300px] h-[400px] rounded-2xl overflow-hidden snap-start cursor-pointer group"
              >
                <img 
                  src={program.image} 
                  alt={program.heading}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/90" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <p className="text-sm text-gray-300 mb-2">{program.title}</p>
                  <h3 className="text-3xl font-bold whitespace-pre-line">{program.heading}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Select path button */}
          <div className="text-center mt-12">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors">
              Select path
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSelector;