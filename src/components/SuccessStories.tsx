import React from 'react';
import SuccessStory from './SuccessStory';

const successStoriesData = [
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    quote: "The program was life-changing for my diabetes management",
    preview: "It's taken me a while to write this because I wanted to capture how much this program has changed my life. After 6 months, my blood sugar levels are consistently normal, and I've reduced my medication by half.",
    name: "Priya Sharma",
    occupation: "Software Engineer",
    location: "Mumbai, India"
  },
  {
    image: "https://images.unsplash.com/photo-1619946794135-5bc917a27793?auto=format&fit=crop&q=80&w=800",
    quote: "Finally found relief from chronic gut issues",
    preview: "I always believed that I had to live with my digestive issues. The holistic approach and personalized diet plan have completely transformed my gut health. I feel like a new person.",
    name: "Anjali Desai",
    occupation: "Business Consultant",
    location: "Bangalore, India"
  },
  {
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=800",
    quote: "Lost 15kg and gained my confidence back",
    preview: "The sustainable weight loss program taught me how to make lasting lifestyle changes. Not only did I achieve my weight goals, but I've maintained it for over a year now.",
    name: "Meera Patel",
    occupation: "Teacher",
    location: "Delhi, India"
  }
];

const SuccessStories = () => {
  return (
    <section className="bg-black py-20 px-6" id="success">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Stories from India</h2>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Real people, real transformations. Discover how our programs have helped thousands reclaim their health.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {successStoriesData.map((story, index) => (
            <SuccessStory key={index} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;