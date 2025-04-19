'use client';

import NavigationSidebar from '../components/Navbar/NavigationSidebar';
import Header from '../components/Page/Header';
import { Briefcase } from 'lucide-react';
import Experiences from '../components/Page/Experiences';

const ExperiencesPage = () => {
  return (
    <div className="flex">
      <NavigationSidebar />

      <main className="p-8 w-full">
        <Header
          icon={<Briefcase />}
          title="My Experiences"
          subtitle="Where I've Worked"
          gradient={false}
        />
        <Experiences />
      </main>
    </div>
  );
};

export default ExperiencesPage;
