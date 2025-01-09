// Import required packages and constants
import { useEffect, useRef } from "react"; // React hooks for lifecycle and DOM referencing
import { EDUCATION } from "../constants"; // Constants file containing the education data
import { gsap } from "gsap"; // GSAP for animations
import { ScrollTrigger } from "gsap/ScrollTrigger"; // ScrollTrigger for scroll-based animations

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Education = () => {
    const educationRef = useRef(null); // Reference to the education section DOM element

    useEffect(() => {
        // GSAP context to scope animations and avoid conflicts
        const ctx = gsap.context(() => {
            // Animation for education items
            gsap.from(".education-item", {
                opacity: 0, // Start with zero opacity
                y: 50, // Slide upward from 50px
                duration: 1, // Duration of the animation
                ease: "power3.out", // Smooth easing effect
                stagger: 0.3, // Delay between animations for each item
                scrollTrigger: {
                    trigger: educationRef.current, // Element that triggers the animation
                    start: "top 80%", // Animation starts when 80% of the section is in view
                    toggleActions: "play none none none", // Play animation only once
                },
            });
        }, educationRef);

        // Cleanup to revert animations on component unmount
        return () => ctx.revert();
    }, []);

    return (
        <section className="py-16" id="education" ref={educationRef}>
            {/* Container for the education section */}
            <div className="mx-auto max-w-full px-4">
                {/* Section heading */}
                <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
                    Education
                </h2>

                {/* List of education items rendered dynamically */}
                <div className="flex flex-col space-y-8">
                    {EDUCATION.map((edu) => (
                        <div
                            key={edu.id} // Unique key for each item
                            className="education-item rounded-xl border border-purple-300/20 p-6"
                        >
                            {/* Degree or program title */}
                            <h3 className="mb-2 text-lg lg:text-2xl">
                                {edu.degree}
                            </h3>

                            {/* Institution or university name */}
                            <h4 className="text-lg font-medium lg:text-xl">
                                {edu.institution}
                            </h4>

                            {/* Duration of the program */}
                            <p className="text-sm lg:text-base">{edu.duration}</p>

                            {/* Description or highlights of the program */}
                            <p className="mt-4">{edu.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
