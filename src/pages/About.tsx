
import React from 'react';
import Layout from '@/components/layout/Layout';
import { CheckCircle2, Users, DollarSign, Calendar, Heart } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About EduCare NGO</h1>
            <p className="text-xl text-gray-600">
              Transforming lives through education and opportunity
            </p>
          </div>
          
          <div className="prose max-w-none mb-16">
            <p className="text-lg mb-6">
              EduCare NGO was established in 2010 with a mission to provide quality education and support to underprivileged children across multiple schools in underserved communities. We believe that education is the most powerful tool to change the world and break the cycle of poverty.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="mb-6">
              A world where every child has access to quality education, regardless of their socioeconomic background, and is empowered to reach their full potential.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="mb-6">
              To support and enhance the educational journey of underprivileged children by providing resources, infrastructure, and holistic development opportunities across multiple schools.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">Our Core Values</h2>
            <ul className="space-y-4 mb-8">
              {[
                {
                  icon: <CheckCircle2 className="text-primary" />,
                  title: 'Integrity',
                  description: 'We operate with transparency, honesty and accountability in all our actions.'
                },
                {
                  icon: <Users className="text-secondary" />,
                  title: 'Inclusivity',
                  description: 'We embrace diversity and ensure equal opportunities for all children.'
                },
                {
                  icon: <Heart className="text-accent" />,
                  title: 'Compassion',
                  description: 'We approach our work with empathy and understanding of each child\'s unique circumstances.'
                },
                {
                  icon: <DollarSign className="text-green-600" />,
                  title: 'Transparency',
                  description: 'We maintain clear and open communication about our finances and operations.'
                },
              ].map((value, index) => (
                <li key={index} className="flex">
                  <div className="mr-3 mt-1">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
            <p className="mb-6">
              Since our inception, we have supported over 1,000 children across 12 schools, providing educational resources, infrastructure improvements, teacher training, and holistic development programs. Our comprehensive approach ensures that students not only receive academic education but also develop life skills necessary for their future success.
            </p>
            
            <div className="bg-primary-50 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-xl mb-3">Key Achievements:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 size={18} className="text-primary mr-2" />
                  Increased graduation rates by 87% in partner schools
                </li>
                <li className="flex items-center">
                  <CheckCircle2 size={18} className="text-primary mr-2" />
                  Renovated facilities in 8 schools to create better learning environments
                </li>
                <li className="flex items-center">
                  <CheckCircle2 size={18} className="text-primary mr-2" />
                  Provided over 500 scholarships to children from extremely low-income families
                </li>
                <li className="flex items-center">
                  <CheckCircle2 size={18} className="text-primary mr-2" />
                  Trained 50+ teachers in modern educational methodologies
                </li>
                <li className="flex items-center">
                  <CheckCircle2 size={18} className="text-primary mr-2" />
                  Established computer labs in 6 schools, bringing digital literacy to underserved areas
                </li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <p className="mb-6">
              Our dedicated team consists of education professionals, social workers, and passionate volunteers who work tirelessly to create positive change in the communities we serve. Led by a board of directors with expertise in education, nonprofit management, and community development, we maintain a lean operational structure to maximize the impact of every donation.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">Financial Transparency</h2>
            <p className="mb-6">
              We are committed to complete transparency in our financial operations. 94% of all donations go directly to our educational programs and student support initiatives, with only 6% allocated to administrative costs and fundraising efforts. Our detailed financial reports are available for public review in our donation tracker.
            </p>
          </div>
          
          <div className="bg-primary-50 rounded-lg p-8 text-center">
            <Calendar size={32} className="text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-3">Our History</h2>
            <div className="space-y-6 mt-6">
              {[
                {
                  year: '2010',
                  title: 'Foundation',
                  description: 'EduCare NGO was established with a focus on improving education in underserved communities.'
                },
                {
                  year: '2012',
                  title: 'First School Partnership',
                  description: 'Launched our first comprehensive school support program with two local schools.'
                },
                {
                  year: '2015',
                  title: 'Expansion',
                  description: 'Expanded operations to 5 schools and introduced scholarship programs for exceptional students.'
                },
                {
                  year: '2018',
                  title: 'Technology Integration',
                  description: 'Launched digital literacy programs and established computer labs in partner schools.'
                },
                {
                  year: '2021',
                  title: 'Regional Growth',
                  description: 'Expanded to 12 schools across multiple regions, reaching over 1,000 students.'
                },
              ].map((event, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/4 font-bold text-xl text-primary">{event.year}</div>
                  <div className="md:w-3/4 text-left">
                    <h3 className="font-semibold text-lg">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
