// pages/Home.jsx
// Página inicial explicando o propósito didático do app.
// Também mostra componentes simples como Counter e ToggleSection.

import React from 'react';
import Counter from '../components/Counter.jsx';
import ToggleSection from '../components/ToggleSection.jsx';

function Home() {
  return (
    <div>
      <h2>Bem-vindo ao React Demo Didático</h2>
      <p>
        Este aplicativo foi criado para demonstrar conceitos básicos do React:
      </p>
      <ul>
        <li>JSX</li>
        <li>Componentes funcionais</li>
        <li>Props</li>
        <li>
          Estado com <code>useState</code>
        </li>
        <li>Eventos (clique, mudança de input, submit)</li>
        <li>Renderização condicional</li>
        <li>Listas e key</li>
        <li>Formulários controlados</li>
        <li>
          Efeitos com <code>useEffect</code>
        </li>
        <li>Lifting state up (subir estado)</li>
        <li>
          Rotas com <code>react-router-dom</code>
        </li>
      </ul>

      <hr />

      <h3>Exemplo de Contador</h3>
      <Counter />

      <hr />

      <h3>Exemplo de Seção com Toggle (abrir/fechar)</h3>
      <ToggleSection />
    </div>
  );
}

export default Home;

