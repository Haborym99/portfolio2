import 'remixicon/fonts/remixicon.css'

export default function Presentation() {
    return (
        <div>
            <h2 style={{ margin: "auto" }}>Front-end developer</h2>
            <h3>Who am I?</h3>
            <p>Hello,
                <br />
                <br />
                I am a self-taught front-end developer who is passionate about the craft.
                My primary tools are HTML5, CSS3, and JavaScript, with a particular focus on React.js and recently TypeScript.
                <br />
                I am constantly improving my skills and am comfortable working both independently and in
                a group setting. I am highly motivated, professional, and willing to relocate if necessary.
                Do not hesitate to contact me if you are interested in my profile.
                <br />
                Do not hesitate to contact me if you are interested in my profile.
            </p>
            <ul id="social-links">
                <li>
                    <a href="https://www.linkedin.com/in/tristan-collon/"
                        target="_blank" rel="noreferrer">
                        <i className="ri-linkedin-fill"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Haborym99" target="_blank" rel="noreferrer">
                        <i className="ri-github-line"></i>
                    </a>
                </li>
                <li>
                    <a href="mailto:tristan.collon@outlook.com">
                        <i className="ri-mail-line"></i>
                    </a>
                </li>
            </ul>
            <h2>Tech stack</h2>
            <p>As I said earlier, I mainly use:</p>
            <ul id="tech-stack">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>TypeScript </li>
            </ul>
            However, I won't limit myself to these languages and plan to learn more in the future.
            <h2 >Certificates</h2>
            <p>As a self-taught programmer, I had to start somewhere.
                I decided to begin my journey in the front-end world with freeCodeCamp, taking advantage of
                their interesting and interactive courses.
                I completed three courses, earning certifications in each:
            </p>
            <ul id="certificats">
                <li>
                    <a href="https://www.freecodecamp.org/certification/Squaredius/responsive-web-design"
                        target="_blank" rel="noreferrer">
                        The first certification covered the basics.
                    </a>
                </li>
                <li>
                    <a href="https://www.freecodecamp.org/certification/Squaredius/javascript-algorithms-and-data-structures"
                        target="_blank" rel="noreferrer">
                        The second certification focused on JavaScript.
                    </a>
                </li>
                <li>
                    <a href="https://www.freecodecamp.org/certification/Squaredius/front-end-development-libraries"
                        target="_blank" rel="noreferrer">
                        The third certification covered several front-end libraries.
                    </a>
                </li>
            </ul>
            <p> During those courses and after them I created various
                personal projects, such as the one showcased on this page. These projects
                allowed me to gain hands-on experience and further develop my skills in frontend
                development.
            </p>
        </div>
    );
}