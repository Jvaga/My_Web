import "./App.scss";
import About from "./components/about/About";
import MySkills from "./components/getToKnowMe/MySkills";
import Hero from "./components/hero/Hero";
import MyWork from "./components/myWork/MyWork";
import Navbar from "./components/navbar/Navbar";
import KnowMe from "./components/knowMe/KnowMe";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <section className="section" id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section className="section" id="Über mich">
        <KnowMe />
      </section>
      <section className="section">
        <About />
      </section>
      <section className="section" id="Kenntnisse">
        <MySkills />
      </section>
      <section className="section">
        <Skills />
      </section>
      <section className="section" id="Portfolio">
        <MyWork />
      </section>
      <Portfolio />
    </>
  );
}

export default App;
