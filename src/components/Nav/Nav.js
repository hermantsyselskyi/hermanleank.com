import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/user">
            User Home
          </Link>
        </li>

        <li>
          <Link to="/pieces">
            Pieces
          </Link>
        </li>
        <li>
          <Link to="/store">
            Store
          </Link>
        </li>
        <li>
          <Link to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/years">
            Years
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
