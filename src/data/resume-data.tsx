import {
  ClevertechLogo,
  ConsultlyLogo
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Vishwas",
  initials: "BG",
  location: "Bengaluru, India, IST",
  locationLink: "https://www.google.com/maps/place/Shimoga",
  about:
    "Full Stack DevOps Engineer focused on building Automations and utility Tools",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 6 years of experience in working remotely with companies all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/39022018?v=4",
  personalWebsiteUrl: " ",
  contact: {
    email: "vishwasbeede@gmail.com",
    tel: "+919663815380",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/vishwasbeede",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vishwasbg/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/vishwas_bg",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Jawaharlal Nehru National college of Engineering, Shivamogga",
      degree: "Bachelor's Engineering in Telecommunications",
      start: "2014",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Lumen Technologies",
      link: "https://www.lumen.com/",
      badges: ["Hybrid"],
      title: "Software Development Consultant → Full Stack DevOps Engineer",
      logo: ClevertechLogo,
      start: "2022",
      end: "2024",
      description:
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
    {
      company: "Tata Consultancy Services",
      link: "https://www.tcs.com/",
      badges: ["Work from office"],
      title: "System Enginerr → DevOps Automation Engineer ",
      logo: ClevertechLogo,
      start: "2018",
      end: "2022",
      description:
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    }
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Node.js",
    "Ansible",
    "Amazon Web Services",
    "Azure",
    'Terraform',
    'Python',
    'HPSA'
  ],
  projects: [
    {
      title: "N/A",
      techStack: [
        "Side Project",
        "TypeScript",
        "Vite",
        "GraphQL",
      ],
      description: "Description Holder",
      logo: ConsultlyLogo,
      link: {
        label: "N/A",
        href: "https://404.com/",
      },
    },
    {
      title: "N/A",
      techStack: [
        "Side Project",
        "TypeScript",
        "GraphQL",
      ],
      description: "Description Holder",
      logo: ConsultlyLogo,
      link: {
        label: "N/A",
        href: "https://404.com/",
      },
    },
  ],
} as const;
