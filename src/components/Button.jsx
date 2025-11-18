// components/Button.jsx
// Componente de botão reaproveitável que recebe props.
// Demonstra o uso de props para configurar comportamento e aparência.

import React from 'react';

function Button({ label, onClick, type = 'button', style }) {
  // Aqui, "label", "onClick", "type" e "style" são props.
  // Props são parâmetros que o componente pai passa para o componente filho.
  // Elas tornam o componente mais genérico e reutilizável.
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: '8px 12px',
        borderRadius: '4px',
        border: '1px solid #1976d2',
        backgroundColor: '#1976d2',
        color: '#fff',
        cursor: 'pointer',
        ...style, // permite sobrescrever estilos via props
      }}
    >
      {/* JSX parece HTML, mas é JavaScript que descreve a UI.
          Aqui, estamos renderizando o texto recebido por props. */}
      {label}
    </button>
  );
}

export default Button;

