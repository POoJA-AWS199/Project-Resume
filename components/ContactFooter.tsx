import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const ContactFooter: React.FC = () => {
  const linkedinUrl = "https://www.linkedin.com/in/pooja-sheokand-3528301a2/";

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center">
            <Mail className="mr-2 text-teal-500" />
            <a href="mailto:sheokandpooja1996@gmail.com" className="hover:text-teal-400 transition-colors">sheokandpooja1996@gmail.com</a>
          </div>
          <div className="flex items-center">
            <Phone className="mr-2 text-teal-500" />
            <a href="tel:+919013417234" className="hover:text-teal-400 transition-colors">+91-9013417234</a>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mb-8">
          <a 
            href={linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 rounded-xl hover:bg-teal-600 transition-all hover:-translate-y-1"
            title="LinkedIn"
          >
            <Linkedin />
          </a>
          <a 
            href="#" 
            className="p-3 bg-slate-800 rounded-xl hover:bg-teal-600 transition-all hover:-translate-y-1"
            title="GitHub"
          >
            <Github />
          </a>
        </div>
        <div className="pt-8 border-t border-slate-800 text-slate-500 text-sm">
          © {new Date().getFullYear()} Pooja Sheokand. Built for Cloud Transition.
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;