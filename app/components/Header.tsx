import React from "react";

const Header: React.FC = () => {
  return (
    <header className="p-4 md:p-8 mx-auto">
      {/* Placeholder content for header */}

      <nav className="mt-2 md:mt-4">
        <ul className="flex flex-col md:flex-row">
          <li className="mr-0 md:mr-4 mb-2 md:mb-0">
            <a href="#" className="hover:underline">
              Blog
            </a>
          </li>

          <li>
            <a
              href="./OWAIS ABBASI - DATA ENGINEER.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline animate-ping font-bold"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
