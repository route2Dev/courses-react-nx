import React, { Component } from 'react';

export class AboutPage extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>
          This app is based on the{' '}
          <a
            href="https://app.pluralsight.com/library/courses/react-redux-react-router-es6/table-of-contents"
            title="Building Applications with React and Redux"
          >
            Building Applications with React and Redux
          </a>{' '}
          Pluralsight course by Cory House. This app uses React, Redux, React
          Router, and many other helpful libraries.
        </p>
        <p>Refactored using</p>
        <ul>
          <li>
            <a href="https://jaredpalmer.com/formik/" title="Formik">
              Formik
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default AboutPage;
