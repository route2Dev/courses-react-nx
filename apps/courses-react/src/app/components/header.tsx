import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return (
    <nav>
      <NavLink to="/" activeClassName="active" exact={true}>
        Home
      </NavLink>
      {' | '}
      <NavLink to="/courses" activeClassName="active">
        Courses
      </NavLink>
      {' | '}
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
    </nav>
  );
};

export default Header;
