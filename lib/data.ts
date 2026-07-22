export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  context: string;
  role: string;
  stack: string[];
  results: string[];
  liveUrl?: string;
  githubUrl?: string;
  isPlaceholder?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description?: string;
}

export const personalInfo = {
  name: "Fikri Bintang Achmada",
  title: "Frontend Developer & UI/UX Designer",
  location: "Denpasar, Bali, Indonesia",
  email: "bintangfikri31@gmail.com",
  valueProp: "I turn designs into fast, responsive interfaces — from Figma prototypes to production code.",
  badgeText: "Open to remote opportunities",
  cvUrl: "/assets/CV_Fikri_Bintang_Achmada_CV.pdf", // Path to CV file
  aboutText: [
    "I am a software engineering fresh graduate from Politeknik Negeri Bali with a GPA of 3.76/4.00. Combining a strong analytical engineering background with a sharp eye for modern UI/UX design, I bridge the gap between design concepts and scalable, robust production code.",
    "My core focus revolves around crafting clean layouts and highly interactive web systems using React.js, Tailwind CSS, SASS, and JavaScript. Currently, I am expanding my development toolkit by diving deep into Next.js, Ruby on Rails, and Hotwire (Turbo/Stimulus) to build reactive, server-rendered applications.",
    "Driven by a strong interest in remote engineering job opportunities, I plan to collaborate with teams in Australia (AU) and Singapore (SG), with the long-term goal of pursuing a career abroad. When I’m not writing code or designing user interfaces, I usually work on improving my skills by learning new programming languages or studying foreign languages."
  ],
  socials: {
    linkedin: "https://linkedin.com/in/fikriachmada",
    github: "https://github.com/Feek18",
    dribbble: "https://dribbble.com/Fikribintang"
  }
};

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend & Core",
    skills: ["HTML", "CSS/SASS", "Tailwind CSS", "JavaScript", "React.js", "Next.js", "TypeScript"]
  },
  {
    title: "Design Tools & Methods",
    skills: ["Figma", "Wireframing", "Prototyping", "Responsive UI/UX Design", "Design Systems"]
  },
  {
    title: "Currently Learning",
    skills: ["Ruby on Rails", "Hotwire (Turbo + Stimulus)", "Backend Basics"]
  }
];

export const projectsData: Project[] = [
  {
    id: "room-production",
    title: "Room Production",
    tagline: "Garment brand identity website featuring complex catalog transitions.",
    description: "An elegant, highly aesthetic web app designed for Room Production (previously Youniform) during their company rebranding phase.",
    context: "Needed a clean, minimal showcase app to communicate their new identity, premium clothing textures, and garment catalogs to international B2B clients.",
    role: "Handled full frontend development, translated design tokens, maintained pixel-perfect brand consistency during the structural rebrand, and created fluid catalog scroll animations.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    results: [
      "Successfully launched the rebranded platform with a Lighthouse performance score of 98/100.",
      "Added responsive image layouts and fluid layout transitions that keep visitors engaged.",
      "Delivered a robust codebase compliant with Vercel edge deployment constraints."
    ],
    liveUrl: "https://room-production-app.vercel.app",
    githubUrl: "https://github.com/Feek18"
  },
  {
    id: "coder",
    title: "Coder Landing Page",
    tagline: "A responsive educational profile landing page for developer training programs.",
    description: "A clean, highly responsive web interface built to introduce coding classes and developer programs.",
    context: "Developed as a graduation project from a web development training class to showcase class curriculums and programming services.",
    role: "Sole developer handling both layout prototyping in Figma and responsive frontend coding.",
    stack: ["HTML", "CSS", "Tailwind CSS", "AOS (Animate on Scroll)"],
    results: [
      "Built a clean, mobile-first responsive layout with custom mobile navigation drawers.",
      "Integrated AOS scroll animations to guide users through class curriculums.",
      "Delivered a lightweight page with excellent cross-device loading speeds."
    ],
    githubUrl: "https://github.com/Feek18/Coder"
  },
  {
    id: "project-laravel11",
    title: "Classroom Booking & Scheduling System",
    tagline: "A secure scheduling and classroom booking system utilizing QR verification.",
    description: "A comprehensive digital scheduling and booking management system built to automate classroom reservations, schedule courses (mata kuliah), and manage permissions.",
    context: "Built to solve scheduling conflicts and streamline classroom reservations in educational facilities, replacing manual paper scheduling.",
    role: "Full-stack developer implementing the reservation database schema, role-based access control, and QR-code check-in generation.",
    stack: ["Laravel 11", "PHP", "Tailwind CSS", "MySQL", "QR Code Engine"],
    results: [
      "Implemented a database schema for Classrooms (Ruangan), Courses (Mata Kuliah), and Bookings (Peminjaman).",
      "Created dynamic QR Code generators and verifiers to authenticate classroom keys on-site.",
      "Built role-based dashboards (Admin, Lecturer, Student) using Laravel gates and permissions."
    ],
    githubUrl: "https://github.com/Feek18/project-laravel11"
  },
  {
    id: "mini-project",
    title: "Laravel Social Media Platform",
    tagline: "A responsive microblogging web application with social feeds and user connections.",
    description: "A lightweight social microblogging web application featuring full posting functionality, commenting, likes, favorites, and user follower relationships.",
    context: "Exploratory project mapping out Laravel relations (one-to-many, many-to-many polymorphic relationships) for complex social interactions.",
    role: "Full-stack developer designing the database migrations, posting engines, like/favorite triggers, and responsive UI feeds.",
    stack: ["Laravel", "PHP", "Tailwind CSS", "MySQL", "Blade Templates"],
    results: [
      "Designed a robust relational database schema to support follower connections, replies, favorites, and post likes.",
      "Built reactive post and comment feeds with likes and comment replies.",
      "Implemented personal profile pages showcasing user activities and follower counts."
    ],
    githubUrl: "https://github.com/Feek18/mini-project"
  }
];

export const experienceData: Experience[] = [
  {
    role: "Fullstack Developer",
    company: "PT. SUM Digital Konsultan",
    duration: "Nov 2025 - Present",
    description: "• Contribute to Akasa SkyLens, a drone booking and cinematography platform, working across admin-facing features and verification on operator side.\n• Gaining hands-on professional experience with Ruby on Rails and Hotwire (Turbo Streams + Stimulus) on the job — building on a frontend foundation to take on full-stack tasks.\n• Helped implement a multi-step checkout flow with email-based OTP verification and a customer identity/session system.\n• Built UI features including a Stimulus-based toast notification system, dark/light theme switching with Tailwind CSS, and an operator-facing QR code verification flow."
  },
  {
    role: "Frontend Web Developer Intern",
    company: "PT. Appkey",
    duration: "Aug 2024",
    description: "• Participated in developing a real website project with the team.\n• Fixed several bugs and added features according to the client’s wishes.\n• Held meetings with the team to achieve common goals.\n• Optimize CSS and image assets, reducing loading time on the main page.\n• Collaborate with the QA team to add test data and optimize map display with Leaflet JS."
  }
];
