import React, { useState } from 'react';
import { Send, CheckCircle, Lock } from 'lucide-react';

const ContactFormSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xzznqdkk", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Une erreur s'est produite lors de l'envoi. Veuillez réessayer.");
      }
    } catch (error) {
      alert("Une erreur s'est produite. Veuillez vérifier votre connexion.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-thales-900 relative overflow-hidden scroll-mt-20">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-br from-thales-900 to-slate-900 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
         {/* Cyan glow */}
         <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-thales-500 rounded-full blur-[128px]"></div>
         {/* Deep blue glow */}
         <div className="absolute bottom-0 right-0 w-64 h-64 bg-thales-700 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Grid Layout: 
            Mobile: Title -> Form -> Testimonials (Vertical stack)
            Desktop: Left Col (Title + Testimonials) | Right Col (Form)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* 1. Title Block (Top on Mobile, Top-Left on Desktop) */}
          <div className="lg:col-span-5 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Obtenez un diagnostic gratuit de votre SI ou une démonstration personnalisée de nos solutions ERP. Nos experts vous répondent sous 24h.
            </p>
          </div>

          {/* 2. Form Block (Middle on Mobile, Right Column on Desktop) */}
          <div className="lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:row-span-2">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Demande envoyée !</h3>
                  <p className="text-slate-600">Un expert Thalès Informatique vous contactera très prochainement pour échanger sur vos besoins.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-thales-700 font-semibold hover:underline"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Contactez un expert</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nom" className="block text-sm font-medium text-slate-700 mb-1">Nom & Prénom <span className="text-red-500">*</span></label>
                      <input type="text" id="nom" name="nom" required className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-thales-500 focus:ring-2 focus:ring-thales-200 outline-none transition-all" placeholder="Votre nom complet" />
                    </div>
                    <div>
                      <label htmlFor="fonction" className="block text-sm font-medium text-slate-700 mb-1">Fonction</label>
                      <input type="text" id="fonction" name="fonction" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-thales-500 focus:ring-2 focus:ring-thales-200 outline-none transition-all" placeholder="DG, DAF, DSI..." />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email professionnel <span className="text-red-500">*</span></label>
                      <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-thales-500 focus:ring-2 focus:ring-thales-200 outline-none transition-all" placeholder="nom@entreprise.ma" />
                    </div>
                    <div>
                      <label htmlFor="tel" className="block text-sm font-medium text-slate-700 mb-1">Téléphone <span className="text-red-500">*</span></label>
                      <input type="tel" id="tel" name="telephone" required className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-thales-500 focus:ring-2 focus:ring-thales-200 outline-none transition-all" placeholder="+212 6..." />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="entreprise" className="block text-sm font-medium text-slate-700 mb-1">Entreprise</label>
                      <input type="text" id="entreprise" name="entreprise" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-thales-500 focus:ring-2 focus:ring-thales-200 outline-none transition-all" placeholder="Nom de votre société" />
                    </div>
                    <div>
                      <label htmlFor="secteur" className="block text-sm font-medium text-slate-700 mb-1">Secteur d'activité</label>
                      <select id="secteur" name="secteur" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-thales-500 focus:ring-2 focus:ring-thales-200 outline-none transition-all">
                        <option value="">Sélectionner...</option>
                        <option value="industrie">Industrie</option>
                        <option value="commerce">Commerce & Distribution</option>
                        <option value="services">Services</option>
                        <option value="btp">BTP</option>
                        <option value="finance">Banque / Finance</option>
                        <option value="public">Secteur Public</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="besoin" className="block text-sm font-medium text-slate-700 mb-1">Votre besoin</label>
                    <select id="besoin" name="besoin" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-thales-500 focus:ring-2 focus:ring-thales-200 outline-none transition-all mb-3">
                      <option value="diagnostic">Demander un diagnostic SI</option>
                      <option value="demo_erp">Démonstration ERP Sage</option>
                      <option value="conseil">Conseil en Transformation Digitale</option>
                      <option value="audit">Audit Infrastructure & Sécurité</option>
                      <option value="contact">Prise de contact générale</option>
                    </select>
                    <textarea id="message" name="message" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-thales-500 focus:ring-2 focus:ring-thales-200 outline-none transition-all h-24" placeholder="Détaillez brièvement votre projet..."></textarea>
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="consent" required className="mt-1 w-4 h-4 text-thales-600 rounded border-gray-300 focus:ring-thales-500" />
                    <label htmlFor="consent" className="text-xs text-slate-500">
                      J'accepte que Thalès Informatique traite mes données pour répondre à ma demande. Vos données sont protégées et ne seront jamais vendues.
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full bg-thales-700 hover:bg-thales-800 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                    {!isSubmitting && <Send size={18} />}
                  </button>
                  
                  <div className="flex items-center justify-center gap-2 text-slate-400 text-xs mt-4">
                    <Lock size={12} />
                    <span>Données sécurisées & confidentielles</span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* 3. Testimonials & Bullets (Bottom on Mobile, Bottom-Left on Desktop) */}
          <div className="lg:col-span-5 text-white">
            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle className="text-thales-500" size={20} />
                <span>Audit préliminaire sans engagement</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle className="text-thales-500" size={20} />
                <span>Expertise certifiée (Sage, Microsoft)</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle className="text-thales-500" size={20} />
                <span>Accompagnement sur mesure</span>
              </li>
            </ul>

            <div className="bg-thales-800/50 p-6 rounded-lg border border-thales-700 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-thales-700 flex-shrink-0 flex items-center justify-center text-thales-300">
                    <span className="font-bold text-xl">“</span>
                 </div>
                 <div>
                    <p className="italic text-slate-300 mb-4">
                      "L'équipe Thalès a su comprendre nos enjeux industriels et déployer une solution Sage qui a optimisé notre production de 30%."
                    </p>
                    <p className="font-bold text-white">— Directeur Général, Industrie Agroalimentaire</p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;