import { useEffect, useRef } from "react";
import { SKILLS } from "../constants"; // Importing skills data
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registering GSAP's ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null); // Reference to the skills section

  useEffect(() => {
    // GSAP animation setup
    const ctx = gsap.context(() => {
      gsap.from(".skill-item", {
        opacity: 0, // Start fully transparent
        y: 50, // Start slightly below the viewport
        duration: 1, // Animation duration for each item
        ease: "power3.out", // Smooth easing effect
        stagger: 0.2, // Delay between animations of consecutive items
        scrollTrigger: {
          trigger: skillsRef.current, // Trigger animation when skills section enters the viewport
          start: "top 80%", // Start animation when 80% of the section is visible
          toggleActions: "play none none none", // Play animation once
        },
      });
    }, skillsRef);

    // Cleanup on component unmount
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16" id="skills" ref={skillsRef}>
      {/* Skills Section */}
      <div className="px-4">
        {/* Section Heading */}
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {SKILLS.map((skill, index) => (
            <div
              key={index} // Unique key for each skill
              className="skill-item flex flex-col items-center text-center"
            >
              {/* Skill Icon */}
              <div className="mb-4 text-4xl">{skill.icon}</div>
              {/* Skill Name */}
              <h3 className="mb-2 text-lg font-medium lg:text-xl">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
