import React from 'react';
import { ContadorCard } from '../hooks/count.jsx';
import { useCart } from '../../cart/hooks/CartContext.jsx';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div
      className='rounded-3 overflow-hidden shadow-sm border-0'
      style={{
        height: '420px',
        backgroundColor: '#ffffff',
        border: '1px solid #e9ecef',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-4px)';
        e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
      }}
    >
      {/* Imagen */}
      <div className='position-relative'>
        <img
          src={
            product.images && product.images[0]
              ? product.images[0]
              : 'https://placehold.co/600x400?text=Sin+imagen'
          }
          alt={product.title}
          className='w-100'
          style={{
            objectFit: 'cover',
            height: '220px',
          }}
        />

        {/* Badge de categoría */}
        <div
          className='position-absolute top-2 end-2 px-2 py-1 rounded-pill text-white'
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            fontSize: '0.7rem',
            fontWeight: '500',
          }}
        >
          {product.category?.name || 'General'}
        </div>
      </div>

      {/* Contenido */}
      <div className='p-4 d-flex flex-column' style={{ height: '200px' }}>
        {/* Título */}
        <h5
          className='fw-semibold mb-2 text-dark'
          style={{
            fontSize: '1rem',
            lineHeight: '1.4',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            minHeight: '2.8rem',
          }}
        >
          {product.title}
        </h5>

        {/* Precio */}
        <div className='mb-3'>
          <span
            className='fw-bold fs-4'
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            ${product.price}
          </span>
        </div>

        {/* Botón - exactamente como el original */}
        <div className='mt-auto'>
          <div className='d-flex justify-content-center'>
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
