import React from "react";
import SocialIcons from "./SocialIcons"; // Adjust the path based on your project structure

const Resume: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center text-black px-4 md:px-8 text-slate-400">
      {/* Main content */}
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-8 mb-4">
        Owais Abbasi
      </h1>
      <p className="text-lg md:text-xl font-semibold mb-6">Data Engineer</p>
      <nav className="mb-8">
        <ul className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <li>
            <a href="#portfolio" className="hover:text-gray-900">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-900">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <section id="contact" className="mb-8">
        <SocialIcons />
      </section>

      {/* Data Engineering section remains unchanged */}
    </main>
  );
};

export default Resume;
