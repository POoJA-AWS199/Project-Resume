import React from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';

const ExperienceTimeline: React.FC = () => {
  const exps = [
    { 
      role: 'HR Specialist', 
      company: '3DSTEEL ENGINEERING, Gurgaon, India', 
      duration: 'Feb 2023 – Oct 2024', 
      achievements: [
        'Managed end-to-end recruitment across departments, ensuring seamless sourcing and screening.',
        'Conducted preliminary phone and in-person interviews to assess candidate fit.',
        'Utilized ATS tools for candidate screening, updates, documentation, and data accuracy.',
        'Led onboarding and joining formalities, including documentation and employee file creation.',
        'Conducted root cause analysis to streamline hiring workflows and <span class="text-teal-600 font-bold">reduced errors by 20%</span>.',
        'Ensured compliance with HR processes, documentation standards, and confidentiality norms.'
      ] 
    },
    { 
      role: 'HR Recruiter', 
      company: 'MWIDM INDIA PVT, Chandigarh', 
      duration: 'June 2021 – Feb 2023', 
      achievements: [
        'Managed full-cycle recruitment across technical and non-technical roles.',
        'Coordinated interview schedules and followed up with hiring managers for timely feedback.',
        'Prepared and issued offer letters, ensuring smooth communication with selected candidates.',
        'Developed sourcing strategies through job portals and maintained ATS accuracy.',
        'Worked closely with business heads to support hiring plans and maintain compliance.'
      ] 
    }
  ];
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          <div className="w-20 h-1.5 bg-teal-600 mx-auto rounded-full" />
        </div>
        <div className="space-y-12">
          {exps.map((e, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-md border-l-8 border-teal-500 relative">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="p-3 bg-teal-50 rounded-xl mr-4">
                    <Briefcase className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{e.role}</h3>
                    <p className="text-teal-700 font-semibold">{e.company}</p>
                  </div>
                </div>
                <div className="mt-2 md:mt-0 px-4 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
                  {e.duration}
                </div>
              </div>
              <ul className="space-y-3">
                {e.achievements.map((a, ai) => (
                  <li key={ai} className="flex items-start text-slate-600 leading-relaxed">
                    <CheckCircle className="mr-3 mt-1.5 text-teal-500 flex-shrink-0" size={16} />
                    <span dangerouslySetInnerHTML={{__html: a}} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;