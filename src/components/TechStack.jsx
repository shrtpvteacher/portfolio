// src/components/TechStack.jsx
import React from 'react';
//import '../TechStack.css'; // (optional) add custom spacing/styling here
import VectorBg from "../assets/Vector.png";

const techIcons = {
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  hardhat: "https://hardhat.org/favicon.ico",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
 

};
const techLogos = {
  
    //solidity: "https://static.cdnlogo.com/logos/s/73/solidity.svg",

 
   

      solidity:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
  tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  nextjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",

};

const categories = [
  {
    title: "Languages",
      items: [
      { name: "JavaScript", icon: techIcons.javascript },
      { name: "CSS", icon: techIcons.css },
      { name: "Solidity", icon: techLogos.solidity },
    ],
  },
  {
    title: "Frameworks",
     items: [
      { name: "Hardhat", icon: techIcons.hardhat },
      { name: "React.js", icon: techIcons.react },
      { name: "Next.js", icon: techLogos.nextjs },
    ],
  },
  {
    title: "Libraries",
    items: [
          { name: "TailwindCSS", icon: techLogos.tailwind },
     
    ]
  }
];

export default function TechStack() {
  return (
    <section
      className="w-full bg-cover bg-center py-16 px-6"
      style={{ backgroundImage: `url(${VectorBg})` }}
    >
      <div className="max-w-5xl">
        {categories.map(({ title, items }) => (
          <div key={title} className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">{title}</h2>
            <div className="flex flex-wrap gap-8">
              {items.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex flex-col items-start w-24"
                  title={name}
                >
                    
                  {name === "Solidity" ? (
    <div className="w-16 h-16 mb-2 flex items-center justify-center rounded-full bg-white p-2">
      <img
        src={icon}
        alt={`${name} icon`}
        className="w-full h-full object-contain"
      />
    </div>
  ) : (
    <img
      src={icon}
      alt={`${name} icon`}
      className="w-16 h-16 mb-2 object-contain"
    />
  )}
  <span className="text-left text-sm font-medium text-white">{name}</span>
</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
