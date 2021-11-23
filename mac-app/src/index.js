import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './Testing/reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Accepts a function to log results (for example: reportWebVitals(console.log))
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
