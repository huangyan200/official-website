import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import RoutesComponent from "./app.tsx";
import './index.css';

const CLIENT_BASE_PATH = process.env.CLIENT_BASE_PATH || '/';

const MainApp = () => {
  return (
    <BrowserRouter basename={CLIENT_BASE_PATH}>
      <ErrorBoundary
        fallbackRender={({ error }) => (
          <div style={{ padding: 24, fontFamily: 'Inter, Arial, sans-serif' }}>
            <h1 style={{ marginBottom: 8 }}>Application Error</h1>
            <pre style={{ whiteSpace: 'pre-wrap' }}>{error?.message || 'Unknown error'}</pre>
          </div>
        )}
      >
        <RoutesComponent />
      </ErrorBoundary>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")!).render(<MainApp />);
