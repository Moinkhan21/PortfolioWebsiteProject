import { useEffect, useRef } from "react";
import { PROJECTS } from "../constants"; // Importing project data
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP's ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null); // Ref for the projects section

  useEffect(() => {
    // GSAP animations for project cards
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        opacity: 0, // Start fully transparent
        y: 50, // Start slightly below
        duration: 1.2, // Animation duration
        ease: "power3.out", // Smooth easing effect
        stagger: 0.3, // Stagger animation for cards
        scrollTrigger: {
          trigger: projectsRef.current, // Trigger animation on the projects section
          start: "top 80%", // Start animation when 80% of the section is visible
          toggleActions: "play none none none", // Play animation once
        },
      });
    }, projectsRef);

    // Cleanup on component unmount
    return () => ctx.revert();
  }, []);

  return (
    <section className="pt-16" id="projects" ref={projectsRef}>
      {/* Projects Section */}
      <div className="px-4">
        {/* Section Heading */}
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">Projects</h2>

        {/* Project Cards Container */}
        <div className="flex flex-wrap justify-center">
          {PROJECTS.map((project) => (
            <div
              key={project.id} // Unique key for each project
              className="project-card flex w-full flex-col p-4 md:w-1/2 lg:w-1/3"
            >
              <div className="flex-grow overflow-hidden rounded-lg border border-purple-300/20">
                {/* Project Image with Link */}
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.imgSrc} // Dynamic image source
                    alt={project.title} // Alt text for accessibility
                    className="h-60 w-full object-cover" // Ensures proper scaling
                  />
                </a>
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-medium lg:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm">{project.description}</p>
                  <div className="mb-4">
                    <strong>Tech Stack:</strong>
                    {/* Tech Stack as Badges */}
                    <ul className="mt-3">
                      {project.techStack.map((tech, index) => (
                        <li
                          key={index}
                          className="mb-1 mr-2 inline-block rounded-full border-2 border-pink-500/30 px-3 py-1 text-sm font-semibold"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
