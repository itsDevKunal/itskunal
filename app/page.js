import ProfileCardClient from "@/components/ProfileCardClient";
import styles from "./page.module.css"
import Footer from "@/components/footer";

export default function Page() {
  return (
    <>
    <main className={styles.main}>
      <div id="home" className={styles.welcom}>
        <h1>Kunal Bera</h1>
        <h3>Full-Stack Web-Developer</h3>
        <p>Welcome to my corner of the web! Where code meets creativity and every line tells a story. Grab a coffee, take a seat, and let’s build something awesome together. Keep scrolling—you’re just getting started!</p>
      </div>
      <br />
      <br />
      <div className={styles.container}>
        <div className={styles.centerScreen}>
          <ProfileCardClient />
        </div>
        <div id="about" className={styles.content}>
          <h1>About Me</h1>
          <br />
          <p>Hi, I’m a full-stack web developer driven by curiosity and a love for constant learning. What started as an interest in how websites and apps are built has turned into a passion for working on both the front-end and back-end. While I don’t focus on personal projects, I thrive when collaborating on others' work, solving problems, and contributing fresh ideas. My mindset is simple: “If you can think it, it’s possible.” This keeps me motivated to explore creative solutions and tackle challenges. Coding is more than just my job—it’s something I truly enjoy, and I’m always eager to help build, collaborate, and explore new things in tech.</p>
          <br />
          <h1>Education</h1>
          <br />
          <p>Not that much qualified yet but taking my love <i>Web-Development</i> serious, from a very early age.</p>
          <br />
          <h3>Class X</h3>
          <p>Currently pursuing from Holy Mother School Bharatput, Rajasthan, India.</p>
          <br />
          <h3>Coding Education</h3>
          <p>Going parallel with the coding too.</p>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <br />
      <div id="skills">
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