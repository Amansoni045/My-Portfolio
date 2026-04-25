"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("webdev");
  const projectCardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    projectCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, [activeTab]);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-title">
          <h3 className="main-title">My Latest Projects</h3>
          <ul className="line">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div className="skills-tabs">
          <button
            className={`tab-button ${activeTab === "webdev" ? "active" : ""}`}
            onClick={() => setActiveTab("webdev")}
          >
            WebDev
          </button>
          <button
            className={`tab-button ${activeTab === "python" ? "active" : ""}`}
            onClick={() => setActiveTab("python")}
          >
            Python
          </button>
          <button
            className={`tab-button ${activeTab === "figma" ? "active" : ""}`}
            onClick={() => setActiveTab("figma")}
          >
            Figma
          </button>
        </div>

        <div
          className={`projects-grid skill-section ${activeTab === "webdev" ? "active" : ""
            }`}
        >
          <div className="project-card" ref={(el) => (projectCardsRef.current[0] = el)}>
            <Image
              src="/Assets/Akash Jewellers.png"
              alt="Akash Jewellers"
              width={400}
              height={300}
            />
            <div className="project-content">
              <h4>Akash Jewellers</h4>
              <div className="project-links">
                <a href="https://akash-jewellers-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="demo-link">
                  <i className="fas fa-external-link-alt"></i> Demo
                </a>
                <a href="https://github.com/Amansoni045/akash_jewellers" target="_blank" rel="noopener noreferrer" className="github-link">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card" ref={(el) => (projectCardsRef.current[1] = el)}>
            <Image
              src="/Assets/Johar.png"
              alt="Johar"
              width={400}
              height={300}
            />
            <div className="project-content">
              <h4>Explore Jharkhand</h4>
              <div className="project-links">
                <a href="https://sih-explore-jharkhand-henna.vercel.app/" target="_blank" rel="noopener noreferrer" className="demo-link">
                  <i className="fas fa-external-link-alt"></i> Demo
                </a>
                <a href="https://github.com/Amansoni045/sih_explore_jharkhand" target="_blank" rel="noopener noreferrer" className="github-link">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card" ref={(el) => (projectCardsRef.current[2] = el)}>
            <Image
              src="/Assets/Ai-Dashboard.png"
              alt="AI-Dashboard"
              width={400}
              height={300}
            />
            <div className="project-content">
              <h4>AI Analytics Dashboard</h4>
              <div className="project-links">
                <a href="https://ai-dashboard-gilt.vercel.app/" target="_blank" rel="noopener noreferrer" className="demo-link">
                  <i className="fas fa-external-link-alt"></i> Demo
                </a>
                <a href="https://github.com/Amansoni045" target="_blank" rel="noopener noreferrer" className="github-link">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card" ref={(el) => (projectCardsRef.current[3] = el)}>
            <Image
              src="/Assets/BookMyYatra.png"
              alt="BookMyYatra"
              width={400}
              height={300}
            />
            <div className="project-content">
              <h4>BookMyYatra</h4>
              <div className="project-links">
                <a href="https://book-my-yatra.vercel.app/" target="_blank" rel="noopener noreferrer" className="demo-link">
                  <i className="fas fa-external-link-alt"></i> Demo
                </a>
                <a href="https://github.com/Amansoni045/BookMyYatra" target="_blank" rel="noopener noreferrer" className="github-link">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card" ref={(el) => (projectCardsRef.current[4] = el)}>
            <Image
              src="/Assets/StartupSprint.png"
              alt="StartupSprint"
              width={400}
              height={300}
            />
            <div className="project-content">
              <h4>StartupSprint</h4>
              <div className="project-links">
                <a href="https://startup-sprint.vercel.app/" target="_blank" rel="noopener noreferrer" className="demo-link">
                  <i className="fas fa-external-link-alt"></i> Demo
                </a>
                <a href="https://github.com/Amansoni045" target="_blank" rel="noopener noreferrer" className="github-link">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card" ref={(el) => (projectCardsRef.current[5] = el)}>
            <Image
              src="/Assets/FinancialDashboard.png"
              alt="Financial Dashboard"
              width={400}
              height={300}
            />
            <div className="project-content">
              <h4>Financial Dashboard</h4>
              <div className="project-links">
                <a href="https://financial-dashboard-orpin-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="demo-link">
                  <i className="fas fa-external-link-alt"></i> Demo
                </a>
                <a href="https://github.com/Amansoni045/financial-dashboard" target="_blank" rel="noopener noreferrer" className="github-link">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`projects-grid skill-section ${
            activeTab === "python" ? "active" : ""
          }`}
        >
          <div
            className="project-card"
            ref={(el) => (projectCardsRef.current[6] = el)}
          >
            <Image src="/Assets/Slip.png" alt="Slip AI" width={400} height={300} />
            <div className="project-content">
              <h4>Slip - AI Platform</h4>
              <div className="project-links">
                <a
                  href="https://slip-ai.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-link"
                >
                  <i className="fas fa-external-link-alt"></i> Demo
                </a>
                <a
                  href="https://github.com/Amansoni045/Slip/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>
          <div
            className="project-card"
            ref={(el) => (projectCardsRef.current[7] = el)}
          >
            <Image src="/Assets/AuraAI.png" alt="AuraAI" width={400} height={300} />
            <div className="project-content">
              <h4>AURA AI</h4>
              <div className="project-links">
                <a
                  href="https://auraai-pied.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-link"
                >
                  <i className="fas fa-external-link-alt"></i> Demo
                </a>
                <a
                  href="https://github.com/Amansoni045/AURA-AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`projects-grid skill-section ${
            activeTab === "figma" ? "active" : ""
          }`}
        >
          <div
            className="project-card"
            ref={(el) => (projectCardsRef.current[8] = el)}
          >
            <Image
              src="/Assets/CabMate.png"
              alt="CabMate"
              width={400}
              height={300}
            />
            <div className="project-content">
              <h4>CabMate</h4>
              <div className="project-links">
                <a
                  href="https://www.figma.com/design/SyunkZq1wawt3bmuhRHRGD/CabMate?t=1dpvc1PULr0iTaJG-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-link"
                >
                  <i className="fab fa-figma"></i> View in Figma
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-card"
            ref={(el) => (projectCardsRef.current[9] = el)}
          >
            <Image
              src="/Assets/Eatmore.png"
              alt="EatMore"
              width={400}
              height={300}
            />
            <div className="project-content">
              <h4>EatMore</h4>
              <div className="project-links">
                <a
                  href="https://www.figma.com/design/1DBlrPr7mrAzVG3aeoKVaK/Paper-and-Mid-Fidelity-Wireframes?t=1dpvc1PULr0iTaJG-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-link"
                >
                  <i className="fab fa-figma"></i> View in Figma
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
