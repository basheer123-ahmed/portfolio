import React from 'react';
import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="py-12 relative z-10 border-t border-slate-100 bg-white">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-500 flex items-center justify-center gap-2 font-display uppercase tracking-widest text-xs font-bold">
          Built with <FiHeart className="text-red-500 fill-red-500" /> by 
          <span className="text-[#0f172a] font-black">Basheer Ahmed</span> 
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
