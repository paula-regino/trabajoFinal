import React from 'react';
import logo from '../../assets/Logo.png';

export const Footer = () => (
  <footer className='bg-dark text-light py-5 mt-auto border-top border-secondary'>
    <div className='container'>
      {/* Sección principal del footer */}
      <div className='row g-4 pb-4 border-bottom border-secondary'>
        {/* Logo y descripción */}
        <div className='col-lg-4 col-md-6'>
          <div className='d-flex align-items-center mb-3'>
            <img
              src={logo}
              alt='StockStore Logo'
              width={80}
              height={80}
              className='me-3 rounded-circle border border-light border-2'
            />
            <div>
              <h5 className='fw-bold mb-1 text-light'>StockStore</h5>
              <small style={{ color: '#adb5bd' }}>Tu tienda de confianza</small>
            </div>
          </div>
          <p className='small mb-3' style={{ color: '#adb5bd' }}>
            Encuentra los mejores productos al mejor precio. Calidad garantizada
            y atención personalizada para todos nuestros clientes.
          </p>
          <div className='d-flex gap-3'>
            <a
              href='#'
              className='text-light fs-4 hover-effect'
              style={{ transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => (e.target.style.color = '#25D366')}
              onMouseLeave={(e) => (e.target.style.color = 'white')}
            >
              <i className='bi bi-whatsapp'></i>
            </a>
            <a
              href='#'
              className='text-light fs-4 hover-effect'
              style={{ transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => (e.target.style.color = '#EA4335')}
              onMouseLeave={(e) => (e.target.style.color = 'white')}
            >
              <i className='bi bi-envelope'></i>
            </a>
            <a
              href='#'
              className='text-light fs-4 hover-effect'
              style={{ transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => (e.target.style.color = '#4285F4')}
              onMouseLeave={(e) => (e.target.style.color = 'white')}
            >
              <i className='bi bi-geo-alt'></i>
            </a>
          </div>
        </div>

        {/* Enlaces rápidos */}
        <div className='col-lg-2 col-md-6'>
          <h6 className='fw-bold mb-3 text-white'>Enlaces Rápidos</h6>
          <ul className='nav flex-column'>
            <li className='nav-item mb-2'>
              <a
                href='#'
                className='nav-link p-0 text-light hover-link'
                style={{ transition: 'color 0.3s ease', color: '#adb5bd' }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = '#adb5bd')}
              >
                Inicio
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a
                href='#'
                className='nav-link p-0 text-light hover-link'
                style={{ transition: 'color 0.3s ease', color: '#adb5bd' }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = '#adb5bd')}
              >
                Catálogo
              </a>
            </li>
            {/* <li className='nav-item mb-2'>
              <a
                href='#'
                className='nav-link p-0 text-light hover-link'
                style={{ transition: 'color 0.3s ease', color: '#adb5bd' }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = '#adb5bd')}
              >
                Ofertas
              </a>
            </li> */}
            <li className='nav-item'>
              <a
                href='#'
                className='nav-link p-0 text-light hover-link'
                style={{ transition: 'color 0.3s ease', color: '#adb5bd' }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = '#adb5bd')}
              >
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Soporte */}
        <div className='col-lg-3 col-md-6'>
          <h6 className='fw-bold mb-3 text-white'>Soporte</h6>
          <ul className='nav flex-column'>
            <li className='nav-item mb-2'>
              <a
                href='#'
                className='nav-link p-0 text-light hover-link'
                style={{ transition: 'color 0.3s ease', color: '#adb5bd' }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = '#adb5bd')}
              >
                Centro de Ayuda
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a
                href='#'
                className='nav-link p-0 text-light hover-link'
                style={{ transition: 'color 0.3s ease', color: '#adb5bd' }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = '#adb5bd')}
              >
                Términos y Condiciones
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a
                href='#'
                className='nav-link p-0 text-light hover-link'
                style={{ transition: 'color 0.3s ease', color: '#adb5bd' }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = '#adb5bd')}
              >
                Política de Privacidad
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#'
                className='nav-link p-0 text-light hover-link'
                style={{ transition: 'color 0.3s ease', color: '#adb5bd' }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = '#adb5bd')}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Información de contacto */}
        <div className='col-lg-3 col-md-6'>
          <h6 className='fw-bold mb-3 text-white'>Contáctanos</h6>
          <div className='mb-2'>
            <i className='bi bi-geo-alt me-2' style={{ color: '#adb5bd' }}></i>
            <small style={{ color: '#adb5bd' }}>
              Medellín, Antioquia, Colombia
            </small>
          </div>
          <div className='mb-2'>
            <i className='bi bi-envelope me-2' style={{ color: '#adb5bd' }}></i>
            <small style={{ color: '#adb5bd' }}>info@stockstore.com</small>
          </div>
          <div className='mb-3'>
            <i className='bi bi-phone me-2' style={{ color: '#adb5bd' }}></i>
            <small style={{ color: '#adb5bd' }}>+57 3011301713 </small>
          </div>
          <div className='bg-secondary bg-opacity-25 p-3 rounded'>
            <small className='text-white fw-bold d-block mb-1'>
              Horarios de Atención
            </small>
            <small style={{ color: '#adb5bd' }}>
              Lun - Vie: 8:00 AM - 6:00 PM
            </small>
            <br />
            <small style={{ color: '#adb5bd' }}>Sáb: 9:00 AM - 4:00 PM</small>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className='pt-4 text-center'>
        <div className='row align-items-center'>
          <div className='col-md-6 text-md-start text-center mb-2 mb-md-0'>
            <small style={{ color: '#adb5bd' }}>
              &copy; {new Date().getFullYear()} StockStore. Todos los derechos
              reservados.
            </small>
          </div>
          <div className='col-md-6 text-md-end text-center'>
            <small style={{ color: '#adb5bd' }}>
              Hecho con <i className='bi bi-heart-fill text-danger'></i> en
              Colombia
            </small>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
