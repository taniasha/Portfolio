export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
}

export const projects: Project[] = [
  {
    id: "vedpath",
    title: "VedPath",
    category: "Full Stack MERN Platform",
    description:
      "A sacred Vedic literature & audio platform featuring integrated audio player, interactive scripture catalog, cart & checkout, luxury dark gold theme, and full admin dashboard.",
    tags: ["React", "Node.js", "Express", "MongoDB Atlas", "Netlify", "Render"],
    image: "/vedpath.jpg",
    link: "https://vedpath.netlify.app/",
    github: "https://github.com/taniasha/VedPath",
  },
  {
    id: "rent-ease",
    title: "Rent Ease",
    category: "Full Stack Web App",
    description:
      "A modern property rental marketplace featuring server-rendered listings, dynamic search filters, tenant dashboards, payment tracking, and complete rental state management.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Node.js", "MongoDB", "Express"],
    image: "/rent.png",
    link: "https://rent-easelive.netlify.app",
    github: "https://github.com/taniasha/RentEase",
  },
  {
    id: "travel-agency",
    title: "Travel Agency",
    category: "Frontend & Web App",
    description:
      "A high-end travel experience platform showcasing curated tour packages, responsive destination galleries, interactive itinerary booking, and modern fluid animations.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Vercel"],
    image: "/travel.jpg",
    link: "https://travel-agency-project-deploy.vercel.app/",
    github: "https://github.com/taniasha/Travel_agency",
  },
];