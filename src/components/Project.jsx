import React from "react";
import { ExternalLink } from "lucide-react";

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Demo Portfolio Website",
      description: "The Pixel Pirate Portfolio Website for Portxfolio hackathon 2025",
      link: "https://pixel-pirates-omega.vercel.app/",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      title: "Abhyaas AI",
      description: "Your Smart Learning Companion. (Group project)",
      link: "https://abhyaas-ai.vercel.app/",
      technologies: ["React", "Gemini APIS", "Tailwind CSS", "Next.js"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with React and Tailwind CSS.",
      link: "https://portfolio-website-lemon-three-58.vercel.app/",
      technologies: ["React", "Tailwind CSS", "Responsive Design"],
    },
    {
      id: 4,
      title: "Netflix Clone",
      description:
        "Frontend Netflix clone",
      link: "https://netflix-clone-sand-chi.vercel.app/",
      technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
    },
  ];

  return (
    // Added id="projects" for navbar scrolling functionality
    <div id="projects" className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600 font-semibold">
            A showcase of all projects that I have made
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:border-2 hover:border-indigo-500 transition-all duration-300 p-5 flex flex-col h-full"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-5">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-5 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-all duration-200 mt-auto"
              >
                View Project
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}