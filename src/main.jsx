// main.jsx
// Este é o ponto de entrada da aplicação React.
// Aqui configuramos o BrowserRouter (rotas) e renderizamos o componente raiz <App />.

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

// Criamos a raiz da aplicação React apontando para o elemento com id "root" no index.html.
ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode é útil em desenvolvimento para avisar sobre problemas.
  <React.StrictMode>
    {/* BrowserRouter habilita o uso de rotas com react-router-dom */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

