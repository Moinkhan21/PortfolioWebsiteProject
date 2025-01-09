// Importing required modules, assets, and dependencies
import { useEffect, useRef } from "react"; // React hooks for managing lifecycle and DOM references
import { PROFILE } from "../constants"; // PROFILE object containing dynamic content
import { RiArrowRightUpBoxLine } from "@remixicon/react"; // Remix icon for the download button
import moinkhan from "../assets/Moinkhan.jpg"; // Profile image import
import { gsap } from "gsap"; // GSAP for animations

const Hero = () => {
  const heroRef = useRef(null); // Ref for the hero section

  useEffect(() => {
    // Scoped GSAP animations to avoid conflicts with other components
    const ctx = gsap.context(() => {
      // Define a timeline for sequential animations
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.6 }, // Default easing and duration
      });

      // Animations for various elements in sequence
      tl.from(".hero-title", {
        opacity: 0, // Fade in
        y: -50, // Move down 50px during animation
        scale: 0.95, // Slightly shrink at the start
        duration: 1.2, // Duration of animation
        stagger: 0.15, // Delay between multiple elements
      })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 50, // Move up 50px during animation
            scale: 0.95, // Slightly shrink at the start
            duration: 0.9,
          },
          "-=0.4" // Overlap with the previous animation by 0.4s
        )
        .from(
          ".hero-text",
          {
            opacity: 0,
            y: 30, // Move up 30px
            duration: 0.8,
          },
          "-=0.4" // Overlap with previous animation
        )
        .from(
          ".hero-btn",
          {
            opacity: 0,
            scale: 0.9, // Slightly shrink at the start
            duration: 0.8,
          },
          "-=0.3"
        )
        .from(
          ".hero-img",
          {
            opacity: 0,
            y: 100, // Move up 100px
            scale: 0.9, // Slightly shrink at the start
            duration: 1.2,
          },
          "-=0.5"
        );
    }, heroRef);

    // Cleanup function to revert animations when component unmounts
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center gap-4 lg:gap-6"
      ref={heroRef} // Ref attached to the hero section for animations
    >
      {/* Title and Subheading */}
      <div className="mt-8 lg:mt-20">
        <h1 className="hero-title text-4xl uppercase lg:text-7xl">
          {PROFILE.name} {/* Dynamic name from PROFILE */}
        </h1>
        <h2 className="hero-subheading bg-gradient-to-b from-pink-200 to-purple-300 bg-clip-text text-center text-2xl tracking-tighter text-transparent">
          {PROFILE.role} {/* Dynamic role */}
        </h2>
      </div>

      {/* Hero Subtext */}
      <p className="hero-text max-w-2xl p-2 text-center text-xl tracking-tighter lg:text-2xl">
        {PROFILE.subheading} {/* Dynamic subheading */}
      </p>

      {/* Resume Download Button */}
      {/* <a
        href="/David-stones.pdf" // Path to resume
        target="_blank" // Opens in a new tab
        rel="noopener noreferrer" // Improves security
        download // Enables direct file download
        className="hero-btn mb-6 flex gap-1 rounded-full border border-pink-200/50 px-3 py-2 tracking-tighter"
      >
        <span>Download Resume</span>
        <RiArrowRightUpBoxLine /> Icon from Remixicon
      </a> */}

      {/* Profile Image */}
      <img
        src={moinkhan} // Imported image
        alt={PROFILE.name} // Accessibility description
        width={400} // Fixed width
        height={400} // Fixed height
        className="hero-img rounded-3xl border border-purple-300/20 p-1"
      />
    </section>
  );
};

export default Hero;
