import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar">
    <h1 className="heading">Math Magicians</h1>
    <ul className="page-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Calculator">Calculator</Link></li>
      <li><Link to="/Quote">Quote</Link></li>
    </ul>
  </nav>
);

export default Nav;
