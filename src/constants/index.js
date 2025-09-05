import { title } from "framer-motion/m";
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
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id:"resume",
      title:"Resume",
    }
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
    },
  
    {
      name: "git",
      icon: git,
    },
  ];
  
 const experiences = [
  {
    title: "MERN Stack Developer Intern",
    company_name: "Urban Orbits",
    date: "April 2025 – July 2025",
    location: "Remote – Noida, Uttar Pradesh",
    points: [
      "Built and optimized 18+ REST APIs using Node.js and Express, reducing API response time by 50% through query optimization and MongoDB indexing.",
      "Implemented secure user authentication and role-based authorization with JWT and bcrypt, ensuring data protection and controlled access.",
      "Developed 25+ reusable, responsive React components with TailwindCSS and Context API, enhancing UI consistency across web and mobile platforms.",
      "Integrated third-party APIs (payment gateway, email services) to deliver seamless real-world functionality and improve user experience."
    ],
  },
];

  
  
  
  cconst projects = [
  {
    name: "Edemy - An LMS Website",
    description:
      "A full-stack e-learning platform for course sales with secure Stripe payment integration, role-based access control, and real-time synchronization using Clerk and Stripe webhooks.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "clerk", color: "orange-text-gradient" },
      { name: "stripe", color: "purple-text-gradient" },
    ],
    image: edemy, // replace with your imported project image
    source_code_link: "https://github.com/vishal9887/LMS",
  },
  {
    name: "Food Delivery App",
    description:
      "A full-stack MERN food ordering system with a 3-step checkout flow, secure Stripe payments, live order tracking, and an admin panel supporting full CRUD operations and image uploads.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "stripe", color: "purple-text-gradient" },
      { name: "tailwind", color: "orange-text-gradient" },
    ],
    image: fooddelivery, // replace with your imported project image
    source_code_link: "https://github.com/vishal9887/Food_Delivery",
  },
  {
    name: "Real-Time Chat App",
    description:
      "A MERN-based chat application with real-time bi-directional messaging using Socket.io, JWT-secured authentication, and Cloudinary-powered media uploads.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "socketio", color: "purple-text-gradient" },
      { name: "tailwind", color: "orange-text-gradient" },
    ],
    image: chatapp, // replace with your imported project image
    source_code_link: "https://github.com/vishal9887/Chatapplication",
  },
];

  
  export { services, technologies, experiences,  projects };
