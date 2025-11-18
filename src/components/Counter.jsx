// components/Counter.jsx
// Demonstra estado com useState, eventos de clique e JSX.

import React, { useState } from 'react';
import Button from './Button.jsx';

function Counter() {
  // useState cria um estado interno para o componente.
  // count é o valor atual, setCount é a função para atualizar esse valor.
  const [count, setCount] = useState(0);

  // Handlers de evento para os botões.
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '16px',
        borderRadius: '8px',
        maxWidth: '300px',
      }}
    >
      {/* Este é JSX: parece HTML, mas na verdade é sintaxe JavaScript que o React
          transforma em chamadas de funções para criar elementos virtuais. */}
      <p>Valor atual do contador: {count}</p>

      {/* Eventos em JSX usam camelCase (onClick, onChange, etc.)
          e recebem funções JavaScript. */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button label="-1" onClick={handleDecrement} />
        <Button label="+1" onClick={handleIncrement} />
      </div>
    </div>
  );
}

export default Counter;

