import React from 'react';
import { useCart } from '../../cart/hooks/CartContext';

export const Cart = () => {
  const {
    items,
    isOpen,
    total,
    itemCount,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
    cartRef,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className='cart-overlay'>
      <div className='cart-sidebar' ref={cartRef}>
        <div className='cart-header'>
          <h3>
            <i className='bi bi-cart3'></i> Carrito ({itemCount})
          </h3>
          <button
            className='btn btn-outline-secondary btn-sm'
            onClick={toggleCart}
          >
            <i className='bi bi-x-lg'></i>
          </button>
        </div>
        <div className='cart-content'>
          {items.length === 0 ? (
            <div className='empty-cart'>
              <i className='bi bi-cart-x display-4 text-muted'></i>
              <p className='text-muted mt-3'>Tu carrito está vacío</p>
            </div>
          ) : (
            <>
              <div className='cart-items'>
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>
              <div className='cart-footer'>
                <div className='cart-total'>
                  <h4>Total: ${total}</h4>
                </div>
                <div className='cart-actions'>
                  <button
                    className='btn btn-outline-danger btn-sm me-2'
                    onClick={clearCart}
                  >
                    <i className='bi bi-trash'></i> Vaciar
                  </button>
                  <button className='btn btn-primary'>
                    <i className='bi bi-credit-card'></i> Comprar
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const CartItem = ({ item, onUpdateQuantity, onRemove }) => (
  <div className='cart-item'>
    <img
      src={item.image || (item.images && item.images[0])}
      alt={item.title}
      className='cart-item-image'
    />
    <div className='cart-item-details'>
      <h6 className='cart-item-title'>{item.title}</h6>
      <p className='cart-item-price'>${item.price}</p>
      <div className='quantity-controls'>
        <button
          className='btn btn-outline-secondary btn-sm'
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
        >
          <i className='bi bi-dash'></i>
        </button>
        <span className='quantity'>{item.quantity}</span>
        <button
          className='btn btn-outline-secondary btn-sm'
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        >
          <i className='bi bi-plus'></i>
        </button>
      </div>
      <div className='item-total'>
        Subtotal: ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
    <button
      className='btn btn-outline-danger btn-sm remove-btn'
      onClick={() => onRemove(item.id)}
    >
      <i className='bi bi-x'></i>
    </button>
  </div>
);
