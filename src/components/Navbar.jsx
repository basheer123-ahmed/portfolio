import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-black text-[#0f172a] tracking-tighter font-display"
        >
          BASHEER<span className="text-primary">.</span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-primary transition-all hover:scale-110 font-display"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-900"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-0 h-screen bg-[#0f172a] z-[60] md:hidden flex flex-col justify-center items-center gap-8"
      >
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white"
        >
          <FiX size={24} />
        </button>

        {navLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-black text-white uppercase tracking-widest font-display hover:text-primary transition-colors"
          >
            {link.name}
          </motion.a>
        ))}

        <div className="absolute bottom-10 text-white/40 text-[10px] uppercase tracking-widest font-black">
          Basheer Ahmed &copy; {new Date().getFullYear()}
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
