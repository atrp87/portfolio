import { BrowserRouter as Router } from 'react-router-dom';
import App from './container/App';
import ReactDOM from 'react-dom';
import React from 'react';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

