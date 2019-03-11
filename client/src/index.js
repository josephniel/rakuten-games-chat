import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

const serverUrl = window.location.protocol + "//" + window.location.hostname + ":30001";

ReactDOM.render(
  <App serverUrl={serverUrl} />,
  document.getElementById('root')
);
