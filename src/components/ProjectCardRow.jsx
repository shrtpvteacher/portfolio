
import React from "react";

import subscriptionTracker from "../img/projects/subscription-tracker.png";
import seeds2treesNFTs from "../img/projects/seeds2treesNFTs.png";
import freelancePayables from "../img/projects/freelance-payables.png";


export default function ProjectCardRow() {
  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-row gap-8 w-full max-w-7xl justify-center flex-wrap md:flex-nowrap">

        {/* Card 1 */}
          <div className="flex flex-col bg-white rounded-lg shadow overflow-hidden w-full max-w-xs mx-auto min-h-[450px]">
          <img
            src={subscriptionTracker}
            alt="Subscription-tracker screenshot"
            className="w-full h-48 object-cover"
            style={{ minHeight: "295px" }}
          />
          <div className="flex flex-col flex-grow p-5">
            <h2 className="text-lg text-gray-700 font-bold mb-2">Subscription Tracker</h2>
            <p className="text-gray-700 text-sm flex-grow">
              Subscription Mangagement App, trying out AI prompts to build, successfully in just a few prompts.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://my-subscription-tracker.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-black text-white py-2 rounded-lg text-center font-semibold hover:bg-gray-300 hover:outline-black hover:text-gray-900 transition-colors"
              >
                Site
              </a>
              <a
                href="https://github.com/shrtpvteacher/subscription-tracker"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-300 text-black py-2 rounded-lg text-center font-semibold hover:bg-purple-900  hover:text-gray-50 transition-colors"
              >
                Code
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden w-full max-w-xs mx-auto min-h-[450px]">
          <img
            src={seeds2treesNFTs}
            alt="Seeds2Trees screenshot"
            className="w-full h-48 object-cover"
            style={{ minHeight: "295px" }}
          />
          <div className="flex flex-col flex-grow p-5">
            <h2 className="text-lg text-gray-700 font-bold mb-2">Seeds2Trees</h2>
            <p className="text-gray-700 text-sm flex-grow">
              A real world donation site for planting trees with NFT for tracking growth and proof of donation.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://seeds2treesnfts.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-black text-white py-2 rounded-lg text-center font-semibold hover:bg-gray-300 hover:text-gray-950 transition-colors"
              >
                Site
              </a>
              <a
                href="https://github.com/shrtpvteacher/Seeds2TreesNFTs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-300 text-black py-2 rounded-lg text-center font-semibold hover:bg-green-600  hover:text-white transition-colors"
              >
                Code
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden w-full max-w-xs mx-auto min-h-[450px]">
          <img
            src={freelancePayables}
            alt="Freelance Payables screenshot"
            className="w-full h-48 object-cover"
            style={{ minHeight: "295px" }}
          />
          <div className="flex flex-col flex-grow p-5">
            <h2 className="text-gray-700 text-lg font-bold mb-2">Freelance Payables</h2>
            <p className="text-gray-700 text-sm flex-grow">
              An freelance job escrow creation application that uses AI and smart contracts.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://freelancepayables.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-black text-white py-2 rounded-lg text-center font-semibold hover:bg-gray-300 hover:text-black transition-colors"
              >
                Site
              </a>
              <a
                href="https://github.com/shrtpvteacher/FreelancePayables"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-300 text-black py-2 rounded-lg text-center font-semibold  hover:bg-blue-500 hover:text-white transition-colors"
              >
                Code
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
