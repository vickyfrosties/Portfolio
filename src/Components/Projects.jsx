import '../App.css';
import "../variables.css";
import { Element } from "react-scroll";


const Projects = () => {

  return (
    <>
      <Element name="Projects">
        <h2>Projects</h2>
        <section className="projects-div-containers">
          <div className="cards">
            <img className="webscreen" src="../Pictures/Home-Desktop.jpg" alt="A visual representation of StatMind's home page." />
            <h3>Project StatMind</h3>
            <p>Developed in mobile-first with React, Node.js and MongoDB. Web application that records data, tracks and vizualise statistics weekly using an account.
            </p>
            <section className="git-langages">
              <div>
                <div className="langages">
                  <p>React</p>
                  <p>Node.js</p>
                  <p>MongoDB</p>
                  <p>Mongoose</p>
                  <p>Express</p>
                  <p>Responsive</p>
                </div>

                <div className="link">
                  <img src="/Icons/github.svg" alt="" />
                  <p>GitHub</p>
                  <a href="https://github.com/vickyfrosties/Project04-StatMind-WorkInProgress" target="blank">
                    <img id="arrow" src="/Icons/arrow-link.svg" alt="https://github.com/vickyfrosties/Project04-StatMind-WorkInProgress" />
                  </a>
                </div>
              </div>
            </section>
          </div>

          <div className="cards">
            <img className="webscreen" src="../Pictures/Greenier-Home.png" alt="Greenier, please's home page. A group project realized during a Hackathon in 3 days." />
            <h3>Greenier, please</h3>
            <p>Group hackathon participation
              Various IT profiles (Front-end, Fullstack, Unity, UX/UI, Network)
              Develop creative and eco-responsible digital solutions
              Raising awareness of GreenIT.
            </p>
            <section className="git-langages">
              <div>
                <div className="langages">
                  <p>React</p>
                  <p>Vite</p>
                  <p>Phaser.js</p>
                  <p>CSS Modules</p>
                  <p>JavaScript (ES6)</p>
                </div>
                <div className="link">
                  <img src="/Icons/github.svg" alt="" />
                  <p>GitHub</p>
                  <a href="https://github.com/vickyfrosties/I3-Greenier-please-Hackathon" target="blank">
                    <img id="arrow" src="/Icons/arrow-link.svg" alt="https://github.com/vickyfrosties/I3-Greenier-please-Hackathon" />
                  </a>
                </div>

              </div>
            </section>

          </div>

          <div className="cards">
            <img className="webscreen" src="../Pictures/Solar-system-hp.png" alt="Solar system's home page." />
            <h3>Solar System</h3>
            <p>This project focuses on logic and algorithmic thinking by creating and manipulating variables. It also emphasizes dynamic interaction with the DOM, including retrieving, creating, and modifying HTML elements. The project covers form handling by learning how to retrieve and validate user input. It introduces API consumption with a public API to fetch and display data with filters, allowing for retrieving, displaying, deleting, and adding data through a custom interface.
            </p>
            <section className="git-langages">
              <div>
                <div className="langages">
                  <p>HTML 5</p>
                  <p>CSS 3</p>
                  <p>JavaScript (ES6)</p>
                  <p>REST APIs requests</p>
                  <p>Responsive</p>
                </div>
                <div className="link">
                  <img src="/Icons/github.svg" alt="" />
                  <p>GitHub</p>
                  <a href="https://github.com/vickyfrosties/Project02-SolarSystem-WorkinProgress-" target="blank">
                    <img id="arrow" src="/Icons/arrow-link.svg" alt="https://github.com/vickyfrosties/Project02-SolarSystem-WorkinProgress-" />
                  </a>
                </div>
              </div>

            </section>
          </div>

          <div className="cards">
            <img className="webscreen" src="../Pictures/FootballFeed-hp.png" alt="Football feed's  home page." />
            <h3>Football Feed score</h3>
            <p>Football Score Aggregator - Built a real-time football score aggregator using Node.js, Express, and XML files. The application processes XML data from multiple sources to fetch and display live football scores dynamically.
            </p>
            <section className="git-langages">
              <div>
                <div className="langages">
                  <p>HTML 5</p>
                  <p>CSS 3</p>
                  <p>JavaScript (ES6)</p>
                  <p>Express</p>
                  <p>EJS</p>
                  <p>XML</p>
                </div>
                <div className="link">
                  <img src="/Icons/github.svg" alt="" />
                  <p>GitHub</p>
                  <a href="https://github.com/vickyfrosties/FeedFootballScore-WorkInProgress" target="blank">
                    <img id="arrow" src="/Icons/arrow-link.svg" alt="https://github.com/vickyfrosties/FeedFootballScore-WorkInProgress" />
                  </a>
                </div>
              </div>
            </section>
          </div>

          <div className="cards">
            <img className="webscreen" src="../Pictures/MotivationProject.png" alt="Motivation project's home page." />
            <h3>Motivation Project</h3>
            <p>This project involves the creation of a complete and interactive website structured around four main pages. The structure was carefully designed to provide intuitive navigation and a smooth user experience.
            </p>
            <section className="git-langages">
              <div>
                <div className="langages">
                  <p>HTML 5</p>
                  <p>CSS 3</p>
                  <p>JavaScript (ES6)</p>
                </div>
                <div className="link">
                  <img src="/Icons/github.svg" alt="" />
                  <p>GitHub</p>
                  <a href="https://github.com/vickyfrosties/Project01-Motivation-Project" target="blank">
                    <img id="arrow" src="/Icons/arrow-link.svg" alt="https://github.com/vickyfrosties/Project01-Motivation-Project" />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </section>
      </Element>
    </>
  );
};

export default Projects;