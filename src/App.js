import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experiences />
      <Projects />
      <Contact /> 
    </div>
  );
}

export default App;
