import React from 'react';
import ProgramCard from './ProgramCard';

const programsData = [
  {
    success: 72,
    emoji: '🩺',
    title: 'Diabetes Freedom',
    description: 'Reverse insulin resistance in 12 weeks',
    duration: '12 Weeks',
    healed: 14329,
    progress: 75
  },
  {
    success: 68,
    emoji: '🌱',
    title: 'Fix Your Gut',
    description: 'Heal digestion in 8 weeks',
    duration: '8 Weeks',
    healed: 9402,
    progress: 66
  },
  {
    success: 82,
    emoji: '🔥',
    title: 'Reverse Acidity',
    description: 'End heartburn in 21 days',
    duration: '3 Weeks',
    healed: 6738,
    progress: 50
  },
  {
    success: 76,
    emoji: '🌸',
    title: 'PCOS & Fertility',
    description: 'Hormonal balance in 6 months',
    duration: '24 Weeks',
    healed: 3219,
    progress: 25
  },
  {
    success: 89,
    emoji: '🏃',
    title: 'Sustainable Weight Loss',
    description: 'Lose 8-12kg in 3 months',
    duration: '12 Weeks',
    healed: 27845,
    progress: 75
  },
  {
    success: 63,
    emoji: '🛡️',
    title: 'Autoimmune Reset',
    description: "Manage Hashimoto's & RA",
    duration: '16 Weeks',
    healed: 4112,
    progress: 50
  }
];

const Programs = () => {
  return (
    <section className="bg-black py-20 px-6" id="programs">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Healing Programs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {programsData.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;