import "./App.css";

import Bio from "./components/Bio";
import Learning from "./components/Learning";
import Doing from "./components/Doing";
import Reading from "./components/Reading";
import Contact from "./components/Contact";

import duck from "./assets/rubber-duck.png";

function App() {
  return (
    <div className="App">
      <img src={duck} alt="duck" className="header-img" />
      <h1>Hi, I'm Kate!</h1>
      <div className="block-container">
        <Bio />
        <Learning />
        <Reading />
        <Doing />
      </div>
      <Contact />
    </div>
  );
}

export default App;
