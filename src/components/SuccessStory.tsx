import React from 'react';

interface SuccessStoryProps {
  image: string;
  quote: string;
  preview: string;
  name: string;
  occupation: string;
  location: string;
}

const SuccessStory: React.FC<SuccessStoryProps> = ({
  image,
  quote,
  preview,
  name,
  occupation,
  location
}) => {
  return (
    <div className="bg-gradient-to-br from-green-900/40 to-black/90 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-white">"{quote}"</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{preview}</p>
        <div className="mt-4">
          <p className="font-semibold text-white">{name}</p>
          <p className="text-sm text-gray-400">{occupation}</p>
          <p className="text-sm text-gray-400">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;