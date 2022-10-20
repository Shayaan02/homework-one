import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';

const header = () => {
  return (
    <header className="header">
      <img src="https://gritacademy.se/wp-content/uploads/2021/05/Grit-Academy-logo.png" alt='Grid-Academy' />
    </header>
  )
}

const footer = () => {
  return (
    <footer className="footer">
      <a href="https://linkedin.com" target="_blank">Linkedin</a>
      <a href="https://facebook.com" target="_blank">Facebook</a>
      <a href="https://youtube.com" target="_blank">Youtube</a>
      <a href="https://google.com" target="_blank">Google</a>
    </footer>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {header()}
    <App />
    {footer()}
  </React.StrictMode>
);