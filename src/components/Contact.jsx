import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const mailtoLink = `mailto:work.vishesh12.05@gmail.com?subject=Portfolio Contact: ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;


      // Show success message
      setFormStatus({
        submitted: true,
        error: false,
        message: "Thank you for your message! I'll get back to you soon.",
      });

      // Reset form after successful submission
      setFormData({ name: "", email: "", message: "" });

      // Reset status message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          error: false,
          message: "",
        });
      }, 5000);
    } catch (error) {
      setFormStatus({
        submitted: false,
        error: true,
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div id="contact" className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600 font-semibold">
            Let's connect and explore opportunities together
          </p>
        </div>

        {/* Contact form */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          {formStatus.message && (
            <div
              className={`mb-6 p-4 rounded-lg ${formStatus.error
                ? "bg-red-100 text-red-700 border border-red-300"
                : "bg-green-100 text-green-700 border border-green-300"
                }`}
            >
              {formStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-indigo-700 to-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            You can also reach me directly at{" "}
            <a
              href="mailto:work.vishesh12.05@gmail.com"
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              work.vishesh12.05@gmail.com
            </a>

          </p>
        </div>
      </div>
    </div>
  );
}