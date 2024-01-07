// Import SocialIcons component
import React from 'react';
import SocialIcons from './components/SocialIcons'; // Adjust the path based on your project structure

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-black px-4 bg-gradient-to-br from-blue-300 to-green-400 bg-pattern-dots">

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-8 mb-4">
        Owais Abbasi
      </h1>
      <p className="text-lg md:text-xl font-semibold mb-6">Data Engineer</p>
      <nav className="mb-8">
        <ul className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <li>
            <a href="#portfolio" className="text-gray-700 hover:text-gray-900">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      
      <section id="contact" className="mb-8">        
        <SocialIcons /> 
      </section>
    </div>
  );
};

export default Resume;
