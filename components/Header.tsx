import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '#solutions' },
    { name: 'Secteurs', href: '#secteurs' },
    { name: 'À propos', href: '#trust' },
    { name: 'Contact', href: '#contact' },
  ];

  // Custom Logo Component to match the image provided
  const ThalesLogo = () => (
    <div className="flex flex-col select-none">
      <div className="flex items-baseline">
        <span className="text-2xl md:text-3xl font-bold text-thales-700 tracking-tight" style={{ fontFamily: 'Arial, sans-serif' }}>TH</span>
        {/* Stylized 'A' Triangle representation */}
        <div className="relative mx-[1px] w-[18px] md:w-[22px] h-[24px] md:h-[30px] flex items-end justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full text-thales-500 fill-current">
                <path d="M50 5 L95 95 L75 95 L50 35 L25 95 L5 95 Z" />
                <path d="M35 70 L65 70 L60 80 L40 80 Z" fill="white" /> 
            </svg>
        </div>
        <span className="text-2xl md:text-3xl font-bold text-thales-700 tracking-tight" style={{ fontFamily: 'Arial, sans-serif' }}>LES</span>
      </div>
      <span className="text-[10px] md:text-xs text-thales-700 font-medium tracking-[0.2em] -mt-1 uppercase text-justify w-full flex justify-between">
        <span>I</span><span>N</span><span>F</span><span>O</span><span>R</span><span>M</span><span>A</span><span>T</span><span>I</span><span>Q</span><span>U</span><span>E</span>
      </span>
    </div>
  );

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white shadow-md border-gray-200 py-2' 
          : 'bg-white/95 backdrop-blur-sm border-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <ThalesLogo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-thales-700 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="tel:+212500000000" 
            className="flex items-center gap-2 text-slate-600 hover:text-thales-700 text-sm font-medium"
          >
            <Phone size={16} />
            <span>+212 5 22 00 00 00</span>
          </a>
          <a 
            href="#contact" 
            className="bg-thales-700 hover:bg-thales-500 text-white px-5 py-2.5 rounded-md text-sm font-bold transition-all shadow-lg hover:shadow-xl uppercase tracking-wide"
          >
            Diagnostic Gratuit
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-slate-700 py-2 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-thales-700 text-white text-center py-3 rounded-md font-bold mt-2 uppercase"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Demander un diagnostic
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;