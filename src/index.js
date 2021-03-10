import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import shiftReducer from "./containers/ShiftDemo/reducer";
import utilReducer from "./containers/util/reducer";
import './index.css';
import App from './App';

const reducer = combineReducers({
  shiftReducer,
  utilReducer
});

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
