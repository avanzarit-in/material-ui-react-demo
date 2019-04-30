import React from "react";
import ReactDOM from "react-dom";
import Types from "./components/types/Types";
import SvgIcons from "./components/icons/SvgIcons";
import "./styles.css";

function App() {
  return <SvgIcons />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
