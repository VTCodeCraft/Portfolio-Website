import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

function Footer() {
  // Function to handle smooth scrolling for the footer links
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
    }
  };

  return (
    <footer id="contact" className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Vishesh Tripathi</h3>
            <p className="text-white/80">
              Building the future of web development
            </p>
            <p className="text-white/80 mt-2 flex items-center justify-center md:justify-start">
              <Mail className="h-4 w-4 mr-2" />
              <a 
                href="mailto:contact@work.vishesh12.05@gmail.com" 
                className="hover:text-teal-200 transition-colors duration-200"
              >
                contact@work.vishesh12.05@gmail.com
              </a>
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-white/80 hover:text-teal-200 transition-colors duration-200 cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-white/80 hover:text-teal-200 transition-colors duration-200 cursor-pointer"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white/80 hover:text-teal-200 transition-colors duration-200 cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-white/80 hover:text-teal-200 transition-colors duration-200 cursor-pointer"
                >
                  Projects
                </button>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://github.com/VTCodeCraft"
                className="text-white/80 hover:text-teal-200 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/vishesh-tripathi-6b6a41213"
                className="text-white/80 hover:text-teal-200 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/VTCodeCraft_"
                className="text-white/80 hover:text-teal-200 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter/X Profile"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/80">
            © {new Date().getFullYear()} Vishesh Tripathi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;