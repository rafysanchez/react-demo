// components/ToggleSection.jsx
// Demonstra estado + renderização condicional.

import React, { useState } from 'react';
import Button from './Button.jsx';

function ToggleSection() {
  // Estado booleano para controlar se a seção está visível.
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    // Alterna o valor de true para false ou vice-versa.
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      style={{
        border: '1px dashed #777',
        padding: '16px',
        borderRadius: '8px',
        maxWidth: '400px',
      }}
    >
      <Button
        label={isOpen ? 'Esconder detalhes' : 'Mostrar detalhes'}
        onClick={handleToggle}
        style={{ backgroundColor: '#555', borderColor: '#555' }}
      />

      {/* Renderização condicional:
          Só renderizamos o bloco abaixo se isOpen for true. */}
      {isOpen && (
        <div style={{ marginTop: '12px' }}>
          <p>
            Esta é uma seção que aparece e desaparece com base em um estado
            booleano. Isso é um exemplo de <strong>renderização condicional</strong>.
          </p>
        </div>
      )}
    </div>
  );
}

export default ToggleSection;

