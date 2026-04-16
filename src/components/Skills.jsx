import Image from "next/image";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-info">
        <div className="skills-grid">
          {/* FRONTEND */}
          <div className="skill-item">
            <i className="fab fa-html5" style={{ color: "#e34c26" }}></i>
            <span>HTML</span>
          </div>

          <div className="skill-item">
            <i className="fab fa-css3-alt" style={{ color: "#264de4" }}></i>
            <span>CSS</span>
          </div>

          <div className="skill-item">
            <i className="fab fa-js" style={{ color: "#f0db4f" }}></i>
            <span>JavaScript</span>
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
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                alt="Tailwind CSS"
                width={48}
                height={48}
              />
            </i>
            <span>Tailwind CSS</span>
          </div>

          {/* BACKEND */}
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


          {/* DATABASES */}
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

          {/* DATA / ANALYTICS */}
          <div className="skill-item">
            <i className="fab fa-python" style={{ color: "#3776AB" }}></i>
            <span>Python</span>
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

          {/* TOOLS */}
          <div className="skill-item">
            <i className="fas fa-file-excel" style={{ color: "#217346" }}></i>
            <span>Excel / Spreadsheets</span>
          </div>

          <div className="skill-item">
            <i className="fab fa-figma" style={{ color: "#a259ff" }}></i>
            <span>Figma</span>
          </div>

          {/* CS FUNDAMENTALS */}
          <div className="skill-item">
            <i className="fas fa-code-branch" style={{ color: "#6e57e0" }}></i>
            <span>Data Structures and algorithms</span>
          </div>
        </div>
      </div>
    </section>
  );
}
