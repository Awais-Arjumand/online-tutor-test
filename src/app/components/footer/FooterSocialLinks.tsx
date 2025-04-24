import Link from 'next/link'
import React, { ReactNode } from 'react'

interface FooterSocialLinksProps {
  href: string;
  icon: ReactNode;  
}

export const FooterSocialLinks: React.FC<FooterSocialLinksProps> = ({ href, icon }) => {
  return (
    <Link 
      href={href} 
      className='w-10 h-10 hover:bg-purple-400 transition-all duration-300 bg-primary rounded-full flex justify-center items-center'
      target="_blank" 
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  );
};
