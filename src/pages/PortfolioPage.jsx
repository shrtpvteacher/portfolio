import React from "react";
import ContactSection from "../components/ContactSection";
import TechStack from "../components/TechStack";
import ProjectCardRow from "../components/ProjectCardRow";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Contact at top */}
      <ContactSection />

      {/* 2. Tech stack below */}
      <TechStack />

      {/* 3. Projects below */}
      <ProjectCardRow />
    </div>
  );
}
