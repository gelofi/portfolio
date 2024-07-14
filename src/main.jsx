import React from 'react';
import ReactDOM from 'react-dom/client';

// theme setup
import { ThemeProvider } from './common/ThemeContext.jsx';

//homepage
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('main')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);