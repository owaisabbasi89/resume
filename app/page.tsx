import Head from 'next/head';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const UnderConstruction = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <Head>
        <title>Under Construction</title>
      </Head>
      <div className="text-center text-gray-800">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 shadow-xl p-4 rounded-lg bg-gray-200">
          Under Construction
        </h1>
        <div className="flex justify-center space-x-4">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/owaisabbasi89" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 w-8 h-8" />
          </a>
          {/* Twitter */}
          <a href="https://twitter.com/owaisabbasi89" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-blue-400 w-8 h-8" />
          </a>
          {/* Facebook */}
          <a href="https://www.facebook.com/owaisabbasi89" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-800 w-8 h-8" />
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/owaisabbasi89" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-600 w-8 h-8" />
          </a>
          {/* GitHub */}
          <a href="https://github.com/owaisabbasi89" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-800 w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
