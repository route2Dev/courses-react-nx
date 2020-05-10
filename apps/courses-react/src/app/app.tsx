import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import HomePage from './pages/home/home-page';
import CoursesPage from './pages/courses/courses-page';
import { useSelector } from 'react-redux';
import { AppState } from './store/app-state';
import LoadingOverlay from 'react-loading-overlay';
import PageNotFound from './pages/page-not-found';
import AboutPage from './pages/about-page';
import ManageCoursePage from './pages/manage-course/manage-course-page';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './app.scss';

export const App = () => {
  const apiiCallsInProgress = useSelector(
    (state: AppState) => state.apiCallsInProgress
  );

  return (
    <LoadingOverlay active={apiiCallsInProgress > 0} spinner text="Loading...">
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/course/:slug" component={ManageCoursePage} />
          <Route path="/course" component={ManageCoursePage} />
          <Route component={PageNotFound} />
        </Switch>
        <ToastContainer autoClose={3000} hideProgressBar={true} />
      </div>
    </LoadingOverlay>
  );
};

export default App;
