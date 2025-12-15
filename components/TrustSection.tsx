import React from 'react';
import { Award, Users, Shield, History } from 'lucide-react';

const TrustSection: React.FC = () => {
  return (
    <section id="trust" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Pourquoi choisir Thalès Informatique ?
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Au-delà de l'intégration technique, nous sommes des partenaires de votre réussite. Notre longévité sur le marché marocain témoigne de notre capacité à évoluer avec les technologies et à servir nos clients avec excellence.
              </p>
              
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex gap-4">
                  <div className="mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-thales-700">
                      <History size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">28+ Ans d'expérience</h4>
                    <p className="text-slate-600 text-sm">Une stabilité et une expertise rare sur le marché IT marocain.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-thales-700">
                      <Users size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Approche "Customer First"</h4>
                    <p className="text-slate-600 text-sm">Une méthodologie centrée sur vos enjeux métier, pas seulement sur la technologie.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-thales-700">
                      <Award size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Certifications Internationales</h4>
                    <p className="text-slate-600 text-sm">Nos équipes sont certifiées par les plus grands éditeurs mondiaux (Sage, Microsoft, VMware).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-100 hover:shadow-md transition-shadow">
                <span className="block text-4xl font-bold text-thales-700 mb-2">28+</span>
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Années</span>
             </div>
             <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-100 hover:shadow-md transition-shadow translate-y-8">
                <span className="block text-4xl font-bold text-thales-700 mb-2">500+</span>
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Clients</span>
             </div>
             <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-100 hover:shadow-md transition-shadow">
                <span className="block text-4xl font-bold text-thales-700 mb-2">100%</span>
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Ingénierie SI</span>
             </div>
             <div className="bg-thales-700 p-8 rounded-2xl text-center shadow-xl translate-y-8 text-white">
                <Shield size={40} className="mx-auto mb-2 opacity-80" />
                <span className="text-sm font-medium opacity-90 uppercase tracking-wide">Sécurité Garantie</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;