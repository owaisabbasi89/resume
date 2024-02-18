"use client";
import React, { useState } from "react";
import Resume from "./components/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FaMoon, FaSun } from "react-icons/fa"; // Import dark and light mode icons

const Page: React.FC = () => {
  // State to manage the current mode (dark or light)
  const [lightMode, setLightMode] = useState<boolean>(false);

  // Function to toggle between dark and light mode
  const toggleMode = () => {
    setLightMode(!lightMode);
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${
        lightMode ? "bg-white text-slate-900" : "bg-slate-800 text-slate-400"
      }`}
    >
      {/* Dark and light mode icons */}
      {lightMode ? (
        <FaSun
          className="mx-auto mt-4 text-slate-400 text-2xl hover:text-orange-300 cursor-pointer"
          onClick={toggleMode}
        />
      ) : (
        <FaMoon
          className="mx-auto mt-4 text-slate-400 text-2xl hover:text-white cursor-pointer"
          onClick={toggleMode}
        />
      )}

      {/* Header, Resume, and Footer components */}
      <Header />
      <Resume />
      <Footer />
    </div>
  );
};

export default Page;

// if want to set default mode to light then use the following code

// "use client";
// import React, { useState } from "react";
// import Resume from "./components/Resume";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import { FaMoon, FaSun } from "react-icons/fa"; // Import dark and light mode icons

// const Page: React.FC = () => {
//   // State to manage the current mode (dark or light)
//   const [darkMode, setDarkMode] = useState<boolean>(false);

//   // Function to toggle between dark and light mode
//   const toggleMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div
//       className={`flex flex-col min-h-screen ${
//         darkMode ? "bg-slate-800 text-slate-400" : "bg-white text-slate-900"
//       }`}
//     >
//       {/* Dark and light mode icons */}
//       {darkMode ? (
//         <FaMoon
//           className="mx-auto mt-4 text-slate-400 text-2xl hover:text-white cursor-pointer"
//           onClick={toggleMode}
//         />
//       ) : (
//         <FaSun
//           className="mx-auto mt-4 text-slate-400 text-2xl hover:text-orange-300 cursor-pointer"
//           onClick={toggleMode}
//         />
//       )}

//       {/* Header, Resume, and Footer components */}
//       <Header />
//       <Resume />
//       <Footer />
//     </div>
//   );
// };

// export default Page;
