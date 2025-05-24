import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Calculate header height to offset scroll position
      const navbarHeight = 64; // Equivalent to h-16 in Tailwind (4rem = 64px)
      const offsetPosition = section.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setActiveSection(sectionId);
      setMenuOpen(false); // Close mobile menu after clicking
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills","projects", "contact"];
      const scrollPosition = window.scrollY + 100; // Adding offset for better detection
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Call once on load to set initial active section
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to generate nav link classes
  const getLinkClasses = (sectionId) => {
    return `${
      activeSection === sectionId
        ? "text-teal-200 border-b-2 border-teal-200"
        : "text-white hover:text-teal-200"
    } px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-200`;
  };

  // Function to generate mobile nav link classes
  const getMobileLinkClasses = (sectionId) => {
    return `${
      activeSection === sectionId
        ? "text-teal-400 bg-purple-700 bg-opacity-30"
        : "text-white hover:text-teal-400"
    } block w-full text-left px-3 py-2 rounded-md transition-colors duration-200`;
  };

  return (
    <>
      <nav className="w-full h-max bg-gradient-to-r from-indigo-400 via-purple-500 to-teal-500 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* logo and brand */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-white bg-opacity-20 bg-white px-3 py-1 rounded-lg">
                  VT
                </span>
              </div>
              <div className="md:block hidden ml-4">
                <span className="text-white font-semibold text-lg">
                  Vishesh Tripathi
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className={getLinkClasses("about")}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("skills")}
                    className={getLinkClasses("skills")}
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className={getLinkClasses("projects")}
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className={getLinkClasses("contact")}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Mobile navigation toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!isMenuOpen)}
                className="text-white hover:text-teal-200 focus:outline-none transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-indigo-600 to-purple-600">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={() => scrollToSection("about")}
                className={getMobileLinkClasses("about")}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className={getMobileLinkClasses("skills")}
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={getMobileLinkClasses("projects")}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={getMobileLinkClasses("contact")}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}