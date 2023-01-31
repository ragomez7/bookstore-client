import React from 'react';
import ReactDOM from 'react-dom/client';
import { SnackbarProvider } from 'notistack';
import App from './containers/App';


ReactDOM.createRoot(document.getElementById("root")).render(
  <SnackbarProvider>
    <App />
  </SnackbarProvider>
);
