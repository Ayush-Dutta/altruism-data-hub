
import React from 'react';
import { BookOpen, Heart, School, Users } from 'lucide-react';

const MissionSection = () => {
  const missions = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: 'Quality Education',
      description: 'Providing access to quality educational resources and support for underprivileged children.'
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: 'Community Support',
      description: 'Engaging with local communities to develop sustainable educational frameworks.'
    },
    {
      icon: <School className="h-8 w-8 text-secondary" />,
      title: 'School Management',
      description: 'Supporting multiple schools with infrastructure, teaching resources, and technology.'
    },
    {
      icon: <Heart className="h-8 w-8 text-rose-500" />,
      title: 'Student Welfare',
      description: 'Ensuring the holistic development and well-being of every student in our care.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At EduCare NGO, we are dedicated to creating educational opportunities that transform lives and communities through our comprehensive approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="mb-4">
                {mission.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{mission.title}</h3>
              <p className="text-gray-600">{mission.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
