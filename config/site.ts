export const siteConfig = {
  name: "Jeniffer Souza",
  title: "Software Engineer",
  description: "JS is my name, and my code. Portfolio of Jeniffer Souza, a frontend software engineer specialized in JavaScript and Next.js.",
  slogan: "JS is my name, and my code.",
  
  // Navigation
  nav: [
    { name: "About me", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
  
  // Social links
  social: {
    github: "https://github.com/jenirfs",
    linkedin: "https://linkedin.com/in/jenirfs",
    twitter: "https://twitter.com/jenirfs",
    email: "mailto:jenirfs@example.com",
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
