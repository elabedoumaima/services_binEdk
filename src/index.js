import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './redux/UserSlice'; 
import App from './App';

const store = configureStore({
  reducer: {
    user: userReducer,
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
