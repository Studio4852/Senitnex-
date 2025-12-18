import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'dark' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-primary';
  const iconColor = variant === 'light' ? 'bg-white/20' : 'bg-primary/10';
  const iconStroke = variant === 'light' ? 'white' : 'currentColor';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Placeholder Icon */}
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconColor} flex-shrink-0 border border-current/10`}>
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke={iconStroke} 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
      
      {/* Placeholder Text */}
      <div className="flex flex-col">
        <span className={`text-2xl font-black tracking-tight leading-none ${textColor}`}>
          SentiNEX
        </span>
        <span className={`text-[10px] font-bold uppercase tracking-[0.2em] leading-tight mt-1 opacity-60 ${textColor}`}>
          Platform
        </span>
      </div>
    </div>
  );
};

export default Logo;