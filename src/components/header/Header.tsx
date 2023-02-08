import React from "react";

import logo from "../../assets/images/logo.png";

import BurgerNav from "./burgerNav/BurgerNav";
import styles from "./Header.module.scss";
import Nav from "./nav/Nav";

type HeaderPropsType = {
  navLinks: Array<NavLinkType>;
};
export type NavLinkType = {
  sectionId: string;
  navTitle: string;
  offset: number;
  style: { marginTop: string };
};

const Header: React.FC<HeaderPropsType> = ({ navLinks }) => {
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
