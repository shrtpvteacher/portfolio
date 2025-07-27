// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom"; 

const contactLinks = [
  {
    href: "https://linkedin.com/in/kelly-anne-coldren",
    label: "LinkedIn",
    iconClass: "fab fa-linkedin-in",
  },
  {
    href: "https://github.com/shrtpvteacher",
    label: "GitHub",
    iconClass: "fab fa-github",
  },
  {
    href: "https://x.com/shrtpvteacher",
    label: "X",
    iconClass: "fab fa-twitter", // still uses 'twitter'
  },
  {
    href: "mailto:kcweb3coder@gmail.com",
    label: "Email",
    iconClass: "fas fa-envelope",
  },
];

const Footer = () => {
  return (
    <footer className="bg-indigo-800 text-gray-100 py-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-6 items-center text-center md:text-left">

          {/* Left: copyright and connect */}
          <div className="text-left">
            <p className="text-xl">&copy; {new Date().getFullYear()} Kelly Coldren. </p>
            <p className="mt-1"></p>
          </div>

          {/* Center: social icons */}
          <div className="flex justify-center gap-10 text-3xl">
             <p className="text- mb-2">Let’s Connect!</p>
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-white hover:text-green-500 transition-colors"
              >
                <i className={link.iconClass}></i>
              </a>
            ))}
          </div>

          {/* Right: about me & resume link */}
          <div className="text-right space-x-6 mr-2">
            <Link
              to="/about"
              className="text-gray-400 hover:text-white underline text-sm"
            >
              About Me
            </Link>
             <span className="text-gray-400 ">•</span>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white underline text-sm"
            >
              View My Resume
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
