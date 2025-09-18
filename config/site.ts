export const siteConfig = {
  name: "Jeniffer Souza",
  title: "Software Engineer | Frontend Developer",
  description: "Building scalable, accessible, and modern web applications. Software Engineer passionate about creating fast, user-focused digital experiences.",
  slogan: "Building scalable, accessible, and modern web applications.",
  
  // Navigation
  nav: [
    { name: "About me", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "How I help", href: "#how-i-help" },
    { name: "Contact", href: "#contact" },
  ],
  
  // Social links
  social: {
    github: "https://github.com/devjenirfs",
    linkedin: "https://linkedin.com/in/jenirfs",
    email: "mailto:jenifferap@gmail.com",
    cv: "/CV-JenifferSouza.pdf",
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
