import "./App.css";

import Bio from "./components/Bio";
import Learning from "./components/Learning";
import Doing from "./components/Doing";
import Reading from "./components/Reading";
import Writing from "./components/Writing";
import Contact from "./components/Contact";

import duck from "./assets/rubber-duck.png";

function App() {
  return (
    <div className="App">
      <img src={duck} alt="duck" className="header-img" />
      <h1>Hi, I'm Kate!</h1>
      <h3>
        Full Stack Developer / Mentor / ADHDer / Maker / 2nd Baseman / Nerd
      </h3>
      <div className="block-container">
        <Bio />
        <Reading />
        <Learning />
        <Doing />
        <Writing />
        <Contact />
      </div>
    </div>
  );
}

export default App;
