import React from 'react';
import { CardProducts } from '../features/home/components/CardProducts';

const Catalogo = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Catálogo de Productos</h1>
        <p className="lead text-secondary">
          Explora nuestra variedad de productos y agrégalos fácilmente a tu carrito.
        </p>
        <hr className="w-25 mx-auto" />
      </div>
      <CardProducts />
    </div>
  );
};

export default Catalogo;
