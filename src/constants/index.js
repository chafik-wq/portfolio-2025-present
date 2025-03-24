import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nextjs,
  ex,
  python,
  hero_section_snapshot
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Reactjs developer",
    icon: web,
  },
  {
    title: "Nextjs developer",
    icon: mobile,
  },
  {
    title: "Expressjs developer",
    icon: backend,
  },
  {
    title: "Wordpress site manager",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Express JS",
    icon: ex,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Frontend Developer & Growing Full-Stack Skills",
    company_name: "Freelance & Personal Projects",
    icon: web,
    iconBg: "#383E56",
    date: "2021 - Present",
    points: [
      "Building web applications using JavaScript, React.js, and Next.js, focusing on performance and user experience.",
      "Working on personal projects to deepen expertise in frontend technologies and explore backend development.",
      "Learning and gaining experience in Express.js, Node.js, and Python for full-stack capabilities.",
      "Continuously improving coding practices and staying up-to-date with modern web technologies.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with Fake1 was an absolute pleasure! Their attention to detail and commitment to quality are unmatched.",
    name: "Alex Johnson",
    designation: "CEO",
    company: "Tech Innovations",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    testimonial:
      "Fake2 completely transformed our website, making it more responsive and user-friendly. Highly recommended!",
    name: "Emily Roberts",
    designation: "Marketing Director",
    company: "Creative Solutions",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    testimonial:
      "We were struggling with slow load times until Fake3 optimized our platform. Now, it's lightning fast!",
    name: "Michael Smith",
    designation: "CTO",
    company: "Speedy Web Services",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    testimonial:
      "Fake4 provided us with a sleek and modern website that exceeded our expectations. Fantastic work!",
    name: "Jessica Davis",
    designation: "Founder",
    company: "DesignPro",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
  },
  {
    testimonial:
      "Thanks to Fake5, our conversion rates have skyrocketed. Their expertise in UI/UX is phenomenal!",
    name: "Daniel Martinez",
    designation: "Product Manager",
    company: "EcomBoost",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "The project idea and base code came from JavaScript Mastery. I improved it by fixing console errors and warnings, optimizing components using useCallback, useMemo, and memo, and upgrading libraries to their latest releases. The only exception was Tailwind CSS, which I kept at version 3.4.17, the latest v3 release. Additionally, I replaced the default browser alerts with SweetAlert for a better user experience.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Vitejs",
        color: "green-text-gradient",
      },
      {
        name: "Threejs",
        color: "green-text-gradient",
      },
      {
        name: "Npm",
        color: "pink-text-gradient",
      },
      {
        name: "Git",
        color: "red-text-gradient",
      },
      {
        name: "Github",
        color: "yallow-text-gradient",
      },
      {
        name: "Readme.md",
        color: "pink-text-gradient",
      },
    ],
    image: hero_section_snapshot,
    source_code_link: "https://github.com/chafik-wq/portfolio-2025-present",
  },
  {
    name: "Fake2",
    description:
      "Fake description 2 for another placeholder project that serves as an example of structured data representation.",
    tags: [
      {
        name: "fake-tech4",
        color: "blue-text-gradient",
      },
      {
        name: "fake-tech5",
        color: "green-text-gradient",
      },
      {
        name: "fake-tech6",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/fake2",
  },
  {
    name: "Fake3",
    description:
      "Fake description 3 giving an overview of another hypothetical project with similar structured content.",
    tags: [
      {
        name: "fake-tech7",
        color: "blue-text-gradient",
      },
      {
        name: "fake-tech8",
        color: "green-text-gradient",
      },
      {
        name: "fake-tech9",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/fake3",
  },
];

export { services, technologies, experiences, testimonials, projects };
