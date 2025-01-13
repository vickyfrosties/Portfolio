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
            <div>
              <a href="https://github.com/vickyfrosties/Project04-StatMind-WorkInProgress" target="blank">
                <img src="/Icons/github.svg" alt="StatMind Github Link" />
              </a>
              <button>See more</button>
            </div>
          </div>

          <div className="cards">
            <img className="webscreen" src="../Pictures/Greenier-Home.png" alt="Greenier, please's home page. A group project realized during a Hackathon in 3 days." />
            <h3>Greenier, please</h3>
            <p>Group hackathon participation
              Various IT profiles (Front-end, Fullstack, Unity, UX/UI, Network)
              Develop creative and eco-responsible digital solutions
              Raising awareness of GreenIT.
            </p>
            <div>
              <a href="https://github.com/vickyfrosties/I3-Greenier-please-Hackathon" target="blank">
                <img src="/Icons/github.svg" alt="Greenier, please Github Link" />
              </a>
              <button>See more</button>
            </div>

          </div>

          <div className="cards">
            <img className="webscreen" src="../Pictures/Solar-system-hp.png" alt="Solar system's home page." />
            <h3>Solar System</h3>
            <p>Website that uses Javascript, HTML & CSS. The goal was to be able to use API request and fetch data from online APIS.
            </p>
            <div>
              <a href="https://github.com/vickyfrosties/Project02-SolarSystem-WorkinProgress-" target="blank">
                <img src="/Icons/github.svg" alt="Solar System Github Link" />
              </a>
              <button>See more</button>
            </div>
          </div>

          <div className="cards">
            <img className="webscreen" src="../Pictures/FootballFeed-hp.png" alt="Football feed's  home page." />
            <h3>Football Feed score</h3>
            <p>Football Score Aggregator - Built a real-time football score aggregator using Node.js, Express, and XML files. The application processes XML data from multiple sources to fetch and display live football scores dynamically.
            </p>
            <div>
              <a href="https://github.com/vickyfrosties/Project04-StatMind-WorkInProgress" target="blank">
                <img src="/Icons/github.svg" alt="StatMind Github Link" />
              </a>
              <button>See more</button>
            </div>
          </div>

          <div className="cards">
            <img className="webscreen" src="../Pictures/MotivationProject.png" alt="Motivation project's home page." />
            <h3>Motivation Project</h3>
            <p>First ever project that uses basic html/css & Javascript code.
            </p>
            <div>
              <a href="https://github.com/vickyfrosties/Project01-Motivation-Project" target="blank">
                <img src="/Icons/github.svg" alt="Motivation Project Github Link" />
              </a>
              <button>See more</button>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
};

export default Projects;