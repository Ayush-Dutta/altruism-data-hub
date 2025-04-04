
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SchoolsSection = () => {
  const navigate = useNavigate();
  
  const schools = [
    {
      name: 'Bright Future School',
      location: 'Urban District',
      students: 120,
      description: 'A primary school focusing on fundamental education for children from low-income families.',
    },
    {
      name: 'Hope Academy',
      location: 'Rural Region',
      students: 85,
      description: 'Providing education opportunities for children in remote villages with limited access.',
    },
    {
      name: 'Rising Stars Institute',
      location: 'Suburban Area',
      students: 150,
      description: 'A comprehensive school offering both academic and vocational training for holistic development.',
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Schools</h2>
            <p className="text-gray-600 max-w-2xl">
              We support multiple schools across different regions, each with unique needs and programs tailored to their communities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {schools.map((school, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-40 bg-gradient-to-r from-primary-100 to-primary-50 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-primary">{school.name}</h3>
              </div>
              <div className="p-6">
                <div className="flex justify-between mb-4">
                  <span className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{school.location}</span>
                  <span className="text-sm bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full">{school.students} Students</span>
                </div>
                <p className="text-gray-600 mb-4">{school.description}</p>
                <button 
                  className="flex items-center text-primary hover:text-primary-700 transition-colors font-medium"
                  onClick={() => navigate('/about')}
                >
                  Learn more <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolsSection;
