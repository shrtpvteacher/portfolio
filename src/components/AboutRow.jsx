// File: src/components/AboutRow.jsx

import React from "react";

const AboutRow = () => {
  return (
    <div className="w-full bg-[#1b1b2f] text-gray-200 px-6 py-12">
      <div className="max-w-4xl mx-auto text-left space-y-4">
        <h2 className="text-3xl font-bold text-purple-300">Who I Am</h2>

        <p className="text-lg leading-relaxed">
          I am a Full Stack Web3 Engineer with a builder’s mindset — focused on smart contracts, decentralized apps, and solving real problems with blockchain.
        </p>

        <p className="text-lg leading-relaxed">
          I am also deeply passionate about developer experience and naturally find myself testing tools, giving feedback, and helping others improve their builds. That’s why I’m also pursuing roles in Developer Relations, product feedback, or anything that bridges technical depth with human connection.
        </p>

        <p className="text-lg leading-relaxed">
          With a background in teaching, hardware repair, off-grid problem solving, and dApp development — I bring more than just code. I bring perspective, persistence, and a drive to build tools that actually work for real people.
        </p>

        <p className="text-sm text-gray-400">
          Currently seeking remote opportunities in blockchain engineering, developer relations, or hands-on product feedback.
        </p>
      </div>
    </div>
  );
};

export default AboutRow;
