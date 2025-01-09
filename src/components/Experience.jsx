// Importing necessary packages and data
import { useEffect, useRef } from "react"; // React hooks for lifecycle management and DOM manipulation
import { EXPERIENCES } from "../constants"; // Array containing experience data
import { gsap } from "gsap"; // GSAP for animations
import { ScrollTrigger } from "gsap/ScrollTrigger"; // GSAP plugin for scroll-based animations

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const experienceRef = useRef(null); // Reference for the experience section

  useEffect(() => {
    // Scoped GSAP animations to prevent conflicts
    const ctx = gsap.context(() => {
      // Animation for each experience item
      gsap.from(".experience-item", {
        opacity: 0, // Start with invisible elements
        y: 50, // Move upwards by 50px during animation
        duration: 1, // Each animation lasts 1 second
        ease: "power3.out", // Smooth easing for a professional look
        stagger: 0.3, // Adds a delay between the animation of each item
        scrollTrigger: {
          trigger: experienceRef.current, // Triggers when the section enters the viewport
          start: "top 80%", // Begins animation when the top of the section is 80% visible
          toggleActions: "play none none none", // Animation only plays once
        },
      });
    }, experienceRef);

    // Cleanup function to revert animations on unmount
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16" id="work" ref={experienceRef}>
      {/* Wrapper for content with consistent width */}
      <div className="mx-auto max-w-4xl px-4">
        {/* Section title */}
        <h2 className="mb-12 text-center text-3xl font-medium lg:text-4xl">
          Experience
        </h2>

        {/* Dynamic rendering of experience items */}
        <div className="flex flex-col space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={index} // Unique key for each item
              className="experience-item flex flex-col items-start justify-between md:flex-row"
            >
              {/* Year range */}
              <div className="w-full text-sm font-semibold text-stone-300 md:w-1/4 lg:text-lg">
                {exp.yearRange}
              </div>

              {/* Role, company, description, and tech stack */}
              <div className="w-full md:w-3/4">
                {/* Job role and company */}
                <h3 className="mb-2 text-lg lg:text-2xl">
                  {exp.role} -{" "}
                  <span className="bg-gradient-to-b from-purple-400 to-pink-200 bg-clip-text text-transparent">
                    {exp.company}
                  </span>
                </h3>

                {/* Job description */}
                <p className="mb-4 text-sm lg:text-base">{exp.description}</p>

                {/* Tech stack as styled tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, id) => (
                    <span
                      key={id} // Unique key for each tech tag
                      className="rounded-full border-2 border-pink-500/30 px-3 py-1 text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
