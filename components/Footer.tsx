import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Printer, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-thales-900 text-slate-300 py-12 border-t border-thales-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              {/* Logo with filter to make it white. Requires transparent PNG logo.png in public folder */}
              <img 
                src="/logo.png" 
                alt="Thalès Informatique" 
                className="h-10 md:h-14 w-auto object-contain brightness-0 invert opacity-90"
              />
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