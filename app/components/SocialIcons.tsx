// components/SocialIcons.tsx
import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
// import { IoLogoTiktok, IoLogoYoutube } from 'react-icons/io5';
const handle = "owaisabbasi89";

const SocialIcons: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center my-4 md:my-8">
      <a
        href={`https://www.linkedin.com/in/${handle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-300 text-2xl md:text-3xl mx-2 my-2 md:mx-4 md:my-0"
      >
        <FaLinkedin />
      </a>
      {/* <a href={`https://www.facebook.com/${handle}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 text-2xl md:text-3xl mx-2 my-2 md:mx-4 md:my-0">
        <FaFacebook />
      </a>
      <a href={`https://twitter.com/${handle}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 text-2xl md:text-3xl mx-2 my-2 md:mx-4 md:my-0">
        <FaTwitter />
      </a>
      <a href={`https://www.instagram.com/${handle}`} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 text-2xl md:text-3xl mx-2 my-2 md:mx-4 md:my-0">
        <FaInstagram />
      </a>
      <a href={`https://www.tiktok.com/@${handle}`} target="_blank" rel="noopener noreferrer" className="text-black hover:text-red-500 text-2xl md:text-3xl mx-2 my-2 md:mx-4 md:my-0">
        <IoLogoTiktok />
      </a>
      <a href={`https://www.youtube.com/@${handle}`} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 text-2xl md:text-3xl mx-2 my-2 md:mx-4 md:my-0">
        <IoLogoYoutube />
      </a> */}
      <a
        href={`https://github.com/${handle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-300 text-2xl md:text-3xl mx-2 my-2 md:mx-4 md:my-0"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialIcons;
