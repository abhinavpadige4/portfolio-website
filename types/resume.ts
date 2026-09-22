export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  url: string;
  github: string;
}

export interface Contact {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface Resume {
  name: string;
  title: string;
  bio: string;
  skills: string[];
  experience: Experience[];
  projects: Project[];
  contact: Contact;
}
