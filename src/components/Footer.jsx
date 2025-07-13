// src/components/Footer.jsx

/*import React from "react";

 import "../styles/Footer.css"; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Kelly Coldren. Lets Connect !.</p>

        <div className="flex gap-4 mt-4 sm:mt-0">
          <a
            href="https://github.com/shrtpvteacher"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/kelly-anne-coldren"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:kcweb3coder@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  */


// src/components/Footer.jsx
/*import React from "react";

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
    iconClass: "fab fa-twitter", // Font Awesome still uses "twitter" for the X logo
  },
  {
    href: "mailto:kcweb3coder@gmail.com",
    label: "Email",
    iconClass: "fas fa-envelope",
  },
];

const Footer = () => {
  return (
    <footer className="bg-indigo-800 text-gray-200 py-2 mt-10">
      <div className="container mx-auto px-4 flex flex-col  items-center">
        <p className="text-xl">&copy; {new Date().getFullYear()} Kelly Coldren..</p>
        <p className="mt-2 ">Lets Connect !</p>

        <div className="flex gap-10 mt-14 sm:mt-6 text-3xl">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="hover:text-white transition-colors"
            >
              <i className={link.iconClass}></i>
            </a>
          ))}
        </div>
        
        <div className="text-sm text-right">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white underline"
          >
            View My Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
*/





// src/components/Footer.jsx
/*import React from "react";

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
    iconClass: "fab fa-twitter", // Font Awesome still uses "twitter" for the X logo
  },
  {
    href: "mailto:kcweb3coder@gmail.com",
    label: "Email",
    iconClass: "fas fa-envelope",
  },
];

const Footer = () => {
  return (
    <footer className="bg-indigo-800 text-gray-200 py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
      
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-xl">&copy; {new Date().getFullYear()} Kelly Coldren.</p>
          <p className="mt-2">Let’s Connect!</p>

          <div className="flex gap-10 mt-6 text-3xl">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="hover:text-white transition-colors"
              >
                <i className={link.iconClass}></i>
              </a>
            ))}
          </div>
        </div>

       
        <div className="mt-6 sm:mt-0 text-sm text-right">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white underline"
          >
            View My Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; */

// src/components/Footer.jsx
import React from "react";

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
    <footer className="bg-indigo-800 text-gray-200 py-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 sm:gap-y-0 items-center">

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
                className="hover:text-white transition-colors"
              >
                <i className={link.iconClass}></i>
              </a>
            ))}
          </div>

          {/* Right: resume link */}
          <div className="text-right">
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
