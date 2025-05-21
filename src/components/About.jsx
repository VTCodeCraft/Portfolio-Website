import React from "react";
// Import your profile image
import profileImage from "../components/img/profilepic.jpg"; // Update this path based on where you store your image

function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section with ID for navbar scrolling */}
        <div id="about" className="text-center space-y-8 mb-16 pt-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
            Hi, I'm Vishesh Tripathi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Skilled in Web Development with expertise in HTML, CSS, JavaScript,
            ReactJS, Node.js, Express.js, Tailwind CSS, and MongoDB. I also have
            knowledge of Java, C/C++, Python, MySQL, and basic Data Structures &
            Algorithms.
          </p>
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 rounded-full blur-lg opacity-20"></div>
          <img
            src={profileImage} // Using the imported image
            alt="Vishesh Tripathi Profile"
            className="rounded-full transform hover:scale-110 transition duration-300 shadow-lg relative z-10 border-4 border-white w-48 h-48 object-cover"
          />
        </div>

        {/* Professional Background */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Professional Journey
          </h2>
          <div className="space-y-6 text-left max-w-4xl mx-auto">
            <p className="text-lg text-gray-600">
              I have been honing my skills in web development, working on both
              frontend and backend technologies. My journey includes building
              responsive user interfaces and scalable server-side applications.
            </p>
            <p className="text-lg text-gray-600">
              Currently, I am focused on improving my expertise in ReactJS and
              Node.js while strengthening my knowledge in databases and cloud
              services. I enjoy solving problems and creating efficient,
              user-friendly solutions.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-indigo-600 font-semibold mb-4">
              Frontend Development
            </h3>
            <p className="text-lg text-gray-600">
              Skilled in HTML, CSS, JavaScript, ReactJS, and Tailwind CSS to
              build responsive and attractive user interfaces.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-purple-600 font-semibold mb-4">
              Backend Development
            </h3>
            <p className="text-lg text-gray-600">
              Experienced in building backend APIs and server-side logic using
              Node.js, Express.js, and MongoDB.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-teal-600 font-semibold mb-4">
              Programming Languages & DSA
            </h3>
            <p className="text-lg text-gray-600">
              Knowledgeable in Java, C/C++, Python, MySQL, and have a basic
              understanding of Data Structures & Algorithms in Java.
            </p>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Beyond Coding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="space-y-3">
              <h3 className="text-2xl text-indigo-600 font-semibold">
                Continuous Learning
              </h3>
              <p className="text-lg text-gray-600">
                Always exploring new tools, frameworks, and programming concepts
                to improve my skills.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-purple-600 font-semibold">
                Problem Solving
              </h3>
              <p className="text-lg text-gray-600">
                Enjoy tackling challenging coding problems and improving
                algorithms efficiency.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-teal-600 font-semibold">
                Collaboration
              </h3>
              <p className="text-lg text-gray-600">
                Working with teams and contributing to projects through open
                communication and code reviews.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-indigo-600 font-semibold">
                Tech Enthusiasm
              </h3>
              <p className="text-lg text-gray-600">
                Passionate about emerging technologies and trends in software
                development.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 p-12 rounded-xl text-white text-center">
          <h2 className="text-4xl font-semibold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;