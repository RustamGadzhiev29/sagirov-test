import React from "react";

import logo from "../../common/assets/images/logo.png";

import BurgerNav from "./burgerNav/BurgerNav";
import styles from "./Header.module.scss";
import Nav from "./nav/Nav";

export type NavLinkType = {
  sectionId: string;
  navTitle: string;
};

const navLinks: Array<NavLinkType> = [
  {
    sectionId: "Main",
    navTitle: "Главная",
  },
  {
    sectionId: "Tehnology",
    navTitle: "Технология",
  },
  {
    sectionId: "Graph",
    navTitle: "График полетов",
  },
  {
    sectionId: "About",
    navTitle: "O компании",
  },
  {
    sectionId: "Contacts",
    navTitle: "Контакты",
  },
];

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerBody}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          <Nav navLinks={navLinks} />
          <BurgerNav navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
};

export default Header;
