// Import required dependencies and constants
import { RiCloseLine, RiMenu3Line } from "@remixicon/react"; // Icons for menu toggle
import { useState } from "react"; // State management for mobile menu
import { NAVIGATION_LINKS } from "../constants"; // Dynamic navigation links array

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to track mobile menu visibility

  // Toggles the mobile menu state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handles link click with smooth scrolling
  const handleLinkClick = (e, href) => {
    e.preventDefault(); // Prevent default anchor behavior
    const targetElement = document.querySelector(href); // Locate the target section
    if (targetElement) {
      const offset = -85; // Adjust scrolling position for sticky headers
      const elementPosition = targetElement.getBoundingClientRect().top; // Element's position relative to viewport
      const offsetPosition = elementPosition + window.scrollY + offset; // Adjusted position for scrolling

      // Smoothly scroll to the target position
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <div>
      {/* Main Navigation Bar */}
      <nav className="fixed left-0 right-0 z-50 lg:top-4">
        {/* Desktop Menu */}
        <div className="mx-auto hidden max-w-xl items-center justify-center rounded-full border border-white/30 py-2 backdrop-blur-lg lg:flex">
          <div className="flex items-center justify-between gap-6">
            {/* Logo Section */}
            <div>
              <a href="/">
                <span className="uppercase">Moinkhan</span>
              </a>
            </div>
            {/* Navigation Links */}
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-sm hover:text-stone-300" // Hover effect for links
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)} // Smooth scrolling on click
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="py-2 backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div>
              <a href="#">
                <span className="pl-2 uppercase">Moinkhan</span>
              </a>
            </div>
            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden" // Removes focus outline
                onClick={toggleMobileMenu} // Toggles menu state
                aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"} // Accessibility label
              >
                {isMobileMenuOpen ? (
                  <RiCloseLine className="m-2 h-6 w-5" /> // Close icon
                ) : (
                  <RiMenu3Line className="m-2 h-6 w-5" /> // Menu icon
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Links */}
          {isMobileMenuOpen && (
            <ul className="my-4 ml-4 flex flex-col gap-6 backdrop-blur-md">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block w-full text-lg"
                    onClick={(e) => handleLinkClick(e, item.href)} // Smooth scrolling on click
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
