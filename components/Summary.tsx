import React from 'react';
import { Award, Quote } from 'lucide-react';

const Summary: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-teal-50 relative">
            <div className="absolute -top-6 -left-6 bg-teal-600 p-4 rounded-2xl shadow-lg">
              <Award className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Professional Summary</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Motivated professional with <span className="text-teal-600 font-bold">4 years of experience</span> in Human Resources operations, data management, and recruitment. Currently transitioning into <span className="text-teal-600 font-bold">Cloud Computing</span> with hands-on training in Amazon Web Services (AWS).
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Developed strong foundational skills through personal projects and practical lab work in core services such as <span className="font-semibold text-slate-800">EC2, S3, IAM, VPC, and CloudWatch</span>. Seeking a cloud support or DevOps role to apply growing expertise.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <div className="relative p-8 bg-teal-600 rounded-3xl text-white overflow-hidden shadow-lg">
               <Quote className="absolute top-4 right-4 text-teal-500 opacity-30" size={60} />
               <p className="text-2xl font-medium italic leading-snug mb-6 relative z-10">
                 "Applying strong organizational skills and a proven track record in people operations to build secure and efficient cloud infrastructure."
               </p>
               <div className="h-1 w-20 bg-teal-400 rounded-full mb-4" />
               <p className="text-teal-100 font-semibold tracking-wide uppercase">4 Years HR Ops • 10+ AWS Services Mastered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;