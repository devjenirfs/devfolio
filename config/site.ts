export const siteConfig = {
  name: "Jeniffer Souza",
  title: "Software Engineer | Frontend Developer",
  description: "Building scalable, accessible, and modern web applications. Software Engineer passionate about creating fast, user-focused digital experiences.",
  slogan: "Building scalable, accessible, and modern web applications.",
  
  // Navigation
  nav: [
    { name: "About me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ],
  
  // Social links
  social: {
    github: "https://github.com/jenirfs",
    linkedin: "https://linkedin.com/in/jenirfs",
    email: "mailto:jenirfs@example.com",
    cv: "/cv-jeniffer-souza.pdf", // Add your CV PDF here
  },
  
  // Site URLs
  url: "https://jenirfs.dev",
  
  // Brand colors
  colors: {
    primary: "#101F3D",
    secondary: "#203660", 
    accent: "#84ADFF",
  },
} as const;
