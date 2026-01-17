
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Years HR Excellence', value: '4' },
    { label: 'AWS Services Mastered', value: '10+' },
    { label: 'HR Tech Reduction', value: '20%' },
    { label: 'Career State', value: 'Cloud Ready' },
  ];

  return (
    <section className="bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-slate-400 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
