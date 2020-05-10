import React from 'react';
import { Link } from 'react-router-dom';

import './home-page.scss';

/* eslint-disable-next-line */
export interface HomePageProps {}

export const HomePage = (props: HomePageProps) => {
  return (
    <div className="jumbotron">
      <h1>Welcome to Pluralsight Administration</h1>
      <p>React, Redux and React Router for ultra-responsive web apps.</p>
      <Link to="about" className="btn btn-primary btn-lg">
        Learn more
      </Link>
    </div>
  );
};

export default HomePage;
