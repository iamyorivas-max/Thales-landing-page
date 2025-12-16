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
          <svg viewBox="0 0 220 54" className="h-10 md:h-12 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="34" fontSize="32" fontWeight="bold" fontFamily="sans-serif" fill="#0068b3" letterSpacing="-1">TH</text>
            
            {/* Stylized A */}
            <path d="M53 34 L62 8 L71 34" stroke="#00aeef" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M56 26 L68 26" stroke="#0068b3" strokeWidth="3" strokeLinecap="round"/>
            
            <text x="74" y="34" fontSize="32" fontWeight="bold" fontFamily="sans-serif" fill="#0068b3" letterSpacing="-1">LES</text>
            
            <text x="2" y="50" fontSize="11" fontWeight="500" fontFamily="sans-serif" fill="#0068b3" letterSpacing="0.28em" className="uppercase">Informatique</text>
          </svg>
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
            href="tel:+212522548780" 
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