// components/ProductCard.jsx
// Componente que recebe os dados de um produto via props
// e demonstra renderização condicional de acordo com a disponibilidade (inStock).

import React from 'react';

function ProductCard({ product }) {
  // Usamos desestruturação para tornar o código mais legível.
  const { name, price, inStock } = product;

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '12px',
      }}
    >
      <h3>{name}</h3>
      <p>Preço: R$ {price.toFixed(2)}</p>

      {/* Renderização condicional: mudamos o texto e a cor de acordo com inStock */}
      <p
        style={{
          color: inStock ? 'green' : 'red',
          fontWeight: 'bold',
        }}
      >
        {inStock ? 'Disponível' : 'Indisponível'}
      </p>

      {/* Podemos também exibir uma mensagem extra quando não está em estoque */}
      {!inStock && (
        <p style={{ fontSize: '0.9rem', color: '#777' }}>
          Este produto está atualmente em falta, mas poderá voltar em breve.
        </p>
      )}
    </div>
  );
}

export default ProductCard;

