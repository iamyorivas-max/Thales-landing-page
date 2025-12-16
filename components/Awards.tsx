import React, { useState, useEffect } from 'react';

const Awards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const awards = [
    {
      imageUrl: "https://thales.ma/wp-content/uploads/2023/03/award_top_league_zone_export_2022.png",
      footerText: "Top League Zone\nExport 2022",
      alt: "Top League Zone Export 2022"
    },
    {
      imageUrl: "https://thales.ma/wp-content/uploads/2022/10/award_bordeaux_2019.png",
      footerText: "Customer Migration\nJourney",
      alt: "Customer Migration Journey Bordeaux 2019"
    },
    {
      imageUrl: "https://thales.ma/wp-content/uploads/2022/10/award_tanger_2019.png",
      footerText: "Meilleure Croissance\nSAGE",
      alt: "Meilleure Croissance Sage Tanger 2019"
    },
    {
      imageUrl: "https://thales.ma/wp-content/uploads/2022/10/award_tunis_2018.png",
      footerText: "Meilleure performance\nSAGE",
      alt: "Meilleure performance Sage Tunis 2018"
    },
    {
      imageUrl: "https://thales.ma/wp-content/uploads/2022/10/award_Marrakech_2017.png",
      footerText: "Premier partenaire\nNorth Africa",
      alt: "Premier partenaire North Africa Marrakech 2017"
    }
  ];

  // Auto-scroll for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % awards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [awards.length]);

  return (
    <section className="py-16 bg-thales-600">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 uppercase tracking-wide">
          Nos Awards
        </h2>

        {/* Desktop View (Grid) */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {awards.map((award, idx) => (
            <div key={idx} className="flex flex-col shadow-xl hover:-translate-y-2 transition-transform duration-300">
              {/* Top Blue Part with Image */}
              <div className="bg-thales-500 p-6 flex flex-col items-center justify-center min-h-[240px] relative border-b border-thales-400">
                 <img 
                   src={award.imageUrl} 
                   alt={award.alt}
                   className="w-40 h-40 object-contain drop-shadow-md filter brightness-110"
                 />
              </div>
              {/* Bottom White Part */}
              <div className="bg-white p-6 flex-grow flex items-center justify-center min-h-[100px]">
                <p className="text-slate-600 text-sm font-bold text-center whitespace-pre-wrap uppercase tracking-tight">
                  {award.footerText}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View (Carousel) */}
        <div className="md:hidden relative overflow-hidden pb-8">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {awards.map((award, idx) => (
              <div key={idx} className="w-full flex-shrink-0 px-8">
                <div className="flex flex-col shadow-xl rounded-lg overflow-hidden">
                  <div className="bg-thales-500 p-8 flex flex-col items-center justify-center min-h-[260px] relative border-b border-thales-400">
                     <img 
                       src={award.imageUrl} 
                       alt={award.alt}
                       className="w-48 h-48 object-contain drop-shadow-md filter brightness-110"
                     />
                  </div>
                  <div className="bg-white p-6 min-h-[100px] flex items-center justify-center">
                    <p className="text-slate-700 font-bold text-center text-sm uppercase tracking-wide whitespace-pre-wrap">
                      {award.footerText}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {awards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx ? 'bg-white w-6' : 'bg-thales-400'}`}
                aria-label={`Award ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Awards;