import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Download, Cloud } from 'lucide-react';

const Hero: React.FC = () => {
  // Professional headshot that matches the "Blue Blazer / Office Library" aesthetic
  const profileImageUrl = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"; 
  const linkedinUrl = "https://www.linkedin.com/in/pooja-sheokand-3528301a2/";

  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:flex lg:items-center lg:justify-between gap-12">
          {/* Content Left */}
          <div className="lg:w-2/3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-semibold mb-6 border border-teal-100">
              <Cloud size={16} />
              <span>Seeking Entry-Level Cloud/DevOps Role</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight uppercase tracking-tight">
              POOJA <span className="text-teal-600">SHEOKAND</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-2xl font-medium leading-relaxed">
              Motivated HR Professional Transitioning into <span className="text-teal-600 font-bold underline decoration-teal-200 decoration-4 underline-offset-4">Cloud Computing</span> with Hands-On AWS Training.
            </p>
            
            <div className="flex flex-wrap gap-y-4 gap-x-8 text-slate-500 mb-10 font-medium">
              <div className="flex items-center group cursor-default">
                <MapPin className="mr-2 text-teal-500 group-hover:scale-110 transition-transform" size={18} />
                <span>Gurgaon, Haryana</span>
              </div>
              <div className="flex items-center group cursor-default">
                <Phone className="mr-2 text-teal-500 group-hover:scale-110 transition-transform" size={18} />
                <span>+91-9013417234</span>
              </div>
              <div className="flex items-center group">
                <Mail className="mr-2 text-teal-500 group-hover:scale-110 transition-transform" size={18} />
                <a href="mailto:sheokandpooja1996@gmail.com" className="hover:text-teal-600 transition-colors">sheokandpooja1996@gmail.com</a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="./resume.pdf" 
                download="Pooja_Sheokand_Resume.pdf"
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20 font-semibold group"
              >
                <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                <span>Download Resume</span>
              </a>
              <a 
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl hover:border-teal-600 hover:text-teal-600 transition-all font-semibold shadow-sm"
              >
                <Linkedin size={20} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
          
          {/* Profile Picture Right */}
          <div className="mt-12 lg:mt-0 lg:w-1/3">
             <div className="relative group max-w-sm mx-auto lg:max-w-none">
                {/* Visual Accent Layers */}
                <div className="absolute inset-0 bg-teal-600 rounded-[2.5rem] rotate-3 -z-10 group-hover:rotate-6 transition-transform duration-500 shadow-xl opacity-20" />
                <div className="absolute inset-0 bg-blue-100 rounded-[2.5rem] -rotate-3 -z-10 shadow-inner opacity-40" />
                
                {/* Main Image Container */}
                <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border-[10px] border-white aspect-[4/5] bg-slate-100 group">
                  <img 
                    src={profileImageUrl} 
                    alt="Pooja Sheokand - Cloud/DevOps Professional" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle overlay for contrast */}
                  <div className="absolute inset-0 bg-teal-900/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>

                {/* Status Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
                   <div className="flex items-center space-x-3">
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </div>
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">Active for Cloud Jobs</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;