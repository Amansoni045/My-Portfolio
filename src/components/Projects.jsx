"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-github"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isAnimating, setIsAnimating] = useState(false);
  const projectCardsRef = useRef([]);

  const projectsData = [
    {
      id: 1,
      title: "Astera",
      description: "Autonomous multi-query web research and evidence synthesis workspace.",
      image: "/Assets/Astera.png",
      tags: ["Next.js", "Python", "AI Agents", "LangChain"],
      category: "AI / ML",
      demoLink: "https://astera-blue.vercel.app/",
      githubLink: "https://github.com/Amansoni045/Astera",
      featured: true,
    },
    {
      id: 2,
      title: "Voxa",
      description: "AI-powered audio & video content transcription and intelligence.",
      image: "/Assets/Voxa.png",
      tags: ["Next.js", "TypeScript", "AI / ML", "Whisper"],
      category: "AI / ML",
      demoLink: "https://voxa-two-jade.vercel.app/",
      githubLink: "https://github.com/Amansoni045/Voxa",
      featured: true,
    },
    {
      id: 3,
      title: "Akash Jewellers",
      description: "A premium jewelry e-commerce platform.",
      image: "/Assets/Akash Jewellers.png",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      category: "Full Stack",
      demoLink: "https://akash-jewellers-one.vercel.app/",
      githubLink: "https://github.com/Amansoni045/akash_jewellers",
      featured: true,
    },
    {
      id: 4,
      title: "Slip",
      description: "AI Customer Churn Intelligence Platform.",
      image: "/Assets/Slip.png",
      tags: ["Python", "Scikit-learn", "React", "FastAPI"],
      category: "AI / ML",
      demoLink: "https://slip-rho.vercel.app/",
      githubLink: "https://github.com/Amansoni045/Slip",
      featured: true,
    },
    {
      id: 5,
      title: "BookMyYatra",
      description: "Travel booking and management system.",
      image: "/Assets/BookMyYatra.png",
      tags: ["Next.js", "Prisma", "PostgreSQL"],
      category: "Full Stack",
      demoLink: "https://book-my-yatra.vercel.app/",
      githubLink: "https://github.com/Amansoni045/BookMyYatra",
      featured: true,
    },
    {
      id: 6,
      title: "NeuralVision AI",
      description: "Deep learning based image recognition platform.",
      image: "/Assets/NeuralVision.png",
      tags: ["Python", "TensorFlow", "Deep Learning"],
      category: "AI / ML",
      demoLink: "https://neural-vision-ai.vercel.app/",
      githubLink: "https://github.com/Amansoni045/NeuralVision-AI",
      featured: true,
    },
    {
      id: 7,
      title: "Verra",
      description: "Predictive analytics and forecasting tool.",
      image: "/Assets/Verra.png",
      tags: ["Python", "Pandas", "Machine Learning"],
      category: "AI / ML",
      demoLink: "https://verra-two.vercel.app/",
      githubLink: "https://github.com/Amansoni045/Verra",
      featured: false,
    },
    {
      id: 8,
      title: "EmotionSense AI",
      description: "Real-time emotion detection and analysis.",
      image: "/Assets/EmotionSense.png",
      tags: ["Python", "Keras", "Computer Vision"],
      category: "AI / ML",
      demoLink: "https://emotion-sense-gamma.vercel.app/",
      githubLink: "https://github.com/Amansoni045/EmotionSense",
      featured: false,
    },
  ];

  const handleFilterChange = (filter) => {
    if (filter === activeFilter) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveFilter(filter);
      setIsAnimating(false);
    }, 300); // 300ms for fade out
  };

  const filteredProjects = activeFilter === "All"
    ? projectsData.filter((project) => project.featured)
    : projectsData.filter((project) => project.category === activeFilter);

  useEffect(() => {
    // Re-initialize ref array on filter change
    projectCardsRef.current = projectCardsRef.current.slice(0, filteredProjects.length);

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
  }, [filteredProjects.length, isAnimating]);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-title" style={{ marginBottom: '20px' }}>
          <h3 className="main-title">My Latest Projects</h3>
          <ul className="line">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div className="skills-tabs" style={{ marginBottom: '30px' }}>
          {["All", "AI / ML", "Full Stack"].map((filter) => (
            <button
              key={filter}
              className={`tab-button ${activeFilter === filter ? "active" : ""}`}
              onClick={() => handleFilterChange(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className={`projects-grid ${isAnimating ? "fade-out" : "fade-in"}`}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              ref={(el) => (projectCardsRef.current[index] = el)}
            >
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                />
              </div>
              <div className="project-info">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <GithubIcon size={16} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
