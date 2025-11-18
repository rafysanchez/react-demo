// App.jsx
// Componente raiz da aplicação.
// Aqui definimos o layout principal e as rotas de cada página.

import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home.jsx';
import TasksPage from './pages/TasksPage.jsx';
import CatalogPage from './pages/CatalogPage.jsx';
import AboutPage from './pages/AboutPage.jsx';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      {/* Cabeçalho e menu de navegação */}
      <header style={{ padding: '16px', borderBottom: '1px solid #ccc' }}>
        <h1>React Demo Didático</h1>
        <nav style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
          {/* NavLink permite estilizar o link ativo automaticamente */}
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: 'none',
              fontWeight: isActive ? 'bold' : 'normal',
              color: isActive ? '#1976d2' : '#333',
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/tasks"
            style={({ isActive }) => ({
              textDecoration: 'none',
              fontWeight: isActive ? 'bold' : 'normal',
              color: isActive ? '#1976d2' : '#333',
            })}
          >
            Tarefas
          </NavLink>
          <NavLink
            to="/catalog"
            style={({ isActive }) => ({
              textDecoration: 'none',
              fontWeight: isActive ? 'bold' : 'normal',
              color: isActive ? '#1976d2' : '#333',
            })}
          >
            Catálogo
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              textDecoration: 'none',
              fontWeight: isActive ? 'bold' : 'normal',
              color: isActive ? '#1976d2' : '#333',
            })}
          >
            Sobre
          </NavLink>
        </nav>
      </header>

      {/* Conteúdo principal, onde cada rota renderiza uma página */}
      <main style={{ padding: '16px' }}>
        <Routes>
          {/* Definição das rotas principais */}
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

