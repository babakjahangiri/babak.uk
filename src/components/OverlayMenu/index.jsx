import React from 'react';
import './overlay-menu.scss';

const OverlayMenu = () => {
  return (
  <div className="overlay-menu">
        <nav className="nav-hamburger">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Clients</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
  </div>
  );
};

export default OverlayMenu;