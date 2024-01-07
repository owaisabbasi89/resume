// components/SocialIcons.tsx
import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { IoLogoTiktok, IoLogoYoutube } from 'react-icons/io5'; // Assuming these icons exist in react-icons/io5

const handle = 'owaisabbasi89';

const SocialIcons: React.FC = () => {
  return (
    <div className="flex flex-col items-center my-8">
      {/* Top row */}
      <div className="flex justify-center space-x-8 mb-4">
        <a href={`https://www.linkedin.com/in/${handle}`} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-500 hover:text-blue-400 text-3xl md:text-4xl" />
        </a>
        {/* 
        <a href={`https://www.facebook.com/${handle}`} target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-blue-500 hover:text-blue-400 text-3xl md:text-4xl" />
        </a>
        <a href={`https://twitter.com/${handle}`} target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-blue-500 hover:text-blue-400 text-3xl md:text-4xl" />
        </a>
        <a href={`https://www.instagram.com/${handle}`} target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-500 hover:text-pink-400 text-3xl md:text-4xl" />
        </a>
        */}
      </div>
      {/* Bottom row */}
      <div className="flex justify-center space-x-8">
        {/* 
        <a href={`https://www.tiktok.com/@${handle}`} target="_blank" rel="noopener noreferrer">
          <IoLogoTiktok className="text-black hover:text-red-500 text-3xl md:text-4xl" />
        </a>
        <a href={`https://www.youtube.com/@${handle}`} target="_blank" rel="noopener noreferrer">
          <IoLogoYoutube className="text-red-500 hover:text-red-400 text-3xl md:text-4xl" />
        </a>
        */}
        <a href={`https://github.com/${handle}`} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-600 hover:text-gray-800 text-3xl md:text-4xl" />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
