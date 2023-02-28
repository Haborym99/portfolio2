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
                My primary tools are HTML5, CSS3, and JavaScript, with a particular focus on React.js.
                <br />
                I am continually learning and training to enhance my skills, and I am comfortable
                working both independently and in a group setting. I am highly motivated, professional,
                and willing to relocate if necessary.
                <br />
                Do not hesitate to contact me if you are interested in my profile.
            </p>
            <ul id="social-links">
                <li>
                    <a href="https://www.linkedin.com/in/tristan-collon/"
                        target="_blank">
                        <i className="ri-linkedin-fill"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Haborym99" target="_blank">
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
            <p>Has I said earlier I mainly use:</p>
            <ul id="tech-stack">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>TypeScript </li>
            </ul>
            However I won't limit myself to those languages and learn more of them.
            <h2 >Certificats</h2>
            <p>As I self-taught I had to start somewhere, so I decided to start with freeCodeCamp,
                as a first step in the front-end world
            </p>
            <p>Courses was really interesting and interactive so I took three courses there, here's the links
                for each certifications I got:
            </p>
            <ul id="certificats">
                <li>
                    <a href="https://www.freecodecamp.org/certification/Squaredius/responsive-web-design"
                        target="_blank">
                        The first one about basis
                    </a>
                </li>
                <li>
                    <a href="https://www.freecodecamp.org/certification/Squaredius/javascript-algorithms-and-data-structures"
                        target="_blank">
                        The second one about JavasCripts
                    </a>
                </li>
                <li>
                    <a href="https://www.freecodecamp.org/certification/Squaredius/front-end-development-libraries"
                        target="_blank">
                        And the last one about some front-end librairies
                    </a>
                </li>
            </ul>
            <p>Since and while doing them I started and kept doing personal projects like this one or others that you'll see,
                on the right side of this page
            </p>
        </div>
    );
}