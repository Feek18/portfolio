export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  postalCode: string;
  timezone: string;
  email: string;
  badgeText: string;
  heroBio: string;
  cvUrl: string;
  socials: {
    github: string;
    linkedin: string;
    dribbble: string;
  };
}

export interface AboutStats {
  education: string;
  location: string;
  focus: string;
}

export interface TechStackCategory {
  title: string;
  skills: string[];
}

export interface Project {
  id: string;
  subLabel: string;
  title: string;
  description: string;
  stack: string[];
  rightColType: "metric" | "confidential" | "academic" | "exploratory";
  metricLabel?: string;
  metricValue?: string;
  metricSubtext?: string;
  rightColText?: string;
  isPrivate?: boolean;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  bullets: string[];
  skills: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Fikri Bintang Achmada",
  title: "Frontend Developer & UI/UX Designer",
  location: "Denpasar, Bali, Indonesia",
  postalCode: "80118",
  timezone: "UTC+8",
  email: "bintangfikri31@gmail.com",
  badgeText: "OPEN TO REMOTE WORK",
  heroBio: "Frontend focused developer currently working remotely with Ruby on Rails and Hotwire. I care most about design — from Figma to production code.",
  cvUrl: "/assets/CV_Fikri_Bintang_Achmada_CV.pdf",
  socials: {
    github: "https://github.com/Feek18",
    linkedin: "https://linkedin.com/in/fikriachmada",
    dribbble: "https://dribbble.com/Fikribintang",
  },
};

export const aboutParagraphs = [
  "I'm a Software Engineering graduate from Politeknik Negeri Bali (GPA 3.76/4.00). I started with design and UI/UX in Figma before moving into frontend code — HTML, SASS, React.js, Next.js, Tailwind CSS, and React Native.",
  "Right now I work full-time as a Fullstack Developer at PT. SUM Digital Konsultan, building a drone-tracking platform with Ruby on Rails and Hotwire, while actively searching for frontend roles on the job.",
  "Outside work I plan to focus on remote projects and continue learning German.",
];

export const aboutStats: AboutStats = {
  education: "Politeknik Negeri Bali - GPA 3.76 / 4.00",
  location: "Denpasar, Bali, Indonesia",
  focus: "Frontend & UI Design",
};

export const techStackData: TechStackCategory[] = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS/SASS", "JavaScript", "React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend Development/Router",
    skills: ["Ruby on Rails", "Hotwire (Turbo + Stimulus)", "MySQL"],
  },
  {
    title: "Design",
    skills: ["Figma", "Wireframing", "Prototyping", "Design systems"],
  },
];

export const projectsData: Project[] = [
  {
    id: "room-production",
    subLabel: "2024",
    title: "Room Production",
    description: "Website showcase for a garment brand (Formerly Youniform) featuring catalog presentation, clean layout, and Framer Motion animation. Built to showcase catalog showcase & custom product lines for international clients.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    rightColType: "metric",
    metricLabel: "METRIC",
    metricValue: "98/100",
    metricSubtext: "Lighthouse Performance score",
    liveUrl: "https://room-production-app.vercel.app",
    githubUrl: "https://github.com/Feek18",
  },
  {
    id: "akasa-skylens",
    subLabel: "PT. SUM DIGITAL KONSULTAN",
    title: "Akasa SkyLens (runway.cx)",
    description: "Akasa SkyLens is an intermediate platform for drone operators and users with admin features and operator verification. My contributions: Multi-step checkout with email OTP verification, Stimulus-based toast notification system, dark/light theme selection and QR code verification module.",
    stack: ["Ruby on Rails", "Hotwire (Turbo + Stimulus)", "PostgreSQL"],
    rightColType: "confidential",
    rightColText: "Production inspection & client access code was restricted/confidential.",
    isPrivate: true,
  },
  {
    id: "campus-reservation",
    subLabel: "POLITEKNIK NEGERI BALI — 2024",
    title: "Campus Space Reservation System",
    description: "A academic paper/project showcase on room booking and scheduling system with QR-Code verify, built with Laravel 11. My role: Front-end Database architecture, Role-based Access Control, QR Code generator and verification.",
    stack: ["Laravel 11", "PHP", "MySQL", "Tailwind CSS"],
    rightColType: "academic",
    rightColText: "Academic project, non live site.",
    githubUrl: "https://github.com/Feek18/project-laravel11",
  },
  {
    id: "social-media-clone",
    subLabel: "MINI PROJECT / 2024",
    title: "Laravel Social Media Clone",
    description: "Microblogging application featuring user relationships, posts, comments, likes, & followers. My role: Relational database architecture design and user presentation feeds.",
    stack: ["Laravel 11", "PHP", "MySQL", "Blade"],
    rightColType: "exploratory",
    rightColText: "Personal exploratory codebase for microblog navigation and relationship modelling.",
    githubUrl: "https://github.com/Feek18/mini-project",
  },
];

export const experienceData: Experience[] = [
  {
    role: "Full stack Developer",
    company: "PT. SUM Digital Konsultan",
    duration: "Nov 2024 - Present",
    bullets: [
      "Contribute to Akasa SkyLens, a drone booking and cinematography platform, working on admin-facing features and verification on operator side.",
      "Gaining hands-on professional experience with Ruby on Rails and Hotwire (Turbo Streams + Stimulus) on the job — building on a frontend foundation to take on full-stack tasks.",
      "Helped implement a multi-step checkout flow with email-based OTP verification and a customer identity/session system.",
      "Built UI features including a Stimulus-based toast notification system, dark/light theme switching with Tailwind CSS, and an operator-facing QR code verification flow.",
    ],
    skills: ["Ruby on Rails", "Hotwire (Turbo + Stimulus)", "PostgreSQL"],
  },
  {
    role: "Frontend Web Developer Intern",
    company: "PT. APPKEY",
    duration: "Aug 2024",
    bullets: [
      "Participated in developing a real website project with the team.",
      "Fixed several bugs and added features according to the client's wishes.",
      "With meetings with the team to address common goals.",
      "Optimized CSS and image assets, reducing loading time on the main page.",
      "Collaborate with the QA team to add test data and optimize map displaying with Leaflet JS.",
    ],
    skills: ["JavaScript", "CSS Optimization", "Leaflet JS", "QA Documentation"],
  },
];
