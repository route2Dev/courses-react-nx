import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './app/app';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { COURSE_FEATURE_KEY, courseReducer } from './app/store/course.slice';

import { AUTHOR_FEATURE_KEY, authorReducer } from './app/store/author.slice';

import { apiCallsInProgressReducer } from './app/store/api-status-reducer';

const store = configureStore({
  reducer: {
    apiCallsInProgress: apiCallsInProgressReducer,
    [AUTHOR_FEATURE_KEY]: authorReducer,
    [COURSE_FEATURE_KEY]: courseReducer
  }
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
