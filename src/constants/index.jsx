// Importing assets for projects and testimonials
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.jpg";
import project8 from "../assets/project8.jpg";
import project9 from "../assets/project9.jpg";
import project10 from "../assets/project10.jpg";
import project11 from "../assets/project11.jpg";
import project12 from "../assets/project12.jpg";
import personImage from "../assets/testimonial.jpg";


// Importing icons from Remix Icon for skills representation
import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiCodeSSlashLine,
  RiBootstrapLine,
  RiNextjsLine,
  RiDeviceLine,
  RiTeamLine,
  RiTimeLine,
  RiToolsLine,
  RiMessageLine,
} from "@remixicon/react";

// Navigation links for the header or navbar
export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" }, // Link to the projects section
  { label: "Skills", href: "#skills" }, // Link to the skills section
  { label: "Work Experience", href: "#work" }, // Link to work experience section
  { label: "Education", href: "#education" }, // Link to education section
  { label: "Contact", href: "#contact" }, // Link to contact section
];

// Profile details for the hero or introduction section
export const PROFILE = {
  name: "Moinkhan", // Name of the person
  role: "Frontend Developer", // Job role
  subheading: // A brief description or tagline
    "Passionate Frontend Developer skilled in HTML, CSS, JavaScript, ReactJS, and NextJS, with expertise in building responsive, user-friendly web interfaces. Proficient in Bootstrap, Redux Toolkit, and performance optimization, delivering high-quality projects through problem-solving, teamwork, and effective time management.",
};

// Project details for the portfolio/projects section
export const PROJECTS = [
  {
    id: 1, // Unique identifier
    title: "Climate Action Awareness", // Project title
    description: // Brief description of the project
      "The Climate Action Awareness project educates the public on climate change impacts and promotes sustainable practices. Built with HTML, CSS, JavaScript, React, and Tailwind CSS, it fosters community engagement and empowers action for a sustainable future.",
    techStack: ["HTML", "CSS", "JavaScript", "React", "Tailwind-CSS"], // Technologies used
    imgSrc: project1, // Image source for the project
    link: "https://climate-action-awareness-pi.vercel.app/", // Link to the live project or demo
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "The Weather App project, built with React JS and Open Weather Map API, displays real-time weather data, including temperature, humidity, and wind speed. It features dynamic city search, error handling for invalid inputs, and a responsive design with styled components and custom weather icons for a user-friendly interface.",
    techStack: ["JavaScript", "React", "CSS"],
    imgSrc: project2,
    link: "https://weather-app-rouge-kappa-84.vercel.app/",
  },
  {
    id: 3,
    title: "Landing Page",
    description:
      "The Landing Page Project features a responsive Navbar with a mobile drawer, a gradient-text hero section, and autoplay video integration. It includes a clean UI showcasing product features, pricing cards, testimonials, and a footer, built using Vite and Tailwind CSS.",
    techStack: ["JavaScript", "React", "Tailwind-CSS"],
    imgSrc: project3,
    link: "https://landing-page-rust-tau-24.vercel.app/",
  },
  {
    id: 4,
    title: "Analog & Digital Clock",
    description:
      "The Analog & Digital Clock project combines an analog clock with rotating hands and a digital clock displaying time in a 12-hour format with AM/PM indicators. Built using HTML, CSS, and JavaScript, it features smooth animations, real-time updates, and a responsive design for an engaging user experience.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imgSrc: project4,
    link: "https://analog-and-digital-clock-nine.vercel.app/",
  },
  {
    id: 5,
    title: "To-Do App",
    description:
      "The To-Do App project allows users to manage tasks with features like adding, marking as complete, and deleting items. Built using HTML, CSS, and JavaScript, it includes a responsive design, local storage integration for data persistence, and an intuitive user interface.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imgSrc: project5,
    link: "https://to-do-app-project-seven.vercel.app/",
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "This is a Music Player built with HTML, CSS, and JavaScript. It features play/pause functionality, a song progress bar, and navigation controls. The player is designed with a modern and minimalist interface, showcasing a song thumbnail, title, and artist, providing a smooth, interactive user experience.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imgSrc: project6,
    link: "https://music-player-lilac-eight.vercel.app/",
  },
  {
    id: 7,
    title: "Notes App",
    description:
      "A dynamic and responsive Notes App built using HTML, CSS, and JavaScript. Users can create, edit, and delete notes, with changes saved to localStorage for persistence. The app features a clean interface with a button to add new notes and an option to clear all notes.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imgSrc: project7,
    link: "https://notes-app-gray-three.vercel.app/",
  },
  {
    id: 8,
    title: "Age Calculator",
    description:
      "A simple and interactive Age Calculator built using HTML, CSS, and JavaScript. The app allows users to input their birthdate and instantly calculates their age in years, months, and days. The design is responsive, with a clean interface and intuitive layout.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imgSrc: project8,
    link: "https://age-calculator-project-seven.vercel.app/",
  },
  {
    id: 9,
    title: "QR Code Generator",
    description:
      "A user-friendly QR Code Generator built with HTML, CSS, and JavaScript. It allows users to input text or URLs and generates a scannable QR code instantly. The design is clean and responsive, with an intuitive interface for easy interaction.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imgSrc: project9,
    link: "https://qr-code-generator-mocha-mu.vercel.app/",
  },
  {
    id: 10,
    title: "Quiz App",
    description:
      "A simple and interactive quiz app built with HTML, CSS, and JavaScript. It presents multiple-choice questions, tracks user responses, and calculates the score at the end of the quiz. The app features smooth navigation, providing instant feedback on answers and an option to restart the quiz.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imgSrc: project10,
    link: "https://quiz-app-psi-seven-68.vercel.app/",
  },
  {
    id: 11,
    title: "Product Page Design",
    description:
      "This project demonstrates the design and functionality of a product page with an interactive image gallery, product details, and customization options. It features dynamic image switching with control buttons, size and color selection using radio buttons, and quantity input for purchasing. The design focuses on user experience with a clean, responsive layout and smooth interactions.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imgSrc: project11,
    link: "https://product-page-design-xi.vercel.app/",
  },
  {
    id: 12,
    title: "Checklist",
    description:
      "This project allows users to select names from a dynamically generated list of checkboxes. The selected names are displayed in real-time as users check or uncheck the boxes. It features custom-styled checkboxes and a responsive layout for a smooth and interactive experience.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imgSrc: project12,
    link: "https://checklist-five-eosin.vercel.app/",
  },
];

