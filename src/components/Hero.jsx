import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="home-section" id="home">
      <ul className="social-media">
        <li>
          <a href="https://www.instagram.com/amansoni045/">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/u/amansoni45/" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              alt="LeetCode"
              className="social-icon-img"
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/aman-soni-b51345310/">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/Amansoni045">
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>

      <div className="container">
        <div className="row home-row">
          <div className="home-text">
            <h4>Hi, my name is</h4>
            <h1>Aman Soni</h1>
            <span>Web Developer</span>
            <p>
              Aspiring MERN Stack Developer with hands-on experience in web
              projects and an SDE Internship at Bluestock Fintech. Solved 200+
              Python-based DSA problems on LeetCode and hold a CodeForces rating
              of 900 !
            </p>
            <a href="#contact" className="btn btn-1">
              Contact Now
            </a>
          </div>
          <div className="home-image">
            <div className="img-box">
              <img
                src="/Assets/My Photo.png"
                alt="Aman Soni"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="header-myPhoto-shape"></div>
    </section>
  );
}
