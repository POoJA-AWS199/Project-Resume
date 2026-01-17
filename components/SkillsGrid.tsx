import React from 'react';
import { Languages } from 'lucide-react';

const SkillsGrid: React.FC = () => (
  <section className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {[
          { title: 'Technical & Cloud', items: ['AWS CLI', 'AWS Management Console', 'IAM Policies', 'VPC Design', 'EC2/S3 Mastery'], color: 'bg-teal-50 text-teal-700' },
          { title: 'HR Tools', items: ['Workday', 'Ceipal', 'ATS Systems', 'MS Office Suite', 'MS Excel'], color: 'bg-blue-50 text-blue-700' },
          { title: 'Soft Skills', items: ['Communication', 'Documentation', 'Task Prioritization', 'Problem Solving', 'Adaptability'], color: 'bg-indigo-50 text-indigo-700' }
        ].map((s, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-6 text-slate-900 border-b pb-4 border-slate-50">{s.title}</h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((item, ii) => (
                <span key={ii} className={`px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide ${s.color}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
         <div className="flex items-center space-x-3">
            <Languages className="text-teal-600" />
            <h4 className="font-bold text-slate-800">Languages</h4>
         </div>
         <div className="flex space-x-6 text-slate-600 font-medium">
            <span>English: <span className="text-teal-600">Proficient</span></span>
            <span>Hindi: <span className="text-teal-600">Native</span></span>
         </div>
      </div>
    </div>
  </section>
);

export default SkillsGrid;