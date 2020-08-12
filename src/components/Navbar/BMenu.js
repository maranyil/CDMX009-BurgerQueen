import React from 'react';
import { Link } from 'react-router-dom';
import './BMenu.css';

function BMenu(props) {
  return (
    <div className="bMenu">
      <nav role="navigation">
        <div className="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul className="menu">
            <h1> Orders </h1>
            <Link to = "new-order">
              <li>New</li>
            </Link>
            <Link to = "incoming">
              <li>Incoming</li>
            </Link>
            <Link to = "ready">
              <li>Ready</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default BMenu;
