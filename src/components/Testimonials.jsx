import { useEffect, useRef } from "react";
import { TESTIMONIAL } from "../constants"; // Importing testimonial data from constants
import { gsap } from "gsap"; // Importing GSAP for animations
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Importing ScrollTrigger for scroll-based animations

gsap.registerPlugin(ScrollTrigger); // Registering the ScrollTrigger plugin with GSAP

const Testimonials = () => {
  // Ref to target the testimonial section for GSAP animations
  const testimonialRef = useRef(null);

  useEffect(() => {
    // Creating GSAP animations within the testimonial section
    const ctx = gsap.context(() => {
      // Animating the testimonial image
      gsap.from(".testimonial-image", {
        opacity: 0, // Starting with the image being invisible
        scale: 0.8, // Scaling down the image
        duration: 1.2, // Duration of the animation in seconds
        ease: "power3.out", // Using an easing function for smooth animation
        scrollTrigger: {
          trigger: testimonialRef.current, // Animation starts when this section enters the viewport
          start: "top 80%", // Defines when the animation should begin
          toggleActions: "play none none none", // Play animation on entering and do nothing otherwise
        },
      });

      // Animating the testimonial quote text
      gsap.from(".testimonial-quote", {
        opacity: 0, // Starting with the quote being invisible
        y: 30, // Moving the quote 30px down initially
        duration: 1, // Duration of the animation
        ease: "power3.out", // Smooth easing
        delay: 0.4, // Slight delay for sequential animations
        scrollTrigger: {
          trigger: testimonialRef.current, // Animation is triggered by the section
          start: "top 80%", // Begins when the section is 80% into the viewport
          toggleActions: "play none none none", // Play on entry
        },
      });

      // Animating the testimonial info (name and title)
      gsap.from(".testimonial-info", {
        opacity: 0, // Starting with the info being invisible
        y: 20, // Moving the info 20px down initially
        duration: 1, // Animation duration
        ease: "power3.out", // Smooth easing
        delay: 0.4, // Matches the delay of the quote animation for synchronization
        scrollTrigger: {
          trigger: testimonialRef.current, // Trigger animation on this section
          start: "top 80%", // Starts at 80% viewport height
          toggleActions: "play none none none", // Play on entry
        },
      });
    }, testimonialRef);

    // Cleanup function to revert GSAP animations when the component unmounts
    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonial" className="py-16" ref={testimonialRef}>
      {/* Section title */}
      <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
        Testimonial
      </h2>

      <div className="px-4">
        <div className="flex flex-col items-center text-center">
          {/* Testimonial image */}
          <img
            src={TESTIMONIAL.image}
            alt={TESTIMONIAL.name}
            className="testimonial-image mb-6 h-24 w-24 rounded-full border-4 object-cover"
          />

          {/* Testimonial quote */}
          <blockquote className="testimonial-quote max-w-xl text-lg leading-relaxed lg:text-2xl">
            &quot;{TESTIMONIAL.quote}&quot;
          </blockquote>

          {/* Testimonial name and title */}
          <div className="testimonial-info mt-4 text-lg">
            <p>{TESTIMONIAL.name}</p>
            <p className="text-sm">{TESTIMONIAL.title}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
