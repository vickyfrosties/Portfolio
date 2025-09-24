import { useState } from "react";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  const [mode, setMode] = useState("Home");

  return (
    <>
      <NavBar mode={mode} setMode={setMode} />
      {mode === "Home" && <Home setMode={setMode} />}
      {mode === "Projects" && <Projects />}
      {mode === "About" && <About setMode={setMode} />}
      {mode === "Contact" && <Contact />}
    </>
  );
}

export default App;
