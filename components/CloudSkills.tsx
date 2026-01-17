import React, { useState } from 'react';
import { 
  Server, 
  Database, 
  ShieldCheck, 
  Globe, 
  Activity, 
  ChevronDown, 
  ChevronUp,
  CheckCircle2,
  Cpu,
  Lock,
  Key,
  FileJson
} from 'lucide-react';

const CloudSkills: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isIAMOpen, setIsIAMOpen] = useState(false);

  const groups = [
    { 
      title: 'Compute', 
      icon: <Cpu className="text-blue-500" />, 
      services: [
        { name: 'EC2' }, 
        { name: 'Auto Scaling' }, 
        { name: 'AMI' }, 
        { name: 'Lambda' }
      ], 
      color: 'bg-blue-50 border-blue-100' 
    },
    { 
      title: 'Storage', 
      icon: <Database className="text-orange-500" />, 
      services: [
        { name: 'S3' }, 
        { name: 'EBS' }, 
        { name: 'Snapshots' }, 
        { name: 'RDS' }
      ], 
      color: 'bg-orange-50 border-orange-100' 
    },
    { 
      title: 'Security', 
      icon: <ShieldCheck className="text-red-500" />, 
      services: [
        { 
          name: 'IAM Roles', 
          desc: 'Granting temporary access to AWS services or resources without long-term keys.' 
        },
        { 
          name: 'IAM Policies', 
          desc: 'Fine-grained JSON permissions to enforce the Principle of Least Privilege.' 
        },
        { name: 'VPC Security Groups' },
        { name: 'CloudTrail' }
      ], 
      color: 'bg-red-50 border-red-100' 
    },
    { 
      title: 'Networking', 
      icon: <Globe className="text-purple-500" />, 
      services: [
        { name: 'VPC' }, 
        { name: 'ELB' }, 
        { name: 'CloudFront' }, 
        { name: 'Route Tables' }
      ], 
      color: 'bg-purple-50 border-purple-100' 
    },
    { 
      title: 'Messaging', 
      icon: <Activity className="text-green-500" />, 
      services: [
        { name: 'SNS' }, 
        { name: 'SMS' }, 
        { name: 'CloudWatch Metrics' }
      ], 
      color: 'bg-green-50 border-green-100' 
    }
  ];

  const projects = [
    "Launched and managed EC2 instances (Linux/Windows) with attached EBS volumes and security groups.",
    "Created IAM users, roles, and custom policies to control access securely.",
    "Designed S3 buckets with lifecycle rules for data archiving and cost optimization.",
    "Built backup automation using AMI creation and EBS snapshot scheduling via CLI and console.",
    "Set up custom VPC with public/private subnets, internet gateways, and route tables.",
    "Configured Elastic Load Balancers and Auto Scaling for high availability and cost efficiency.",
    "Monitored resources using CloudWatch metrics, alarms, and logs to track performance.",
    "Used CloudTrail to review account-level activity for security and compliance."
  ];

  return (
    <section id="cloud-skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Cloud Skills (AWS)</h2>
          <div className="w-20 h-1.5 bg-teal-600 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto italic font-medium">
            "Security and Scalability are job zero. My focus is on building hands-on mastery of the AWS Cloud Adoption Framework."
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {groups.map((g, i) => (
            <div key={i} className={`p-6 rounded-2xl border ${g.color} hover:shadow-lg transition-all transform hover:-translate-y-1`}>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-white rounded-lg shadow-sm">{g.icon}</div>
                <h3 className="font-bold text-slate-900">{g.title}</h3>
              </div>
              <ul className="space-y-3">
                {g.services.map((s, si) => (
                  <li key={si} className="group">
                    <div className="flex items-start text-slate-600 text-sm">
                      <CheckCircle2 size={14} className="mr-2 mt-0.5 text-teal-500 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-slate-800">{s.name}</span>
                        {s.desc && (
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">{s.desc}</p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Specialized Focus: IAM (Unified Roles & Policies) */}
        <div className="mb-8 border border-red-100 rounded-3xl overflow-hidden shadow-sm bg-red-50/30">
          <button 
            onClick={() => setIsIAMOpen(!isIAMOpen)} 
            className="w-full flex items-center justify-between p-6 hover:bg-red-50 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <Lock className="text-red-600" size={24} />
              <div className="text-left">
                <span className="text-xl font-bold text-slate-900 block">Expertise Focus: AWS IAM Mastery</span>
                <span className="text-sm text-red-700 font-medium">Roles & Policies: The Foundation of AWS Security</span>
              </div>
            </div>
            {isIAMOpen ? <ChevronUp className="text-red-600" size={24} /> : <ChevronDown className="text-red-600" size={24} />}
          </button>
          
          {isIAMOpen && (
            <div className="p-8 bg-white border-t border-red-50 animate-fadeIn">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                    <Key className="mr-2 text-red-500" size={18} /> IAM Roles (The "Who")
                  </h4>
                  <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                    Roles are temporary identities that provide <strong>session-based credentials</strong>. I implement them to allow EC2 instances or Lambda functions to securely access other services (like S3) without storing static, high-risk access keys.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <p className="text-xs font-bold text-slate-700 uppercase mb-1">Impact:</p>
                    <p className="text-sm text-slate-600 italic">"Eliminates long-term credential leakage risks and simplifies access delegation across complex cloud environments."</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                    <FileJson className="mr-2 text-red-500" size={18} /> IAM Policies (The "What")
                  </h4>
                  <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                    Policies are JSON documents that define <strong>explicit allow/deny rules</strong>. I specialize in writing custom Managed Policies that restrict actions to specific Resource ARNs, ensuring no user or service has more access than required.
                  </p>
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                    <p className="text-xs font-bold text-red-700 uppercase mb-1">Standard Practice:</p>
                    <p className="text-sm text-red-600 italic">"Every policy I create follows the Principle of Least Privilege, reducing the security blast radius of every identity."</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Practical Projects Accordion */}
        <div className="border border-teal-100 rounded-3xl overflow-hidden shadow-sm">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="w-full flex items-center justify-between p-6 bg-teal-50 hover:bg-teal-100 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <Server className="text-teal-700" size={24} />
              <span className="text-xl font-bold text-teal-900">Practical Hands-On Learning</span>
            </div>
            {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
          {isOpen && (
            <div className="p-8 bg-white grid md:grid-cols-2 gap-x-12 gap-y-6 animate-fadeIn border-t border-teal-50">
              {projects.map((p, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="mt-1 w-6 h-6 flex-shrink-0 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center font-bold text-xs">{i+1}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CloudSkills;