import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="p-4 md:p-8">
      {/* Placeholder content for header */}
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Header - Your Company Name</h1>
      <nav className="mt-2 md:mt-4">
        <ul className="flex flex-col md:flex-row">
          <li className="mr-0 md:mr-4 mb-2 md:mb-0"><a href="#" className="hover:underline">Link 1</a></li>
          <li className="mr-0 md:mr-4 mb-2 md:mb-0"><a href="#" className="hover:underline">Link 2</a></li>
          <li><a href="#" className="hover:underline">Link 3</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
