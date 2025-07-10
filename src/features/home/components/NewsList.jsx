import React from 'react';
import { NewsCard } from './NewsCard';
import noticia1 from '../../../assets/images/noticia1.jpg';
import noticia2 from '../../../assets/images/noticia2.jpg';
import noticia3 from '../../../assets/images/noticia3.jpg';

const noticias = [
  {
    titulo: 'Envío Rápido y Seguro',
    resumen:
      'Recibe tus productos en 24-48 horas con nuestro sistema de envío express.',
    imagen: noticia1,
    icono: 'bi bi-truck',
    link: '#',
  },
  {
    titulo: 'Atención al Cliente 24/7',
    resumen:
      'Nuestro equipo de soporte está disponible las 24 horas para ayudarte.',
    imagen: noticia2,
    icono: 'bi bi-headset',
    link: '#',
  },
  {
    titulo: 'Garantía de Satisfacción',
    resumen:
      'Devolución gratuita en 30 días si no estás completamente satisfecho.',
    imagen: noticia3,
    icono: 'bi bi-shield-check',
    link: '#',
  },
];

export const NewsList = () => (
  <section className='py-16 bg-gray-50'>
    <div className='container mx-auto px-4'>
      {/* Header Section */}
      <div className='text-center mb-16'>
        <h2
          className='text-4xl font-bold mb-6'
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Nuestros Servicios
        </h2>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto mb-8'>
          En nuestra tienda nos comprometemos a brindarte la mejor experiencia
          de compra posible. Conoce todos los beneficios y servicios que tenemos
          especialmente diseñados para ti.
        </p>
        <div className='w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full'></div>
      </div>

      {/* Services Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
        {noticias.map((noticia, idx) => (
          <div
            key={idx}
            className='transform hover:scale-105 transition-transform duration-300'
          >
            <NewsCard noticia={noticia} />
          </div>
        ))}
      </div>

      {/* Additional Info Section */}
      <div className='bg-white rounded-xl shadow-sm p-8 mb-12'>
        <div className='text-center mb-8'>
          <h3 className='text-2xl font-bold text-gray-900 mb-4'>
            ¿Por qué elegir nuestros servicios?
          </h3>
          <p className='text-gray-600 max-w-3xl mx-auto'>
            Con más de 10 años de experiencia en el mercado, hemos perfeccionado
            cada aspecto de nuestro servicio para garantizar que tengas la mejor
            experiencia posible.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='text-center p-6'>
            <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'></div>
            <h4 className='text-lg font-semibold text-gray-900 mb-2'>
              50,000+ Clientes
            </h4>
            <p className='text-gray-600 text-sm'>
              Más de 50,000 clientes satisfechos confían en nosotros
            </p>
          </div>

          <div className='text-center p-6'>
            <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'></div>
            <h4 className='text-lg font-semibold text-gray-900 mb-2'>
              Calidad Garantizada
            </h4>
            <p className='text-gray-600 text-sm'>
              Tecnología de punta en todos nuestros procesos
            </p>
          </div>

          <div className='text-center p-6'>
            <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'></div>
            <h4 className='text-lg font-semibold text-gray-900 mb-2'>
              10+ Años
            </h4>
            <p className='text-gray-600 text-sm'>
              Equipo altamente capacitado y especializado
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center'>
        <h4 className='text-2xl font-bold mb-4'>¡Únete a nuestra comunidad!</h4>
        <p className='mb-6 text-blue-100 max-w-2xl mx-auto'>
          Descubre por qué somos la opción número uno en satisfacción al
          cliente. Experimenta la diferencia de un servicio verdaderamente
          excepcional.
        </p>
        <div className='grid grid-cols-2 gap-8 max-w-md mx-auto'>
          <div>
            <div className='text-3xl font-bold mb-1'>98%</div>
            <div className='text-sm text-blue-200'>
              Satisfacción del cliente
            </div>
          </div>
          <div>
            <div className='text-3xl font-bold mb-1'>24/7</div>
            <div className='text-sm text-blue-200'>Soporte disponible</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
