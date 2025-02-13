import React from 'react';

interface ProgramCardProps {
  success: number;
  emoji: string;
  title: string;
  description: string;
  duration: string;
  healed: number;
  progress: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  success,
  emoji,
  title,
  description,
  duration,
  healed,
  progress
}) => {
  return (
    <div className="relative bg-gradient-to-br from-green-900/80 to-black p-8 rounded-2xl transition-all duration-300 course-card">
      <div className="flex justify-between items-start mb-6">
        <div className="bg-green-900 px-4 py-1 rounded-full text-sm">{success}% Success</div>
        <div className="text-2xl">{emoji}</div>
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="opacity-80 mb-6">{description}</p>
      <div className="h-1 bg-green-900 mb-4 rounded-full">
        <div 
          className="h-1 bg-green-500 rounded-full" 
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between text-sm opacity-75 mb-6">
        <span>{duration}</span>
        <span>{healed.toLocaleString()}+ Healed</span>
      </div>
      <button className="course-cta w-full bg-green-600 py-3 rounded-lg transition-transform">
        Start Free Trial
      </button>
    </div>
  );
};

export default ProgramCard;