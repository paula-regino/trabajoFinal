import React from 'react';
import { ContadorCard } from '../hooks/count.jsx';
import { useCart } from '../../cart/hooks/CartContext.jsx';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className='card h-300'>
      <img
        src={
          product.images && product.images[0]
            ? product.images[0]
            : 'https://placehold.co/600x400?text=Sin+imagen'
        }
        alt={product.title}
        className='card-img-top'
        style={{ objectFit: 'cover', height: '200px' }}
      />
      <div className='card-body'>
        <h5 className='card-title'>{product.title}</h5>
        <p className='card-text'>Precio: ${product.price}</p>
        <div className='card-text'>
          <small className='text-muted'>
            Categoría: {product.category?.name}
          </small>
          <div>
            <ContadorCard />
          </div>
          <br />
          <div className='d-flex justify-content-center '>
            <button
              onClick={() => addToCart(product)}
              className='btn btn-outline-secondary'
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
