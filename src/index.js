import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from './store/reducers';
const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
