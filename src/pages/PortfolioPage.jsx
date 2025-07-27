import React from "react";
import ContactSection from "../components/ContactSection";
import TechStack from "../components/TechStack";
import ProjectCardRow from "../components/ProjectCardRow";
import AboutRow from "../components/AboutRow";


export default function PortfolioPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Contact at top */}
      <ContactSection />

      {/* 2. Tech stack below */}
      <TechStack />
        {/* 3. About me section */} 
        < AboutRow />

     
     

      {/* 4. Projects below */}
      <ProjectCardRow />
    </div>
  );
}
