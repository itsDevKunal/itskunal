'use client'
import { useEffect } from "react"
import styles from "./page.module.css"
import Footer from "@/components/footer";

export default function Page() {
  useEffect(() => {
      // Scroll to the target with an offset when the page loads
      if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100, // Adjust offset value here
            behavior: 'smooth',
          });
        }
      }
    }, []);
  
    const handleLinkClick = (e, target) => {
      e.preventDefault();
      const targetElement = document.querySelector(target);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 40,
          behavior: 'smooth',
        });
      }
    };

  return (
    <>
      <main className={styles.main}>
        <div id="home" className={styles.hero}>
          <div className={styles.left}>
            <h1>Hi, I'm Kunal</h1>
            <h1>Creative Tech Enthusiast</h1>
            <p>I build intractive, beautiful and modern web experience</p>
            <br />
            <br />
            <a onClick={(e) => handleLinkClick(e, '#skills')} className={styles.button}>View my Skills</a>
          </div>
          <div className={styles.right}>
            <img src="/coding.png" alt="Hero Image" />
          </div>
        </div>
        <br />
        <br />
        <div id="about" className={styles.about}>
          <div className={styles.aboutCont}>
            <div>
              <h1>About Me</h1>
              <br />
              <p>As a passionate and detail-oriented student aspiring to be a full-stack web developer, I am driven by the goal of building clean and innovative web solutions. My expertise lies in the full development lifecycle, from conceptualizing ideas to crafting functional and polished applications that provide an exceptional user experience. I thrive in a collaborative environment, valuing a team-oriented approach to problem-solving. By combining my technical skills with a keen eye for design, I strive to create solutions that are not only efficient and robust but also visually appealing and intuitive. I am currently open to new collaborations and eager to work with others to tackle challenging problems and bring new ideas to life.</p>
            </div>
            <div>
              <img src="/myimg1.png" alt="myImg" />
              <img src="/myimg2.png" alt="myImg" />
              <img src="/myimg3.png" alt="myImg" />
            </div>
          </div>
          <h2>Education</h2>
          <br />
          <p>I’m still at the beginning of my academic journey, currently pursuing my 10th grade. While I may not have formal degrees yet, I have a strong passion for technology, creativity, and self-learning. I continuously explore new tools, languages, and frameworks to sharpen my skills, and I look forward to updating this section as I grow in both education and experience.</p>
          <br />
          <h3>Class X</h3>
          <p>Currently pursuing from <strong>Holy Mother School</strong> Bharatput, Rajasthan, India.</p>
          <br />
          <h3>Coding Education</h3>
          <p>Going parallel with the coding too.</p>
        </div>
        <div id="skills" className={styles.skills}>
          <h1>Skills</h1>
          <br />
          <br />
          <div className={styles.skillcontainer}>
            <div className={styles.skill}>
              <img src="/html.svg" alt="html" />
              <h3>HTML</h3>
            </div>
            <div className={styles.skill}>
              <img src="/css.svg" alt="css" />
              <h3>CSS</h3>
            </div>
            <div className={styles.skill}>
              <img src="/js.svg" alt="javascript" />
              <h3>JavaScript</h3>
            </div>
            <div className={styles.skill}>
              <img src="/node.svg" alt="node.js" />
              <h3>Node.js</h3>
            </div>
            <div className={styles.skill}>
              <img src="/react.svg" alt="react" />
              <h3>React</h3>
            </div>
            <div className={styles.skill}>
              <img src="/next.png" alt="nextjs" />
              <h3>Next.js</h3>
            </div>
            <div className={styles.skill}>
              <img src="/mongodb.svg" alt="mongodb" />
              <h3>MongoDB</h3>
            </div>
            <div className={styles.skill}>
              <img src="/linux.png" alt="linux" />
              <h3>Linux</h3>
            </div>
            <div className={styles.skill}>
              <img src="/bash.svg" alt="bash" />
              <h3>Bash</h3>
            </div>
            <div className={styles.skill}>
              <img src="/git.svg" alt="git" />
              <h3>Git</h3>
            </div>
            <div className={styles.skill}>
              <img src="/github.svg" alt="github" />
              <h3>GitHub</h3>
            </div>
            <div className={styles.skill}>
              <img src="/vsc.svg" alt="vscode" />
              <h3>VS Code</h3>
            </div>
            <div className={styles.skill}>
              <img src="/vercel.png" alt="Vercel Triangle" />
              <h3>Vercel</h3>
            </div>
            <div className={styles.skill}>
              <img src="/figma.svg" alt="figma" />
              <h3>Figma</h3>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}