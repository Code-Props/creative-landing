import React from 'react';
import ReactDOM from 'react-dom/client';
// import css for styling
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> is a special mode provided by React that can be used to enable additional runtime checks and warnings in development mode, aimed at identifying potential issues and improving the reliability of a React application.
  <React.StrictMode>
    {/* wrap the app with BrowserRouter to enable client side routing */}
    <BrowserRouter>
    {/* this is out app */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

