
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Empowering Through <span className="text-primary">Education</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              We support underprivileged children across multiple schools with quality education, resources, and opportunities for a brighter future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-600 rounded-full px-8 text-white"
                onClick={() => navigate('/donate')}
              >
                Donate Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary-50"
                onClick={() => navigate('/about')}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full"></div>
              <div className="relative bg-white p-3 rounded-lg shadow-lg">
                <div className="w-full h-64 md:h-80 bg-gray-200 rounded overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center text-white text-center p-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-3">Helping 1000+ children</h2>
                      <p>Across 12 schools in underserved communities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '12+', label: 'Schools Supported' },
            { number: '1000+', label: 'Children Helped' },
            { number: '94%', label: 'Funds to Programs' },
            { number: '15+', label: 'Years of Impact' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
