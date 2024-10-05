import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './copmonents/App/App';
import 'modern-normalize';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
