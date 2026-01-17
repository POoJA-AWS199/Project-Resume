import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const EducationCertifications: React.FC = () => (
  <section id="education" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="text-2xl font-bold mb-8 flex items-center text-slate-900"><GraduationCap className="mr-3 text-teal-600" />Education</h2>
          <div className="space-y-8">
            <div className="relative pl-6 border-l-2 border-teal-200">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-teal-500 rounded-full" />
              <h3 className="font-bold text-lg text-slate-800">MBA – Human Resources</h3>
              <p className="text-teal-700 font-medium">Punjab Technical University</p>
              <p className="text-slate-500 text-sm">2019 – 2021</p>
            </div>
            <div className="relative pl-6 border-l-2 border-slate-200">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-slate-300 rounded-full" />
              <h3 className="font-bold text-lg text-slate-800">B.Com (Hons)</h3>
              <p className="text-slate-600 font-medium">University of Delhi</p>
              <p className="text-slate-400 text-sm">2016 Graduated</p>
            </div>
          </div>
        </div>

        <div className="bg-teal-900 p-8 rounded-3xl text-white shadow-xl">
          <h2 className="text-2xl font-bold mb-8 flex items-center"><Award className="mr-3 text-teal-400" />Certifications & Courses</h2>
          <div className="space-y-8">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-teal-300 tracking-wide uppercase text-sm">In Progress</span>
                <span className="text-teal-400 text-xs font-bold">EXAM PREP</span>
              </div>
              <h3 className="text-xl font-bold mb-4">AWS Certified Solutions Architect – Associate</h3>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[75%] h-full bg-teal-400 rounded-full animate-pulse" />
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white/5 p-4 rounded-xl">
              <BookOpen className="text-teal-400 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-bold">Ultimate AWS Certified Solutions Architect Associate 2025</h4>
                <p className="text-teal-200/70 text-sm mt-1">Detailed Coursework & Lab Mastery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationCertifications;