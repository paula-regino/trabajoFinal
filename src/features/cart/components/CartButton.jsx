import React from 'react';
import { useCart } from '../hooks/CartContext';

export const CartButton = () => {
  const { itemCount, toggleCart } = useCart();

  return (
    <button
      className='btn btn-outline-secondary position-relative'
      onClick={toggleCart}
    >
      <i className='bi bi-cart3'></i>
      {itemCount > 0 && (
        <span className='badge bg-danger position-absolute top-0 start-100 translate-middle'>
          {itemCount}
        </span>
      )}
    </button>
  );
};