// Skills section data with icons and names
export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />, // Orange-colored HTML5 icon
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />, // Blue-colored CSS3 icon
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />, // Yellow-colored JavaScript icon
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />, // Blue-colored React icon
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />, // Teal-colored Tailwind CSS icon
  },
  {
    name: "Bootstrap",
    icon: <RiBootstrapLine className="text-purple-500" />, // Purple-colored Bootstrap icon
  },
  {
    name: "NextJS",
    icon: <RiNextjsLine className="text-gray-700" />, // Gray-colored NextJS icon
  },
  {
    name: "Responsive Web Design",
    icon: <RiDeviceLine className="text-green-500" />, // Green-colored Wifi icon (representing responsive design)
  },
  {
    name: "Team Collaboration",
    icon: <RiTeamLine className="text-blue-600" />, // Blue-colored Team Collaboration icon
  },
  {
    name: "Time Management",
    icon: <RiTimeLine className="text-orange-500" />, // Orange-colored Time Management icon
  },
  {
    name: "Tools & Technology",
    icon: <RiToolsLine className="text-purple-500" />, // Orange-colored Time Management icon
  },
  {
    name: "Communication Skills",
    icon: <RiMessageLine className="text-red-500" />, // Red-colored Communication Skills icon
  },
];

// Work experiences for the resume or career section
export const EXPERIENCES = [
  {
    yearRange: "Jun 2024 - Aug 2024", // Timeframe
    role: "Frontend Developer", // Job title
    company: "Front End Web Development (FEWD) Intern", // Company name
    description: // Summary of responsibilities and accomplishments
      "Completed industry-relevant courses on IBM SkillsBuild, enhancing skills through projects and masterclasses. Earned certifications from IBM SkillsBuild and CSRBOX, showcasing real-world expertise.",
    techStack: ["Javascript", "React.js", "Next.js"], // Tech stack used
  },
  {
    yearRange: "Jan 2024 - Apr 2024",
    role: "Web Developer Intern",
    company: "Dynamisity Pvt. Ltd",
    description:
      "Built web applications using HTML, CSS, JavaScript, and other technologies, focusing on responsive and user-friendly designs. Collaborated on project requirements, participated in code reviews, and enhanced skills through training sessions.",
    techStack: ["HTML", "CSS", "Javascript", "Bootstrap", "Responsive Web Design"],
  },
];

// Education details for the education section
export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Engineering in Computer Engineering", // Degree name
    institution: "Sigma University", // Educational institution
    duration: "2020 - 2024", // Timeframe
    description: // Additional info or highlights
      "Graduated with honors in Computer Engineering, specializing in web development, and achieved an 8.65 CGPA.",
  },
];

// Testimonial data for the testimonial section
export const TESTIMONIAL = {
  name: "Mitanshu Patel", // Name of the person providing the testimonial
  title: "Graduate Trainee, PMC", // Title/position of the person
  quote: // Testimonial text
    "Working with Moinkhan was a game-changer. His proficiency in Frontend development helped us scale our project of Climate Action Awareness with ease. His attention to detail and passion for quality are unmatched.",
  image: personImage, // Image source for the testimonial
};
