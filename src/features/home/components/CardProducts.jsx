import React from 'react';
import { useProductos } from '../hooks/useProducts';
import { ProductCard } from './ProductCard';

export const CardProducts = ({ limit }) => {
  const { data, loading, error } = useProductos();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  const productsToShow = limit ? data.slice(0, limit) : data;

  return (
    <div className='container'>
      <br />
      <h1 className='mb-4 text-center '>Nuestros Productos</h1>
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
