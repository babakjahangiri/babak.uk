 import React from 'react';
 import { NavLink } from "react-router-dom";
import logo from "./../../images/logo.svg";
import './header-mobile.scss';
 
const HeaderMobile = () => {
 
return (
   <div class="header-mobile">
       <div className="logo-mobile-container">
       <NavLink to="/" exact>
                <img src={logo} alt="BABAK.UK logo" className="logo" />
        </NavLink> 
      </div>
      <div class="burgerMenu-container">Burger Menu</div>
      </div>

   
  );
};

export default HeaderMobile;

 