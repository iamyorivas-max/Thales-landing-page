import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Printer, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  // Custom Logo Component for Footer (White variant)
  const ThalesLogoWhite = () => (
    <div className="flex flex-col select-none">
      <div className="flex items-baseline">
        <span className="text-2xl md:text-3xl font-bold text-white tracking-tight" style={{ fontFamily: 'Arial, sans-serif' }}>TH</span>
        <div className="relative mx-[1px] w-[18px] md:w-[22px] h-[24px] md:h-[30px] flex items-end justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full text-thales-500 fill-current">
                <path d="M50 5 L95 95 L75 95 L50 35 L25 95 L5 95 Z" />
                <path d="M35 70 L65 70 L60 80 L40 80 Z" fill="#002e5d" /> 
            </svg>
        </div>
        <span className="text-2xl md:text-3xl font-bold text-white tracking-tight" style={{ fontFamily: 'Arial, sans-serif' }}>LES</span>
      </div>
      <span className="text-[10px] md:text-xs text-white font-medium tracking-[0.2em] -mt-1 uppercase text-justify w-full flex justify-between opacity-80">
        <span>I</span><span>N</span><span>F</span><span>O</span><span>R</span><span>M</span><span>A</span><span>T</span><span>I</span><span>Q</span><span>U</span><span>E</span>
      </span>
    </div>
  );

  return (
    <footer className="bg-thales-900 text-slate-300 py-12 border-t border-thales-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <ThalesLogoWhite />
            </div>
            <p className="mb-6 max-w-sm text-slate-300">
              Partenaire de confiance des entreprises marocaines depuis 28 ans pour l'intégration ERP, la gestion des infrastructures et la transformation digitale.
            </p>
            <div className="flex gap-3">
               <a href="#" className="w-10 h-10 rounded-full bg-thales-800 flex items-center justify-center hover:bg-thales-500 hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-thales-800 flex items-center justify-center hover:bg-thales-500 hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-thales-800 flex items-center justify-center hover:bg-thales-500 hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-thales-800 flex items-center justify-center hover:bg-thales-500 hover:text-white transition-colors" aria-label="YouTube">
                  <Youtube size={20} />
               </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-thales-500 transition-colors">Sage ERP & Gestion</a></li>
              <li><a href="#" className="hover:text-thales-500 transition-colors">JobRouter BPM</a></li>
              <li><a href="#" className="hover:text-thales-500 transition-colors">Sécurité Kaspersky</a></li>
              <li><a href="#" className="hover:text-thales-500 transition-colors">Virtualisation VMware</a></li>
              <li><a href="#" className="hover:text-thales-500 transition-colors">Cloud Microsoft Azure</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-thales-500 flex-shrink-0" />
                <span>310, rue Omar Riffi.<br/>20120, Casablanca<br/>Maroc.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-thales-500 flex-shrink-0" />
                <a href="tel:+212522548780" className="hover:text-white">Tél : +212 5 22 54 87 80</a>
              </li>
              <li className="flex items-center gap-3">
                <Printer size={18} className="text-thales-500 flex-shrink-0" />
                <span>Fax : +212 5 22 44 65 81</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-thales-500 flex-shrink-0" />
                <a href="mailto:marketing@thales.ma" className="hover:text-white">marketing@thales.ma</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-thales-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Thalès Informatique. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Mentions Légales</a>
            <a href="#" className="hover:text-white">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;