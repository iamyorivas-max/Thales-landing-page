import React from 'react';
import { Building2, ShoppingBag, Wheat, HardHat, Landmark, GraduationCap, Briefcase, Globe } from 'lucide-react';

const Sectors: React.FC = () => {
  const sectors = [
    { name: 'Industrie', icon: <Building2 /> },
    { name: 'Commerce & Distribution', icon: <ShoppingBag /> },
    { name: 'Agroalimentaire', icon: <Wheat /> },
    { name: 'BTP & Construction', icon: <HardHat /> },
    { name: 'Services', icon: <Briefcase /> },
    { name: 'Banques & Finance', icon: <Landmark /> },
    { name: 'Éducation', icon: <GraduationCap /> },
    { name: 'Secteur Public', icon: <Globe /> },
  ];

  return (
    <section id="secteurs" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Une expertise multisectorielle</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-12">
          Nous comprenons les spécificités de votre métier. Nos solutions sont adaptées aux contraintes réglementaires et opérationnelles de chaque secteur.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sectors.map((sector, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-4 hover:border-thales-500 hover:shadow-md transition-all group cursor-default">
              <div className="text-slate-400 group-hover:text-thales-700 transition-colors">
                {React.cloneElement(sector.icon as React.ReactElement, { size: 32 })}
              </div>
              <span className="font-semibold text-slate-800 text-sm md:text-base">{sector.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;