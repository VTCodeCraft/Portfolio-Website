import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close mobile menu after clicking
    }
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
                    className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("skills")}
                    className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("experience")}
                    className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                  >
                    Experience
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
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
                className="text-white hover:text-teal-400 block w-full text-left px-3 py-2 rounded-md transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-white hover:text-teal-400 block w-full text-left px-3 py-2 rounded-md transition-colors duration-200"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-white hover:text-teal-400 block w-full text-left px-3 py-2 rounded-md transition-colors duration-200"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-white hover:text-teal-400 block w-full text-left px-3 py-2 rounded-md transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-teal-400 block w-full text-left px-3 py-2 rounded-md transition-colors duration-200"
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
