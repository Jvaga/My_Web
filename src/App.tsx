import "./App.scss";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <section className="section" id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section className="section" id="Services">
        <Parallax type={"services"} />
      </section>
      <section className="section">
        <About />
      </section>
      <section className="section" id="Skills">
        <Parallax type={"Skills"} />
      </section>
      <section className="section">
        <Skills />
      </section>
      <section className="section" id="Portfolio">
        <Parallax type={"portfolio"} />
      </section>
      <Portfolio />
      <section className="section" id="Contact">
        contact
      </section>
    </>
  );
}

export default App;
