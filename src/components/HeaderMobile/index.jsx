import React, { useState, useContext } from 'react';
import { NavLink } from "react-router-dom";
import logo from "./../../images/logo.svg";
import {ToggleBurgerContext,ToggleBurgerProvider} from "./../../context";
import { OverlayMenu, BurgerIcon } from "./../../components";
import './header-mobile.scss';
 
const HeaderMobile = () => {

return (
  <React.Fragment>
  <ToggleBurgerProvider>
   <div className="header-mobile">
       <div className="logo-mobile-container">
       <NavLink to="/" exact>
                <img src={logo} alt="BABAK.UK logo" className="logo" />
        </NavLink> 
      </div>
        <div className="burger-icon-container">
           {/* <BurgerIcon toggleBurger={toggleBurger}/> */}
            <BurgerIcon/>
        </div>
      </div>
      <OverlayMenu/>
      </ToggleBurgerProvider>
      </React.Fragment>
  );
};

export default HeaderMobile;

 