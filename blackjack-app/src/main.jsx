import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './assets/index.css';

// Create a root and render the App component inside StrictMode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
