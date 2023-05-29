import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider,Route} from 'react-router-dom';

import App from './App';
import Visualizador from './pages/Visualizador';
import Mapa from './pages/Mapa';
import Relatorios from './pages/Relatorios';
import Documentos from './pages/Documentos';
import Serie from './pages/Serie';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/visualizador",
    element: <Visualizador/>,
  },
  {
    path: "/mapa-interativo",
    element: <Mapa/>,
  },
  {
    path: "/relatorios",
    element: <Relatorios/>,
  },
  {
    path: "/documentos-tecnicos",
    element: <Documentos/>,
  },
  {
    path: "/serie-historica",
    element: <Serie/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
