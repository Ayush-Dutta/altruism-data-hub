
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ImpactSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Making a Measurable Impact</h2>
            <p className="text-gray-600 mb-6">
              Our transparent approach to management and finance means every donation is tracked and utilized effectively. We believe in accountability and showing our donors exactly how their contributions create change.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Education Programs</span>
                  <span className="text-sm font-medium">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Student Support</span>
                  <span className="text-sm font-medium">15%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-secondary h-2.5 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Administrative Costs</span>
                  <span className="text-sm font-medium">6%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-accent h-2.5 rounded-full" style={{ width: '6%' }}></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Fundraising</span>
                  <span className="text-sm font-medium">4%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-gray-400 h-2.5 rounded-full" style={{ width: '4%' }}></div>
                </div>
              </div>
            </div>
            <Button 
              className="bg-primary hover:bg-primary-600 text-white"
              onClick={() => navigate('/donations')}
            >
              View Donation Tracker
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-primary/10 rounded-lg p-6">
                <h3 className="text-4xl font-bold text-primary mb-2">94%</h3>
                <p className="text-gray-700">Funds directly supporting programs</p>
              </div>
              <div className="bg-accent/10 rounded-lg p-6">
                <h3 className="text-4xl font-bold text-accent mb-2">12</h3>
                <p className="text-gray-700">Partner schools across regions</p>
              </div>
            </div>
            <div className="space-y-6 mt-10">
              <div className="bg-secondary/10 rounded-lg p-6">
                <h3 className="text-4xl font-bold text-secondary mb-2">1000+</h3>
                <p className="text-gray-700">Students receiving support</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-4xl font-bold text-gray-800 mb-2">87%</h3>
                <p className="text-gray-700">Graduation rate increase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
