import React from 'react';
import { useProductos } from '../hooks/useProducts';
import { ProductCard } from './ProductCard';

export const CardProducts = ({ limit }) => {
  const { data: products, loading, error } = useProductos();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  const productsToShow = limit ? products.slice(0, limit) : products;

  return (
    <div className='container'>
      <br />
      <h1 className='mb-4 text-center '>Productos Vendidos Hoy</h1>
      <div className='row'>
        {productsToShow.map((product, index) => (
          <div className='col-md-4 mb-4' key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
