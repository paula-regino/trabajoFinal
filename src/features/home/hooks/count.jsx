import React, { useState } from 'react';

export function ContadorCard() {
  const [count, setCount] = useState(0);

  const incrementar = () => setCount(count + 1);
  const decrementar = () => setCount(count - 1);

  return (
    <div className='d-flex align-items-center justify-content-center gap-2'>
      <button
        className='btn btn-outline-secondary btn-sm'
        onClick={decrementar}
      >
        -
      </button>
      <span className='fs-5 px-3'>{count}</span>
      <button
        className='btn btn-outline-secondary btn-sm'
        onClick={incrementar}
      >
        +
      </button>
    </div>
  );
}
// Este componente ContadorCard permite incrementar y decrementar un contador
// mediante dos botones. Utiliza el hook useState de React para manejar el estado del contador.
