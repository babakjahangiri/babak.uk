 import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import logo from "./../../images/logo.svg";
import './header-mobile.scss';
 
const HeaderMobile = () => {
 
return (
   <div class="header-mobile">
      <div>
      
       <div className="logo__container">
         <NavLink to="/" exact>
              <p>
                <img src={logo} alt="BABAK.UK logo" className="logo" />
          </p>
        </NavLink>
    </div>


      </div>
      <div>Burger</div>
      </div>

   
  );
};

export default HeaderMobile;

 