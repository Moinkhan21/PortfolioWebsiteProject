// Importing all components required for the app
import Contact from "./components/Contact"; 
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    // Main container for the entire application
    <main 
      className="mx-auto max-w-7xl overflow-x-hidden antialiased"
      // Centered content with limited width, no horizontal overflow, and smooth font rendering
    >
      {/* Fixed background image styling */}
      <div 
        className="bg-image fixed inset-0 bg-cover bg-fixed bg-center"
        // `inset-0` ensures the background covers the entire viewport
        // `bg-cover` adjusts the image to maintain its aspect ratio while covering the area
        // `bg-fixed` keeps the background static when scrolling
        // `bg-center` centers the background image
      ></div>

      {/* Content wrapper positioned above the background */}
      <div 
        className="relative z-10"
        // `relative` ensures the content positions correctly relative to the `fixed` background
        // `z-10` places the content above the background (higher stacking order)
      >
        {/* Navigation bar at the top */}
        <Navbar />

        {/* Hero section, likely a landing page intro */}
        <Hero />

        {/* Projects section showcasing completed work */}
        <Projects />

        {/* Skills section listing technical expertise */}
        <Skills />

        {/* Experience section for work history */}
        <Experience />

        {/* Education section for academic qualifications */}
        <Education />

        {/* Testimonials section for user/client reviews */}
        <Testimonials />

        {/* Contact section with a form or contact details */}
        <Contact />
      </div>
    </main>
  );
};

export default App;
