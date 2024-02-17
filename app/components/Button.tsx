import React from "react";

interface ButtonProps {
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  children: React.ReactNode; // Adding children prop
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = "button",
  className = "",
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-block px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
