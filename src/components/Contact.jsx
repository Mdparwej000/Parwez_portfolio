import React, { useState, useEffect, useRef } from "react";

const Contact = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const contactRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xdklbowy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <section
      id="contact"
      ref={contactRef}
      className={`py-20 relative overflow-hidden ${
        darkMode ? "bg-black" : "bg-white"
      }`}
    >
      <style>
        {`
          @keyframes glow {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-20px) translateX(10px); }
          }
          .glowing-tube {
            animation: glow 2s ease-in-out infinite;
          }
          .floating-circle {
            position: absolute;
            border-radius: 50%;
            opacity: 0.5;
            filter: blur(10px);
            z-index: 0;
            animation: float 8s ease-in-out infinite;
          }
        `}
      </style>

      {/* Floating gradient circles */}
      {[...Array(12)].map((_, i) => {
        const size = Math.floor(Math.random() * 100) + 50;
        const delay = Math.random() * 5;
        const duration = 15 + Math.random() * 15;
        const colors = [
          "bg-gradient-to-br from-purple-400/30 to-purple-700/30",
          "bg-gradient-to-br from-gray-300/30 to-purple-500/30",
          "bg-gradient-to-br from-violet-400/30 to-fuchsia-500/30",
          "bg-gradient-to-br from-gray-300/30 to-purple-400/30"
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        return (
          <div
            key={i}
            className={`floating-circle ${color}`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          ></div>
        );
      })}

      <div className="container mx-auto px-4 relative z-10">
        {/* Tube light with rounded corners */}
        <div className="w-full flex justify-center mb-16 relative">
          <div className="relative w-80 h-16 flex items-center justify-center">
            {/* Tube light with rounded ends */}
            <div className="w-full h-3 flex items-center justify-center">
              <div className="w-full h-3 rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent glowing-tube"></div>
              <div className="absolute left-0 w-4 h-4 rounded-full bg-purple-500"></div>
              <div className="absolute right-0 w-4 h-4 rounded-full bg-purple-500"></div>
            </div>
          </div>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Form container with simple border */}
          <div
            className={`rounded-2xl p-8 border-2 backdrop-blur-md ${
              darkMode
                ? "bg-black/40 border-purple-900/30"
                : "bg-white/90 border-purple-200/50"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Section */}
              <div>
                <h3
                  className={`text-2xl font-bold mb-6 ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Let's Connect
                </h3>

                <div className="space-y-6">
                  {[
                    {
                      icon: "envelope",
                      title: "Email",
                      value: "mdparvejmehsi@gmail.com",
                      color: darkMode
                        ? "text-purple-400"
                        : "text-purple-600",
                      link: "mailto:mdparvejmehsi@gmail.com",
                    },
                    {
                      icon: "map-marker-alt",
                      title: "Location",
                      value: "GURUGRAM , HARYANA",
                      color: darkMode ? "text-blue-400" : "text-blue-600",
                      link: null,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-start transition-all duration-500 ${
                        isVisible
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-10"
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <div className={`mr-4 mt-1 ${item.color}`}>
                        <i className={`fas fa-${item.icon} text-xl`}></i>
                      </div>
                      <div>
                        <h4
                          className={`font-bold ${
                            darkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {item.title}
                        </h4>
                        {item.link ? (
                          <a
                            href={item.link}
                            className={`${
                              darkMode
                                ? "text-purple-400"
                                : "text-purple-600"
                            } hover:underline transition-colors duration-300`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p
                            className={
                              darkMode ? "text-gray-400" : "text-gray-600"
                            }
                          >
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Section (Form) */}
              <div>
                <h3
                  className={`text-2xl font-bold mb-6 ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Send a Message
                </h3>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full rounded-lg px-4 py-3 border focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 ${
                      darkMode
                        ? "bg-gray-900/60 border-gray-700 text-white"
                        : "bg-gray-100/80 border-gray-300 text-gray-800"
                    }`}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full rounded-lg px-4 py-3 border focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 ${
                      darkMode
                        ? "bg-gray-900/60 border-gray-700 text-white"
                        : "bg-gray-100/80 border-gray-300 text-gray-800"
                    }`}
                    required
                  />

                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full rounded-lg px-4 py-3 border focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 ${
                      darkMode
                        ? "bg-gray-900/60 border-gray-700 text-white"
                        : "bg-gray-100/80 border-gray-300 text-gray-800"
                    }`}
                  />

                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full rounded-lg px-4 py-3 border focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 ${
                      darkMode
                        ? "bg-gray-900/60 border-gray-700 text-white"
                        : "bg-gray-100/80 border-gray-300 text-gray-800"
                    }`}
                    required
                  ></textarea>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  {submitStatus === "success" && (
                    <div
                      className={`mt-4 p-4 rounded-lg transition-all duration-300 ${
                        darkMode
                          ? "bg-green-900/30 text-green-400"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      ✅ Your message has been sent successfully!
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div
                      className={`mt-4 p-4 rounded-lg transition-all duration-300 ${
                        darkMode
                          ? "bg-red-900/30 text-red-400"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      ❌ There was an error sending your message. Please try
                      again.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;