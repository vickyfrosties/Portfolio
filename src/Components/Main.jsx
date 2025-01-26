import "../App.css";
import About from "./About/About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import ToTop from "./ToTop/ToTop";

const Main = () => {

  return (
    <>
      <main>
        <section className="home-section">
          <Home />
        </section>
        <section className="projects-section">
          <Projects />
        </section>
        <section className="about-section">
          <About />
        </section>
        <section className="contact-section">
          <Contact />
        </section>
        <ToTop />
      </main>
    </>
  );
};

export default Main;