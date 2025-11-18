// components/ProductList.jsx
// Recebe uma lista de produtos por props e renderiza vários ProductCard.

import React from 'react';
import ProductCard from './ProductCard.jsx';

function ProductList({ products }) {
  // Renderização condicional simples: se não houver produtos, mostra uma mensagem.
  if (!products || products.length === 0) {
    return <p>Nenhum produto disponível no momento.</p>;
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '16px',
        marginTop: '16px',
      }}
    >
      {products.map((product) => (
        // key é importante em listas
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;

