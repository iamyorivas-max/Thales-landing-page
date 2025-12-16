import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Printer, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-thales-900 text-slate-300 py-12 border-t border-thales-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              {/* Logo SVG White Version */}
              <svg viewBox="0 0 220 54" className="h-10 md:h-12 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="34" fontSize="32" fontWeight="bold" fontFamily="sans-serif" fill="white" letterSpacing="-1">TH</text>
                
                {/* Stylized A */}
                <path d="M53 34 L62 8 L71 34" stroke="#00aeef" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M56 26 L68 26" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                
                <text x="74" y="34" fontSize="32" fontWeight="bold" fontFamily="sans-serif" fill="white" letterSpacing="-1">LES</text>
                
                <text x="2" y="50" fontSize="11" fontWeight="500" fontFamily="sans-serif" fill="white" letterSpacing="0.28em" className="uppercase opacity-80">Informatique</text>
              </svg>
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
                <span>310, rue Omar Riffi, 20120 Casablanca Maroc.</span>
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