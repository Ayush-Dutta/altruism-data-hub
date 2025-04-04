
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import MissionSection from '@/components/home/MissionSection';
import SchoolsSection from '@/components/home/SchoolsSection';
import ImpactSection from '@/components/home/ImpactSection';
import DonateCallout from '@/components/home/DonateCallout';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MissionSection />
      <SchoolsSection />
      <ImpactSection />
      <DonateCallout />
    </Layout>
  );
};

export default Index;
