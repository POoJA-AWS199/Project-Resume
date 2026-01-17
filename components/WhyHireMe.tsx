
import React from 'react';
import { Target } from 'lucide-react';

const WhyHireMe: React.FC = () => (
  <section className="py-12 bg-teal-600">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Target className="mr-3 text-teal-300" />Why Hire Me?
          </h2>
          <p className="text-xl text-teal-50 leading-relaxed font-medium">
            "Unique blend of <span className="text-white underline decoration-teal-300 decoration-2 underline-offset-4">people skills</span> + technical <span className="text-white underline decoration-teal-300 decoration-2 underline-offset-4">AWS knowledge</span> = Perfect for client-facing cloud roles."
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center animate-pulse">
            <span className="text-4xl font-bold text-teal-600">AWS</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyHireMe;
