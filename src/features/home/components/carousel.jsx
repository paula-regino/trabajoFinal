import React from 'react';
import image1 from '../../../assets/images/imagen.jpg';
import image2 from '../../../assets/images/imagen2.jpg';
import image3 from '../../../assets/images/imagen3.jpg';

export const Carousel = () => (
  <div className='position-relative overflow-hidden rounded-4 shadow-lg mx-3 mx-md-4 my-4'>
    <div id='modernCarousel' className='carousel slide' data-bs-ride='carousel'>
      {/* Indicadores personalizados */}
      <div className='carousel-indicators position-absolute bottom-0 start-50 translate-middle-x mb-4'>
        <button
          type='button'
          data-bs-target='#modernCarousel'
          data-bs-slide-to='0'
          className='active rounded-pill border-0'
          aria-current='true'
          aria-label='Slide 1'
          style={{
            width: '40px',
            height: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            margin: '0 4px',
            transition: 'all 0.3s ease',
          }}
        ></button>
        <button
          type='button'
          data-bs-target='#modernCarousel'
          data-bs-slide-to='1'
          aria-label='Slide 2'
          className='rounded-pill border-0'
          style={{
            width: '40px',
            height: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            margin: '0 4px',
            transition: 'all 0.3s ease',
          }}
        ></button>
        <button
          type='button'
          data-bs-target='#modernCarousel'
          data-bs-slide-to='2'
          aria-label='Slide 3'
          className='rounded-pill border-0'
          style={{
            width: '40px',
            height: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            margin: '0 4px',
            transition: 'all 0.3s ease',
          }}
        ></button>
      </div>

      <div className='carousel-inner' style={{ height: '500px' }}>
        {/* Slide 1 */}
        <div className='carousel-item active position-relative'>
          <img
            src={image1}
            className='d-block w-100 h-100'
            alt='First slide'
            style={{ objectFit: 'cover' }}
          />
          {/* Overlay gradiente */}
          <div
            className='position-absolute top-0 start-0 w-100 h-100'
            style={{
              background:
                'linear-gradient(135deg, rgba(102, 126, 234, 0.7) 0%, rgba(118, 75, 162, 0.7) 100%)',
            }}
          />

          <div className='carousel-caption position-absolute top-50 start-0 translate-middle-y text-start ps-5 pe-5'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6'>
                  <h1
                    className='display-4 fw-bold text-white mb-3'
                    style={{
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                      lineHeight: '1.2',
                    }}
                  >
                    ¡Bienvenido a StockStore!
                  </h1>
                  <p
                    className='fs-5 text-white mb-4'
                    style={{
                      textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                      lineHeight: '1.5',
                    }}
                  >
                    Descubre los mejores productos al mejor precio, con envío
                    rápido y seguro.
                  </p>
                  <button
                    className='btn btn-light btn-lg px-4 py-2 rounded-pill fw-bold'
                    style={{
                      color: '#667eea',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                    }}
                  >
                    Explorar Catálogo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className='carousel-item position-relative'>
          <img
            src={image2}
            className='d-block w-100 h-100'
            alt='Second slide'
            style={{ objectFit: 'cover' }}
          />
          <div
            className='position-absolute top-0 start-0 w-100 h-100'
            style={{
              background:
                'linear-gradient(135deg, rgba(118, 75, 162, 0.7) 0%, rgba(102, 126, 234, 0.7) 100%)',
            }}
          />

          <div className='carousel-caption position-absolute top-50 start-0 translate-middle-y text-start ps-5 pe-5'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6'>
                  <h1
                    className='display-4 fw-bold text-white mb-3'
                    style={{
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                      lineHeight: '1.2',
                    }}
                  >
                    Novedades de la temporada
                  </h1>
                  <p
                    className='fs-5 text-white mb-4'
                    style={{
                      textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                      lineHeight: '1.5',
                    }}
                  >
                    Explora nuestra nueva colección y encuentra lo último en
                    tendencias.
                  </p>
                  <button
                    className='btn btn-light btn-lg px-4 py-2 rounded-pill fw-bold'
                    style={{
                      color: '#764ba2',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                    }}
                  >
                    Ver Novedades
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className='carousel-item position-relative'>
          <img
            src={image3}
            className='d-block w-100 h-100'
            alt='Third slide'
            style={{ objectFit: 'cover' }}
          />
          <div
            className='position-absolute top-0 start-0 w-100 h-100'
            style={{
              background:
                'linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.6) 100%)',
            }}
          />

          <div className='carousel-caption position-absolute top-50 start-0 translate-middle-y text-start ps-5 pe-5'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6'>
                  <h1
                    className='display-4 fw-bold text-white mb-3'
                    style={{
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                      lineHeight: '1.2',
                    }}
                  >
                    Ofertas exclusivas
                  </h1>
                  <p
                    className='fs-5 text-white mb-4'
                    style={{
                      textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                      lineHeight: '1.5',
                    }}
                  >
                    Aprovecha descuentos especiales y promociones por tiempo
                    limitado.
                  </p>
                  <button
                    className='btn btn-light btn-lg px-4 py-2 rounded-pill fw-bold'
                    style={{
                      color: '#667eea',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                    }}
                  >
                    Ver Ofertas
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controles personalizados */}
      <button
        className='carousel-control-prev position-absolute top-50 start-0 translate-middle-y ms-3 border-0 rounded-circle'
        type='button'
        data-bs-target='#modernCarousel'
        data-bs-slide='prev'
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 1)';
          e.target.style.transform = 'translateY(-50%) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
          e.target.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        <span
          className='carousel-control-prev-icon'
          aria-hidden='true'
          style={{
            backgroundImage: 'none',
            color: '#667eea',
            fontSize: '1.2rem',
          }}
        >
          ‹
        </span>
        <span className='visually-hidden'>Previous</span>
      </button>

      <button
        className='carousel-control-next position-absolute top-50 end-0 translate-middle-y me-3 border-0 rounded-circle'
        type='button'
        data-bs-target='#modernCarousel'
        data-bs-slide='next'
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 1)';
          e.target.style.transform = 'translateY(-50%) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
          e.target.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        <span
          className='carousel-control-next-icon'
          aria-hidden='true'
          style={{
            backgroundImage: 'none',
            color: '#667eea',
            fontSize: '1.2rem',
          }}
        >
          ›
        </span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  </div>
);
