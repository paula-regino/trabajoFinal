import React from 'react';

export function ContadorCard({ quantity, onIncrement, onDecrement }) {
  return (
    <div className='d-flex align-items-center justify-content-center gap-2'>
      <button
        className='btn btn-outline-secondary btn-sm'
        onClick={onDecrement}
        disabled={quantity <= 1}
      >
        -
      </button>
      <span className='fs-5 px-3'>{quantity}</span>
      <button
        className='btn btn-outline-secondary btn-sm'
        onClick={onIncrement}
      >
        +
      </button>
    </div>
  );
}
