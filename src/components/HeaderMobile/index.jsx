import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "./../../images/logo.svg";
import { OverlayMenu } from "./../../components";
import './header-mobile.scss';
 
const HeaderMobile = () => {
return (
  <React.Fragment>
   <div className="header-mobile">
       <div className="logo-mobile-container">
       <NavLink to="/" exact>
                <img src={logo} alt="BABAK.UK logo" className="logo" />
        </NavLink> 
      </div>
        <div className="burger-menu-container">
          <nav role="navigation">
            <div id="burger" class="burger-icon-container">
              <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
            </div>
          </nav>
        </div>
      </div>
      <OverlayMenu/>
      </React.Fragment>
  );
};
 
export default HeaderMobile;

 