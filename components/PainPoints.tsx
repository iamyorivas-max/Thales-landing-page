import React from 'react';
import { AlertTriangle, TrendingDown, Database, Clock } from 'lucide-react';

const PainPoints: React.FC = () => {
  const pains = [
    {
      icon: <AlertTriangle className="text-orange-500" size={32} />,
      title: "Systèmes Obsolètes",
      description: "Votre SI actuel freine votre croissance au lieu de la soutenir ? Les technologies dépassées créent des risques de sécurité et de compatibilité."
    },
    {
      icon: <TrendingDown className="text-red-500" size={32} />,
      title: "Manque de Visibilité",
      description: "Prendre des décisions stratégiques est difficile sans données fiables en temps réel. Le pilotage à l'aveugle impacte votre rentabilité."
    },
    {
      icon: <Clock className="text-blue-500" size={32} />,
      title: "Processus Manuels",
      description: "Vos équipes perdent un temps précieux sur des tâches administratives répétitives et chronophages qui pourraient être automatisées."
    },
    {
      icon: <Database className="text-purple-500" size={32} />,
      title: "ERP Mal Exploité",
      description: "Vous possédez un logiciel de gestion puissant mais sous-utilisé, créant des silos de données entre vos différents départements."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Votre système d'information est-il un levier ou un frein ?
          </h2>
          <p className="text-lg text-slate-600">
            De nombreuses entreprises marocaines perdent en compétitivité à cause d'une gestion inefficace de leur SI. Identifiez-vous ces problématiques ?
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pains.map((pain, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-6 p-4 bg-white rounded-full w-fit shadow-sm group-hover:scale-110 transition-transform">
                {pain.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{pain.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {pain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;