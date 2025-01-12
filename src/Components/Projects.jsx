import '../App.css';
import "../variables.css";
import { Element } from "react-scroll";


const Projects = () => {

  return (
    <>
      <Element name="Projects">
        <h2>Projects</h2>
        <section className="projects-div-containers">
          <div>
            <img src="../Pictures/Home-Desktop.jpg" alt="A visual representation of StatMind's home page, highlighting key features and overall aesthetic for user interaction." />
            <h3>Project StatMind</h3>
            <p>Developed in mobile-first with React, Node.js and MongoDB. Web application that records data, tracks and vizualise statistics weekly using an account.
            </p>
          </div>

          <div>
            <img src="../Pictures/Greenier-Home.png" alt="Greenier, please's home page. A group project realized during a Hackathon in 3 days." />
            <h3>Greenier, please</h3>
            <p>Group hackathon participation
              Various IT profiles (Front-end, Fullstack, Unity, UX/UI, Network)
              Develop creative and eco-responsible digital solutions
              Raising awareness of GreenIT.
            </p>
          </div>

          <div>
            <img src="../Pictures/Solar-system-hp.png" alt="Solar system's home page." />
            <h3>Solar System</h3>
            <p>Website that uses Javascript, HTML & CSS. The goal was to be able to use API request and fetch data from online APIS.
            </p>
          </div>

          <div>
            <img src="../Pictures/FootballFeed-hp.png" alt="Football feed's  home page." />
            <h3>Football Feed score</h3>
            <p>Agregator that uses xml datas form.
            </p>
          </div>

          <div>
            <img src="../Pictures/Greenier-Home.png" alt="Greenier, please's home page. A group project realized during a Hackathon in 3 days." />
            <h3>Greenier, please</h3>
            <p>Group hackathon participation
              Various IT profiles (Front-end, Fullstack, Unity, UX/UI, Network)
              Develop creative and eco-responsible digital solutions
              Raising awareness of GreenIT.
            </p>
          </div>

          <div>
            <img src="../Pictures/Greenier-Home.png" alt="Greenier, please's home page. A group project realized during a Hackathon in 3 days." />
            <h3>Greenier, please</h3>
            <p>Group hackathon participation
              Various IT profiles (Front-end, Fullstack, Unity, UX/UI, Network)
              Develop creative and eco-responsible digital solutions
              Raising awareness of GreenIT.
            </p>
          </div>

        </section>
      </Element>
    </>
  );
};

export default Projects;