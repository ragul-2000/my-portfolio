import "./about.css"
import award from "../../img/award.png"
import Ragul from "../../img/Ragul_photo.jpg"

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={Ragul} alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <br />
        <p className="a-desc">
          I'm Ragul R, a dynamic Software Engineer With a strong foundation in web technologies and a keen eye for innovation, I specialize in crafting stylish and user-centric solutions. As a Front-End-Developer, I blend independent project management with collaborative teamwork, consistently achieving impactful outcomes. Explore my portfolio to witness my passion for technology and commitment to bridging the gap between innovation and user requirements.
        </p>
        <div className="knowledge">
        <h2 className="skills">Skills</h2>
        <section>
        <h3 className="technical">Tech Stack:</h3>
        <ul className="tech">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Java</li>
            <li>jQuery</li>
            <li>PostgreSQL</li>
            <li>Bootstrap</li>
            <li>Servlet</li>
            <li>Hibernate</li>
            <li>JSP</li>
            <li>WordPress</li>
            <li>Jira</li>
        </ul>
        </section>
       <section className="v">
        <h3>Version Control:</h3>
        <ul>
            <li>Git</li>
        </ul>
        </section>

       <section className="tools">
        <h3>Tools:</h3>
        <ul>
            <li>Visual Studio Code</li>
            <li>Apache Tomcat</li>
            <li>Microsoft Office</li>
        </ul>
        </section>
        </div>
        </div>
    </div>
  )
}

export default About