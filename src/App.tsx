import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import CatalogPage from './pages/CatalogPage.jsx'
import TasksPage from './pages/TasksPage.jsx'
import AboutPage from './pages/AboutPage.jsx'

function App() {
  return (
    <div className="app-layout">
      <header className="app-header">
        <h1>React Demo Didático</h1>
        <nav className="app-nav">
          <NavLink to="/" end>
            Início
          </NavLink>
          <NavLink to="/catalogo">
            Catálogo
          </NavLink>
          <NavLink to="/tarefas">
            Tarefas
          </NavLink>
          <NavLink to="/sobre">
            Sobre
          </NavLink>
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<CatalogPage />} />
          <Route path="/tarefas" element={<TasksPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="*" element={<p>Rota não encontrada.</p>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
