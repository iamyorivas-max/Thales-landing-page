import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 bg-slate-50 overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-slate-200 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-thales-700 text-xs font-bold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-thales-700"></span>
              28+ Ans d'expertise SI
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Optimisez votre performance avec une <span className="text-thales-700">ingénierie SI d'excellence</span>.
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Nous accompagnons les dirigeants et DSI marocains dans la transformation digitale, l'intégration ERP (Sage) et la sécurisation de leurs infrastructures. Une approche "Customer First" éprouvée par plus de 500 entreprises.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 bg-thales-700 hover:bg-thales-800 text-white px-8 py-4 rounded-lg text-base font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Parler à un expert
                <ArrowRight size={18} />
              </a>
              <a 
                href="#solutions" 
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-lg text-base font-semibold transition-all hover:border-slate-300"
              >
                Découvrir nos solutions
              </a>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-600" />
                <span>1er Centre de Compétence Sage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-600" />
                <span>Certification ISO & Microsoft</span>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Professional Corporate Image Placeholder */}
              <img 
                src="https://picsum.photos/800/600?grayscale" 
                alt="Thalès Informatique Equipe" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-bold text-lg">Partenaire de confiance</p>
                  <p className="text-sm opacity-90">Pour les PME et Grandes Entreprises au Maroc</p>
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="bg-green-100 p-2 rounded-full text-green-700">
                <CheckCircle size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">500+</p>
                <p className="text-xs text-slate-500 font-medium">Clients Satisfaits</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;