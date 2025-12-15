import React from 'react';

const Certifications: React.FC = () => {
  const partners = [
    { name: "Sage", role: "Sage Certified Partner", color: "text-green-600" },
    { name: "Microsoft", role: "Gold Partner", color: "text-blue-600" },
    { name: "Kaspersky", role: "Lab Certified", color: "text-teal-700" },
    { name: "VMware", role: "Certified Professional", color: "text-gray-700" },
    { name: "NetApp", role: "Data Mgmt Admin", color: "text-blue-800" },
    { name: "JobRouter", role: "BPM Certified", color: "text-orange-600" }
  ];

  return (
    <section className="py-12 border-y border-slate-200 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-center text-slate-500 font-semibold uppercase tracking-widest text-sm mb-8">
          Nos Certifications & Partenaires Technologiques
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-80 hover:opacity-100 transition-opacity">
          {partners.map((partner, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
               {/* Since we use placeholders, we style text to look like logos */}
               <span className={`text-2xl md:text-3xl font-bold ${partner.color} filter grayscale group-hover:grayscale-0 transition-all duration-300`}>
                 {partner.name}
               </span>
               <span className="text-[10px] uppercase font-bold text-slate-400 mt-1">{partner.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;