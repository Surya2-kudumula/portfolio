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
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },

  {
    id: "project",
    title: "Projects",
  },
  {
    id: "training",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Data Scientist",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];


const technologies = [

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },

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
    name: "redux",
    icon: redux,
  },
  {
    name: "tailwind",
    icon: tailwind,
  },
  {
    name: "typescript",
    icon: typescript,
  },
  {
    name: "figma",
    icon: figma,
  },

  {
    name: "git",
    icon: git,
  },


];

const experiences = [
  {
    title: "Bachelor of Technology - CSE",
    company_name: "Lovely Professional University",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sep 2022 - Present",
    points: [
      "Studying core Computer Science concepts including Data Structures, Algorithms, and Database Systems.",
      "Completed projects in Android development, web applications, and data analysis.",
      "Certified in Meta Android Development, C++, and Algorithm Specialization via Coursera.",
      "Active participant in coding contests and real-world tech projects."
    ],
  },
  {
    title: "Intermediate Education - MPC",
    company_name: "Narayana Junior College",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Apr 2020 - Mar 2022",
    points: [
      "Focused on Mathematics, Physics, and Chemistry with strong academic performance.",
      "Developed a strong foundation in analytical problem solving and quantitative reasoning.",
      "Participated in science exhibitions and coding clubs during this time."
    ],
  },
  {
    title: "Matriculation",
    company_name: "Fortune Butterfly Sr. Secondary School",
    icon: shopify,
    iconBg: "#383E56",
    date: "Apr 2019 - Mar 2020",
    points: [
      "Achieved academic excellence and secured 1st rank in Mathematics.",
      "Built a strong foundation in logical reasoning and computer fundamentals.",
      "Actively participated in school-level competitions and science fairs."
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MediCare",
    description:
      "An Android app that enables users to book doctor appointments, set medicine reminders, and upload health documents. Includes Firebase-based login and navigation tabs for Home, Search, Reminder, and Profile.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "androidstudio",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/kudumulasurya/Medicare",
  },
  {
    name: "IPL Data Analytics Dashboard",
    description:
      "Interactive Excel dashboard visualizing IPL trends from 2008 to 2023 with dynamic charts, slicers, and team/player stats for insights on performance and match outcomes.",
    tags: [
      {
        name: "Excel",
        color: "blue-text-gradient",
      },
      {
        name: "Dataanalytics",
        color: "green-text-gradient",
      },
      {
        name: "ipl",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/kudumulasurya/IPL-Dashboard",
  },
  {
    name: "Education Management System",
    description:
      "Responsive web platform for students to access subject-wise YouTube videos, take interactive quizzes, receive instant feedback, and track learning progress.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://kudumulasurya.github.io/education/",
  },
];

export { services, technologies, experiences, testimonials, projects };
