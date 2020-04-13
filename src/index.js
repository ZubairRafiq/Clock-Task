import React from "react";
import ReactDOM from "react-dom";
import Clock from "./Germanclock";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Clock title="Germany" datediff={0} />
    
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
