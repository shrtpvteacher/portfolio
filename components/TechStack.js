// src/components/TechStack.js
import React from 'react';
import './TechStack.css'; // (optional) add custom spacing/styling here

const tech = [
  {
    title: "Languages",
    icons: [
      { name: "Solidity", url: "https://techicons.dev/icons/solidity.svg" },
      { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "CSS", url:"" },
    ],
  },
  {
    title: "Frameworks",
    icons: [
      { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", url: "https://techicons.dev/icons/nextjs.svg" },
      { name: "Hardhat", url: "https://techicons.dev/icons/hardhat.svg" },
    ],
  },
  {
    title: "Libraries",
    icons: [
        { name: "TailwindCSS", url: "" },
        { name: "OpenZeppelin", url: "" },
    ]
  }
];

const TechStack = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">🔧 Tech Stack</h2>
      <div className="row">
        {tech.map((group, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <h5 className="text-center">{group.title}</h5>
            <div className="d-flex justify-content-center flex-wrap gap-3">
              {group.icons.map((item, j) => (
                <div key={j} className="text-center">
                  <img src={item.url} alt={item.name} title={item.name} style={{ height: "50px" }} />
                  <p className="small mt-1">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
