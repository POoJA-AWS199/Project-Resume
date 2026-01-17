
export interface AWSService {
  name: string;
  category: 'Compute' | 'Storage' | 'Security' | 'Networking' | 'Monitoring';
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  tools: string[];
}
