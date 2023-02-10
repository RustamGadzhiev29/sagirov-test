import React from "react";
import "./App.scss";
import Main from "./components/main/Main";
import Planet from "./components/planet/Planet";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Planet />
    </div>
  );
}

export default App;
