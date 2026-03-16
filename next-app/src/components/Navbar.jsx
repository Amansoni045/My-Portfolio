"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = document.querySelectorAll("section");
      let currentSection = "home";
      const fromTop = window.scrollY + 100;

      sections.forEach((section) => {
        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileOpen(false); // Close mobile menu when link is clicked
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="row space-between">
          <div className="logo">
            <Link href="/">Portfolio</Link>
          </div>
          <div 
            className={`hamburger ${isMobileOpen ? "active" : ""}`} 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`menu ${isMobileOpen ? "active" : ""}`}>
            <li className="nav-item">
              <a
                href="#home"
                className={`nav-link ${activeSection === "home" ? "active" : ""}`}
                onClick={(e) => handleLinkClick(e, "home")}
              >
                Home <span></span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#skills"
                className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
                onClick={(e) => handleLinkClick(e, "skills")}
              >
                Skills <span></span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                className={`nav-link ${
                  activeSection === "projects" ? "active" : ""
                }`}
                onClick={(e) => handleLinkClick(e, "projects")}
              >
                Projects <span></span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className={`nav-link ${
                  activeSection === "contact" ? "active" : ""
                }`}
                onClick={(e) => handleLinkClick(e, "contact")}
              >
                Contact <span></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
