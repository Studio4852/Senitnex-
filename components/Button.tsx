import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  variant = 'primary', 
  onClick, 
  className = '',
  type = 'button',
  icon
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed tracking-wide text-sm";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light shadow-lg shadow-primary/20 hover:shadow-primary/30 focus:ring-primary",
    secondary: "bg-secondary text-white hover:bg-secondary-dark shadow-lg shadow-secondary/20 hover:shadow-secondary/30 focus:ring-secondary",
    outline: "border-2 border-gray-200 text-primary bg-transparent hover:border-primary hover:bg-primary/5 focus:ring-primary",
    ghost: "text-primary hover:bg-gray-100 focus:ring-gray-200"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  );
};

export default Button;