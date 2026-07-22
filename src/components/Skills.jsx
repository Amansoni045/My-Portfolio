import Image from "next/image";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-info">
        <div className="skills-grid">
          {/* Row 1 (Frontend Core) */}
          <div className="skill-item">
            <i className="fab fa-react" style={{ color: "#61dbfb" }}></i>
            <span>React</span>
          </div>

          <div className="skill-item">
            <i>
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                alt="Next.js"
                width={48}
                height={48}
              />
            </i>
            <span>Next.js</span>
          </div>

          <div className="skill-item">
            <i>
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                width={48}
                height={48}
              />
            </i>
            <span>TypeScript</span>
          </div>

          <div className="skill-item">
            <i className="fab fa-js" style={{ color: "#f0db4f" }}></i>
            <span>JavaScript</span>
          </div>

          <div className="skill-item">
            <i>
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                alt="Tailwind CSS"
                width={48}
                height={48}
              />
            </i>
            <span>Tailwind CSS</span>
          </div>

          {/* Row 2 (Web Foundation) */}
          <div className="skill-item">
            <i className="fab fa-html5" style={{ color: "#e34c26" }}></i>
            <span>HTML</span>
          </div>

          <div className="skill-item">
            <i className="fab fa-css3-alt" style={{ color: "#264de4" }}></i>
            <span>CSS</span>
          </div>

          <div className="skill-item">
            <i>
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
                width={48}
                height={48}
              />
            </i>
            <span>Node.js</span>
          </div>

          <div className="skill-item">
            <i>
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
                alt="Express.js"
                width={48}
                height={48}
              />
            </i>
            <span>Express.js</span>
          </div>

          <div className="skill-item">
            <i>
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg"
                alt="Prisma"
                width={48}
                height={48}
              />
            </i>
            <span>Prisma</span>
          </div>

          {/* Row 3 (AI Core) */}
          <div className="skill-item">
            <i className="fab fa-python" style={{ color: "#3776AB" }}></i>
            <span>Python</span>
          </div>

          <div className="skill-item">
            <i className="fas fa-brain" style={{ color: "#ff4757" }}></i>
            <span>Machine Learning</span>
          </div>

          <div className="skill-item">
            <i className="fas fa-network-wired" style={{ color: "#2ed573" }}></i>
            <span>Deep Learning</span>
          </div>

          <div className="skill-item">
            <i>
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg"
                alt="Scikit-learn"
                width={48}
                height={48}
              />
            </i>
            <span>Scikit-learn</span>
          </div>

          <div className="skill-item">
            <i>
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
                alt="TensorFlow"
                width={48}
                height={48}
              />
            </i>
            <span>TensorFlow</span>
          </div>

          {/* Row 4 (AI Libraries) */}
          <div className="skill-item">
            <i>
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg"
                alt="Keras"
                width={48}
                height={48}
              />
            </i>
            <span>Keras</span>
          </div>

          <div className="skill-item">
            <i>
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
                alt="NumPy"
                width={48}
                height={48}
              />
            </i>
            <span>NumPy</span>
          </div>

          <div className="skill-item">
            <i>
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
                alt="Pandas"
                width={48}
                height={48}
              />
            </i>
            <span>Pandas</span>
          </div>

          <div className="skill-item">
            <i>
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg"
                alt="Matplotlib"
                width={48}
                height={48}
              />
            </i>
            <span>Matplotlib</span>
          </div>

          <div className="skill-item">
            <i>
              <Image
                src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg"
                alt="Seaborn"
                width={48}
                height={48}
              />
            </i>
            <span>Seaborn</span>
          </div>

          {/* Row 5 (Data + Databases) */}
          <div className="skill-item">
            <i>
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                alt="PostgreSQL"
                width={48}
                height={48}
              />
            </i>
            <span>PostgreSQL</span>
          </div>

          <div className="skill-item">
            <i>
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
                width={48}
                height={48}
              />
            </i>
            <span>MongoDB</span>
          </div>

          <div className="skill-item">
            <i>
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                alt="MySQL"
                width={48}
                height={48}
              />
            </i>
            <span>MySQL</span>
          </div>

          <div className="skill-item">
            <i className="fas fa-comments" style={{ color: "#1e90ff" }}></i>
            <span>Natural Language Processing (NLP)</span>
          </div>

          <div className="skill-item">
            <i className="fas fa-eye" style={{ color: "#ffa500" }}></i>
            <span>Computer Vision</span>
          </div>

          {/* Row 6 (Generative AI & Modern AI) */}
          <div className="skill-item">
            <i className="fas fa-robot" style={{ color: "#a855f7" }}></i>
            <span>Generative AI</span>
          </div>

          <div className="skill-item">
            <i className="fas fa-comment-dots" style={{ color: "#3b82f6" }}></i>
            <span>Large Language Models (LLMs)</span>
          </div>

          <div className="skill-item">
            <i className="fas fa-link" style={{ color: "#10b981" }}></i>
            <span>LangChain</span>
          </div>

          <div className="skill-item">
            <i className="fas fa-database" style={{ color: "#ec4899" }}></i>
            <span>Retrieval-Augmented Generation (RAG)</span>
          </div>

          <div className="skill-item">
            <i className="fas fa-user-cog" style={{ color: "#f59e0b" }}></i>
            <span>AI Agents</span>
          </div>

          <div className="skill-item">
            <i className="fas fa-users-cog" style={{ color: "#6366f1" }}></i>
            <span>Multi-Agent Systems</span>
          </div>

          <div className="skill-item">
            <i className="fas fa-layer-group" style={{ color: "#06b6d4" }}></i>
            <span>Vector Databases</span>
          </div>

          <div className="skill-item">
            <i className="fas fa-smile" style={{ color: "#ffd700" }}></i>
            <span>Hugging Face</span>
          </div>

          {/* Row 6 (Other) */}
          <div className="skill-item">
            <i className="fas fa-code-branch" style={{ color: "#6e57e0" }}></i>
            <span>Data Structures & Algorithms</span>
          </div>

          <div className="skill-item">
            <i className="fab fa-figma" style={{ color: "#a259ff" }}></i>
            <span>Figma</span>
          </div>
        </div>
      </div>
    </section>
  );
}
