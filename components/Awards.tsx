import React, { useState, useEffect } from 'react';

const Awards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const awards = [
    {
      badgeTitle: "TOP LEAGUE",
      badgeSubtitle: "ZONE EXPORT",
      badgeYear: "2022",
      footerText: "Top League Zone\nExport 2022"
    },
    {
      badgeTitle: "CUSTOMER",
      badgeSubtitle: "MIGRATION\nJOURNEY",
      badgeYear: "BORDEAUX 2019",
      footerText: "Customer Migration\nJourney"
    },
    {
      badgeTitle: "MEILLEURE",
      badgeSubtitle: "CROISSANCE\nSAGE",
      badgeYear: "TANGER 2019",
      footerText: "Meilleure Croissance\nSAGE"
    },
    {
      badgeTitle: "MEILLEURE",
      badgeSubtitle: "PERFORMANCE\nSAGE",
      badgeYear: "TUNIS 2018",
      footerText: "Meilleure performance\nSAGE"
    },
    {
      badgeTitle: "PREMIER",
      badgeSubtitle: "PARTENAIRE\nNORTH AFRICA",
      badgeYear: "MARRAKECH 2017",
      footerText: "Premier partenaire\nNorth Africa"
    }
  ];

  // Auto-scroll for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % awards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [awards.length]);

  // Custom SVG that replicates the provided award logo images
  const AwardBadge = ({ title, subtitle, year }: { title: string, subtitle: string, year: string }) => (
    <svg viewBox="0 0 200 200" className="w-40 h-40 drop-shadow-sm filter" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Defs for text path if needed, but we'll use direct positioning for better control */}
      
      {/* Outer Leaf Ring (Stylized) - Yellow */}
      <g className="text-yellow-300" fill="currentColor">
        {/* Left Leaves */}
        <path d="M100 175 C 90 175, 50 160, 30 110 C 20 80, 30 50, 45 35" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        <path d="M45 35 L 40 45 L 35 40 Z" fill="currentColor" /> {/* Tip */}
        
        {/* Individual Leaves Left */}
        {[40, 60, 80, 100, 120, 140].map((y, i) => (
           <ellipse key={`l-${i}`} cx={35 - i*2} cy={y} rx="6" ry="10" transform={`rotate(-${20 + i*10} ${35 - i*2} ${y})`} />
        ))}

        {/* Right Leaves */}
        <path d="M100 175 C 110 175, 150 160, 170 110 C 180 80, 170 50, 155 35" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        <path d="M155 35 L 160 45 L 165 40 Z" fill="currentColor" /> {/* Tip */}
        
        {/* Individual Leaves Right */}
         {[40, 60, 80, 100, 120, 140].map((y, i) => (
           <ellipse key={`r-${i}`} cx={165 + i*2} cy={y} rx="6" ry="10" transform={`rotate(${20 + i*10} ${165 + i*2} ${y})`} />
        ))}
      </g>

      {/* Inner Circle Ring - Yellow */}
      <circle cx="100" cy="100" r="68" stroke="currentColor" className="text-yellow-300" strokeWidth="3" fill="none" />
      
      {/* Three Stars at Top */}
      <g className="text-yellow-300" fill="currentColor">
        <polygon points="100,45 103,52 110,52 105,57 107,64 100,60 93,64 95,57 90,52 97,52" />
        <polygon points="80,50 83,57 90,57 85,62 87,69 80,65 73,69 75,62 70,57 77,57" transform="rotate(-15 80 50)" />
        <polygon points="120,50 123,57 130,57 125,62 127,69 120,65 113,69 115,62 110,57 117,57" transform="rotate(15 120 50)" />
      </g>

      {/* Text Content */}
      <text x="100" y="85" textAnchor="middle" className="text-white fill-current font-bold" style={{ fontSize: '14px', letterSpacing: '1px' }}>
        {title}
      </text>
      
      {subtitle.split('\n').map((line, i) => (
        <text key={i} x="100" y={105 + (i * 16)} textAnchor="middle" className="text-white fill-current font-bold" style={{ fontSize: '12px', letterSpacing: '0.5px' }}>
          {line}
        </text>
      ))}

      {/* Bottom Text (Year/City) - Curving effect simulated */}
      <text x="100" y="150" textAnchor="middle" className="text-white fill-current font-medium opacity-90" style={{ fontSize: '10px' }}>
        {year}
      </text>
    </svg>
  );

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
              {/* Top Blue Part with Badge */}
              <div className="bg-thales-500 p-6 flex flex-col items-center justify-center min-h-[240px] relative border-b border-thales-400">
                 <AwardBadge 
                    title={award.badgeTitle} 
                    subtitle={award.badgeSubtitle} 
                    year={award.badgeYear} 
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
                     <AwardBadge 
                        title={award.badgeTitle} 
                        subtitle={award.badgeSubtitle} 
                        year={award.badgeYear} 
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