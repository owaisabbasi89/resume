import React from 'react';
import Resume from './components/Resume';
import Header from './components/Header';
import Footer from './components/Footer';

const Page: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-300 to-green-400 bg-pattern-dots">
      <Header />
      <Resume />
      <Footer />
    </div>
  );
};

export default Page;
