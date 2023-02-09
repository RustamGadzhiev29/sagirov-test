import React from "react";
import "./App.scss";
import Main from "./components/main/Main";
import Planet from "./components/planet/Planet";
import Header from "./components/header/Header";

type NavLinkType = {
  sectionId: string;
  navTitle: string;
  offset: number;
  style: { marginTop: string };
};

function App() {
  const navLinks: Array<NavLinkType> = [
    {
      sectionId: "Main",
      navTitle: "Главная",
      offset: -35,
      style: { marginTop: "0" },
    },
    {
      sectionId: "Tehnology",
      navTitle: "Технология",
      offset: 1,
      style: { marginTop: "40px" },
    },
    {
      sectionId: "Graph",
      navTitle: "График полетов",
      offset: 1,
      style: { marginTop: "40px" },
    },
    {
      sectionId: "About",
      navTitle: "O компании",
      offset: 1,
      style: { marginTop: "40px" },
    },
    {
      sectionId: "Contacts",
      navTitle: "Контакты",
      offset: 1,
      style: { marginTop: "40px" },
    },
  ];
  return (
    <div className="App">
      <Header navLinks={navLinks} />
      <Main />
      <Planet />
    </div>
  );
}

export default App;
