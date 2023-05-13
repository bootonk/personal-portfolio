import "./App.css";

import Bio from "./components/Bio";
import Learning from "./components/Learning";
import Doing from "./components/Doing";
import Reading from "./components/Reading";

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm Kate!</h1>
      <Bio />
      <Reading />
      <Learning />
      <Doing />
    </div>
  );
}

export default App;
