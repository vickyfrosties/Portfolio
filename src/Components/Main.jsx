import "../App.css";
import Home from "./Home";
import Projects from "./Projects";

const Main = () => {

  return (
    <>
      <main>
        <section className="first-section">
          <Home />
        </section>
        <section>
          <Projects />
        </section>
      </main>
    </>
  );
};

export default Main;