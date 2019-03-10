import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

ReactDOM.render(
  <App serverUrl="http://0.0.0.0:30001" />,
  document.getElementById('root')
);
