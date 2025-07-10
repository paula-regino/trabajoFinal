import React from 'react';
import { CardProducts } from '../features/home/components/CardProducts';

const Catalogo = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header Section */}
      <div className='bg-white shadow-sm'>
        <div className='container mx-auto px-4 py-12'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Catálogo de Productos
            </h1>
            <p className='text-lg text-gray-600 mb-8'>
              Descubre nuestra selección de productos de alta calidad con
              garantía y los mejores precios.
            </p>

            {/* Stats Grid */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-8'>
              <div className='bg-blue-50 rounded-lg p-4'>
                <div className='text-2xl font-bold text-blue-600'>1,000+</div>
                <div className='text-sm text-gray-600'>Productos</div>
              </div>
              <div className='bg-purple-50 rounded-lg p-4'>
                <div className='text-2xl font-bold text-purple-600'>50+</div>
                <div className='text-sm text-gray-600'>Marcas</div>
              </div>
              <div className='bg-green-50 rounded-lg p-4'>
                <div className='text-2xl font-bold text-green-600'>24/7</div>
                <div className='text-sm text-gray-600'>Soporte</div>
              </div>
              <div className='bg-orange-50 rounded-lg p-4'>
                <div className='text-2xl font-bold text-orange-600'>⭐ 4.8</div>
                <div className='text-sm text-gray-600'>Valoración</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className='container mx-auto px-4 py-12'>
        <CardProducts />
      </div>
    </div>
  );
};

export default Catalogo;
