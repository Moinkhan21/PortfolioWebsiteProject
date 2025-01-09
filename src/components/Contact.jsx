// Import required packages and components
import { RiGithubFill, RiLinkedinBoxFill, RiTwitterFill } from "@remixicon/react"; // Social media icons
import { useEffect, useRef } from "react"; // React hooks for lifecycle and referencing DOM elements
import { gsap } from "gsap"; // GSAP for animations
import { ScrollTrigger } from "gsap/ScrollTrigger"; // ScrollTrigger for scroll-based animations

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const contactRef = useRef(null); // Create a ref to target the section DOM element

    useEffect(() => {
        // GSAP animation context to avoid conflicts and isolate animations
        const ctx = gsap.context(() => {
            // Animation for the contact text elements (heading and paragraph)
            gsap.from(".contact-text", {
                opacity: 0, // Start with zero opacity
                y: 30, // Slide upward from 30px
                duration: 1, // Animation duration
                ease: "power3.out", // Smooth easing effect
                scrollTrigger: {
                    trigger: contactRef.current, // Element that triggers the animation
                    start: "top 80%", // Start animation when 80% of the section is in view
                    toggleActions: "play none none none", // Play animation once
                },
            });

            // Animation for the social media icons
            gsap.from(".contact-icon", {
                opacity: 0, // Start with zero opacity
                y: 20, // Slide upward from 20px
                duration: 1, // Animation duration
                ease: "power3.out", // Smooth easing effect
                stagger: 0.4, // Delay between each icon animation
                scrollTrigger: {
                    trigger: contactRef.current, // Element that triggers the animation
                    start: "top 80%", // Start animation when 80% of the section is in view
                    toggleActions: "play none none none", // Play animation once
                },
            });
        }, contactRef);

        // Cleanup animation context when the component unmounts
        return () => ctx.revert();
    }, []);

    return (
        <section className="py-16" id="contact" ref={contactRef}>
            {/* Container for the contact section */}
            <div className="px-4 text-center">
                {/* Contact heading with animation class */}
                <h2 className="contact-text mb-8 text-3xl font-medium lg:text-4xl">Contact</h2>

                {/* Contact description with email link */}
                <p className="contact-text mb-4 text-lg lg:text-xl">
                    Feel free to reach out to me via email:{" "}
                    <a href="mailto:david@example.com" className="border-b">
                        moinmykhan07@gmail.com
                    </a>
                </p>

                {/* Social media icons container */}
                <div className="contact-icon mt-8 flex justify-center space-x-6">
                    {/* LinkedIn icon with animation class and accessibility */}
                    <a
                        href="https://www.linkedin.com/in/moinkhan021"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-icon"
                        aria-label="Visit my LinkedIn profile"
                    >
                        <RiLinkedinBoxFill className="text-3xl" />
                    </a>

                    {/* GitHub icon with animation class and accessibility */}
                    <a
                        href="https://github.com/Moinkhan21"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-icon"
                        aria-label="Visit my Github profile"
                    >
                        <RiGithubFill className="text-3xl" />
                    </a>

                    {/* Twitter icon with animation class and accessibility */}
                    <a
                        href="https://x.com/Moinkhan921"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-icon"
                        aria-label="Visit my Twitter profile"
                    >
                        <RiTwitterFill className="text-3xl" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
