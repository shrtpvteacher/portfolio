// src/components/ContactSection.jsx
import React from "react";
import ProfileImg from "../assets/profile.jpg";
import "../styles/resume.css"

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
    iconClass: "fab fa-twitter",
  },
  {
    href: "mailto:kcweb3coder@gmail.com",
    label: "Email",
    iconClass: "fas fa-envelope",
  },
];

export default function ContactSection() {
  return (
    <section className="contact-section w-full bg-gradient-radial from-purple-400 via-teal-400 to-blue-700 p-10 text-white font-sans">
     <div className="max-w-5xl mx-10 px-10 flex flex-col sm:flex-row sm:items-center sm:gap-8">
        {/* Profile Image */}
      <div className="flex-shrink-0 w-20 h-20 rounded-full border-4 border-yellow-300 overflow-hidden shadow-lg">
          <img
            src={ProfileImg}
            alt="Kelly Coldren"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contact Icons */}
        <div className="flex mt-6 sm:mt-0 gap-6">
        {contactLinks.map(({ href, label, iconClass }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center text-black text-2xl shadow-md hover:bg-white hover:text-black transition-colors duration-300"
          >
            <i className={iconClass} aria-hidden="true" />
          </a>
        ))}
      </div>
      </div>

       {/* Text Content Below */}
      <div className="max-w-5xl mx-10 px-10 mt-10 text-gray-900 font-sans">
        <h1 className="text-5xl mb-4">Hi, I’m Kelly Coldren</h1>
        <h2 className="text-5xl font-normal mt-2">Full Stack Web3 Engineer</h2>

        <div className="mt-6 flex gap-6 text-lg font-semibold">
          <div>Aptos, CA</div>
          <div className="border-l border-black pl-4">
          
           
             <div className="border-l border-black pl-4">  </div>
            <a
              href="mailto:kcweb3coder@gmail.com"
              className="text-black no-underline hover:text-white hover:underline"
            >
              kcweb3coder@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}