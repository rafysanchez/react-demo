// pages/CatalogPage.jsx
// Página que mostra uma lista de produtos (ou itens de catálogo),
// usando ProductList e ProductCard para demonstrar props, listas e renderização condicional.

import React from 'react';
import ProductList from '../components/ProductList.jsx';

function CatalogPage() {
  // Aqui definimos uma lista de produtos de exemplo.
  // Em um app real, estes dados poderiam vir de uma API.
  const products = [
    { id: 1, name: 'Curso React Básico', price: 49.9, inStock: true },
    { id: 2, name: 'Curso JavaScript Avançado', price: 79.9, inStock: false },
    { id: 3, name: 'Curso CSS para Iniciantes', price: 29.9, inStock: true },
  ];

  return (
    <div>
      <h2>Catálogo de Cursos</h2>
      <p>
        Esta página demonstra como renderizar uma lista de itens usando{' '}
        <code>.map()</code>, passando dados por props para componentes
        reaproveitáveis.
      </p>

      {/* ProductList recebe a lista de produtos por props */}
      <ProductList products={products} />
    </div>
  );
}

export default CatalogPage;

