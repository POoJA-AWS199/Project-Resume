
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Summary from './components/Summary';
import CloudSkills from './components/CloudSkills';
import ExperienceTimeline from './components/ExperienceTimeline';
import EducationCertifications from './components/EducationCertifications';
import SkillsGrid from './components/SkillsGrid';
import ContactFooter from './components/ContactFooter';
import WhyHireMe from './components/WhyHireMe';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <main>
        <Stats />
        <Summary />
        <CloudSkills />
        <WhyHireMe />
        <ExperienceTimeline />
        <EducationCertifications />
        <SkillsGrid />
      </main>
      <ContactFooter />
    </div>
  );
};

export default App;
