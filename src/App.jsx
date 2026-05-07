import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
        <br />
        <About />
        <br />
        <br />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default App;