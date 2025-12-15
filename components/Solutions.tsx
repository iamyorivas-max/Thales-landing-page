import React from 'react';
import { Layers, FileText, ShieldCheck, Cloud, Settings } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: <Layers size={24} />,
      title: "Intégration ERP & Gestion",
      description: "Centre de compétence Sage. Nous déployons et paramétrons votre ERP pour aligner technologie et processus métier (Compta, RH, Paie, Commercial).",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      icon: <FileText size={24} />,
      title: "BPM & GED",
      description: "Dématérialisation et automatisation de vos workflows documentaires avec JobRouter. Gagnez en traçabilité et en efficacité.",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Cybersécurité",
      description: "Protection avancée de vos données critiques avec les solutions Kaspersky Lab et des stratégies de sauvegarde résilientes.",
      color: "text-red-600",
      bg: "bg-red-50"
    },
    {
      icon: <Cloud size={24} />,
      title: "Infrastructure & Cloud",
      description: "Solutions de virtualisation (VMware), stockage (NetApp) et Cloud Hybride (Microsoft Azure) pour une infrastructure agile.",
      color: "text-sky-600",
      bg: "bg-sky-50"
    },
    {
      icon: <Settings size={24} />,
      title: "Maintenance & Conseil",
      description: "Audit SI, infogérance et accompagnement stratégique pour garantir la pérennité et l'évolution de votre parc informatique.",
      color: "text-orange-600",
      bg: "bg-orange-50"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-thales-100 font-semibold tracking-wider text-sm uppercase block mb-2">Notre Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Des solutions 360° pour piloter votre entreprise
            </h2>
            <p className="text-slate-300 text-lg">
              Nous construisons l'architecture numérique qui soutient vos ambitions de croissance.
            </p>
          </div>
          <a href="#contact" className="bg-thales-500 hover:bg-thales-600 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap">
            Demander une démo
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, index) => (
            <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-slate-600 hover:bg-slate-750 transition-all group">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${sol.bg} ${sol.color}`}>
                {sol.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{sol.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {sol.description}
              </p>
            </div>
          ))}
          
          {/* CTA Card in Grid */}
          <div className="bg-gradient-to-br from-thales-600 to-thales-800 p-8 rounded-xl flex flex-col justify-center items-center text-center border border-thales-500">
            <h3 className="text-xl font-bold text-white mb-4">Besoin d'une solution sur mesure ?</h3>
            <p className="text-slate-200 mb-6 text-sm">
              Nos consultants analysent vos besoins spécifiques pour concevoir l'architecture idéale.
            </p>
            <a href="#contact" className="w-full bg-white text-thales-900 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;