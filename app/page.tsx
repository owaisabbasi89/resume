// import React from "react";
// import Resume from "./components/Resume";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// const Page: React.FC = () => {
//   return (
//     <div className="flex flex-col min-h-screen text-slate-400 bg-white dark:bg-slate-800">
//       <Header />
//       <Resume />
//       <Footer />
//     </div>
//   );
// };

// export default Page;
"use client";
import React, { useState } from "react";
import Resume from "./components/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FaMoon, FaSun } from "react-icons/fa"; // Import dark and light mode icons

const Page: React.FC = () => {
  // State to manage the current mode (dark or light)
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Function to toggle between dark and light mode
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${
        darkMode ? "bg-slate-800 text-slate-400" : "bg-white text-slate-900"
      }`}
    >
      {/* Dark and light mode icons */}
      {darkMode ? (
        <FaMoon
          className="mx-auto mt-4 text-slate-400 text-2xl cursor-pointer"
          onClick={toggleMode}
        />
      ) : (
        <FaSun
          className="mx-auto mt-4 text-slate-400 text-2xl cursor-pointer"
          onClick={toggleMode}
        />
      )}

      {/* Toggle button */}
      {/* <button
        onClick={toggleMode}
        className="mx-auto mt-4 px-2 py-1 text-sm rounded-md border border-slate-400 text-slate-400 focus:outline-none"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button> */}

      {/* Header, Resume, and Footer components */}
      <Header />
      <Resume />
      <Footer />
    </div>
  );
};

export default Page;
