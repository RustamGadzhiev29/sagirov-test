/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { NavLinkType } from "../Header";

import style from "./BurgerNav.module.scss";

export type NavType = {
  navLinks: Array<NavLinkType>;
};

const BurgerNav: React.FC<NavType> = ({ navLinks }) => {
  const [burgerMenu, setBurgegMenu] = useState(false);
  const onBtnBurger = (): void => {
    return setBurgegMenu(!burgerMenu);
  };

  return (
    <div className={style.burger}>
      <div
        className={
          burgerMenu ? `${style.burgerBtn} ${style.active}` : style.burgerBtn
        }
        onClick={onBtnBurger}
      >
        <span />
      </div>
      <div
        className={
          burgerMenu
            ? `${style.burgerNavItems} ${style.show}`
            : style.burgerNavItems
        }
      >
        {navLinks.map((nav) => {
          return (
            <NavLink key={nav.sectionId} to="/">
              {nav.navTitle}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default BurgerNav;
