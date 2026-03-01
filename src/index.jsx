/**
 * Entry point for the Gotham Watch React application.
 * Mounts the root component into the DOM and sets up the BrowserRouter for client-side routing.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'antd/dist/reset.css'; // Ant Design base styles
import App from './App';

// Create a root element and render the application within React.StrictMode
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
