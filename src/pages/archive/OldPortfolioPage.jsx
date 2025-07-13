// src/pages/PortfolioPage.jsx
/*
import React from "react";
import "../styles/resume.css";
import TechStack from "../components/TechStack";
import ProjectCardRow from "../components/ProjectCardRow";
import ContactSection from "../components/ContactSection";


function OldPortfolioPage() {
  return (
    <>
      <header className="header">
        <div className="header-links flex-start">
          <div className="profile-container">
            <img className="profile" src="./img/profile.jpg" alt="Kelly Coldren" />
            <img className="ring" src="./img/Ring.svg" alt="Ring Border" />
          </div>

          <ul className="flex-list list-items-circle">
            <li>
              <a href="https://www.linkedin.com/in/kelly-anne-coldren/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.github.com/shrtpvteacher" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.x.com/shrtpvteacher" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>

        <h1>
          Hi, I’m Kelly Coldren<br />
          Full Stack Web3 Developer
        </h1>

        <ul className="contact-details flex-list">
          <li>Aptos, CA</li>
          <li><hr /></li>
          <li>(408) 744-2465</li>
          <li><hr /></li>
          <li>
            <a href="mailto: shrtpvteacher@protonmail.com" style={{ border: "none" }}>
              shrtpvteacher@protonmail.com
            </a>
          </li>
        </ul>
      </header>

      <main>
        

        <section className="section about">
          <p className="intro">
            I’m a Web3 developer passionate about building decentralized applications that are transparent, secure, and are user friendly.
          </p>
          <ul className="training"></ul>
        </section>
        <div>
            <ContactSection />
            <TechStack />
            <ProjectCardRow />
            
            
        </div> 
       
            

       
        

   
<section className="section projects">
  <div className="flex-between">
    <h2>Take a look at Developer Projects</h2>
    <a href="https://www.github.com/" className="projects-link flex-between">
      See all works <img src="./img/ArrowUpRight.svg" alt="Arrow" style={{ marginLeft: 8, opacity: 0.7 }} />
    </a>
  </div>
  <div className="flex flex-wrap justify-center gap-8">
    {projects.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </div>
</section>. 
    

        <section className="section projects">
          <div className="flex-between">
            <h2>Take a look at Developer Projects</h2>
            <a href="https://www.github.com/" className="projects-link flex-between">
              See all works <img src="./img/ArrowUpRight.svg" alt="Arrow" style={{ marginLeft: 8, opacity: 0.7 }} />
            </a>
          </div>
          <div className="cards flex-center">
            <div className="card">
              <img src="./img/projects/freelace-payables.png" alt="" />
              <h3 className="card-title">Freelance Payables</h3>
              <p className="card-description">
                 A freelance job escrow application that uses AI verification and smart contracts.....
              </p>
              <div className="card-buttons">
                <a href="https://freelancepayables.netlify.app" className="card-button--site" target="_blank" rel="noopener noreferrer">Site</a>
                <a href="https://github.com/shrtpvteacher/FreelancePayables" className="card-button--code">Code</a>
              </div>
            </div>
            <div className="card">
              <img src="./img/projects/seeds2treesNFTs.png" alt="" />
              <h3 className="card-title">Seeds2Trees</h3>
              <p className="card-description">
                a real world donation site for planting trees with NFT for tracking growth and proof of donation...
              </p>
              <div className="card-buttons">
                <a href="https://seeds2treesnfts.netlify.app/" className="card-button--site" target="_blank" rel="noopener noreferrer">Site</a>
                <a href="https://github.com/shrtpvteacher/Seeds2TreesNFTs" className="card-button--code" target="_blank" rel="noopener noreferrer">Code</a>
              </div>
            </div>
            <div className="card">
              <img src="./img/projects/subscription-tracker.png" alt="" />
              <h3 className="card-title">Subscription Tracker</h3>
              <p className="card-description">
                A subscription management application to track payments, cancel subscriptions and find ones you forgot about.
              </p>
              <div className="card-buttons">
                <a href="https://subscription-tracker.netlify.app" className="card-button--site">Site</a>
                <a href="https://github.com/shrtpvteacher/subscriptiontracker" className="card-button--code">Code</a>
              </div>
            </div>
          </div>
        </section>  

        
        <section className="section experience">
          <p className="experience-description">
            <img src="./img/Dot.svg" alt="Blue Dot" />
          </p>
          <h2>Experience</h2>
          <div className="experience-cards flex-center">
            <div className="experience-card">
              <h3 className="card-title">
                Garri - <span className="highlight">Smart Contract Developer</span>
              </h3>
              <p className="card-years">2024-2025</p>
              <ul className="card-list">
                <li className="card-list-item">Build ICO, Token Smart Contract</li>
                <li className="card-list-item">Assisted Ideas, Research & Development on concepts and Web2 and Web3 products</li>
              </ul>
            </div>
            <div className="experience-card">
              <h3 className="card-title">
                Seeds 2 Trees - <span className="highlight">Blockchain Developer</span>
              </h3>
              <p className="card-years">2025</p>
              <ul className="card-list">
                <li className="card-list-item">Contributed to smart contract development on client’s platform</li>
                <li className="card-list-item">Built Full Stack NFT reforestation tracking donation and tree planting site</li>
              </ul>
            </div>
            <div className="program-card">
              <h3 className="card-title">Dapp University Mentorship Program</h3>
              <p className="card-years">2024-2025</p>
              <ul className="card-list">
                <li className="card-list-item">coded an ICO, DAO, NFT Marketplace, AMM, and Capstone project from scratch </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section skills">
          <h2>Skills that I have</h2>
          
          <div className="skill-cards flex-center">
            <div className="skill-card flex-center">
              <i className="fab fa-react"></i>
              <li><img src="./img/Check.svg" alt="Checkmark" /></li>
            </div>
            <div className="skill-card flex-center">
              <i className="fab fa-node-js"></i>
              <li><img src="./img/Check.svg" alt="Checkmark" /></li>
            </div>
            <div className="skill-card flex-center">
              <i className="fab fa-npm"></i>
              <li><img src="./img/Check.svg" alt="Checkmark" /></li>
            </div>
          </div>
          <ul className="skill-list flex-between"></ul>
        </section>

      
        <section className="section contact">
          <div className="contact-links flex-start">
            <div className="profile-container">
              <img className="profile" src="./img/profile.jpg" alt="Kelly Coldren" />
              <img className="ring" src="./img/Ring.svg" alt="Ring Border" />
            </div>
            <ul className="flex-list list-items-circle">
              <li>
                <a href="https://www.linkedin.com/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://www.github.com/">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
          <h1>Get in touch</h1>
          <p>
            I’m a former realtor and teacher turned blockchain developer, I like to build and I like to inspire.
          </p>
          <ul className="contact-details flex-list">
            <li>Aptos, CA</li>
            <li><hr /></li>
            <li>(408) 744-2465</li>
            <li><hr /></li>
            <li>
              <a href="mailto: shrtpvteacher@protonmail.com">shrtpvteacher@protonmail.com</a>
            </li>
          </ul>
        </section>
      </main>
      <footer className="footer flex-center">
        <p><small>© Kelly Coldren  2025. All rights reserved.</small></p>
      </footer>
    </>
  );
}

export default OldPortfolioPage; */

