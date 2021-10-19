import ClassComponent from "./components/class-component";
import FunctionalComponent from "./components/functional-component";

import "./App.css";

function App() {
  return (
    <div className="app">
      <FunctionalComponent name="Paco" />
      <ClassComponent name="Juan" />
    </div>
  );
}

export default App;
