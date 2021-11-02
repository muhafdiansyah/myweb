import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Skill from "./components/skill/Skill";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./App.scss";


<link rel="stylesheet" href="App.scss"></link>

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Skill/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
