import React from "react";

import { NavLink } from "react-router-dom";

import { NavLinkType } from "../Header";

import style from "./Nav.module.scss";

export type NavType = {
  navLinks: Array<NavLinkType>;
};

const Nav: React.FC<NavType> = ({ navLinks }) => {
  return (
    <div className={style.nav}>
      {navLinks.map((nav) => {
        return (
          <NavLink className={style.active} key={nav.sectionId} to="/">
            {nav.navTitle}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Nav;
