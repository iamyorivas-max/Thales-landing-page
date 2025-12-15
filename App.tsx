import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solutions from './components/Solutions';
import TrustSection from './components/TrustSection';
import Sectors from './components/Sectors';
import Certifications from './components/Certifications';
import ContactFormSection from './components/ContactFormSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PainPoints />
        <Solutions />
        <TrustSection />
        <Sectors />
        <Certifications />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;