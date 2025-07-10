import React from 'react';
import moonz from '../../assets/moonz.png';

export const Footer = () => (
  <footer
    className='text-light py-5 mt-auto border-top'
    style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderTopColor: 'rgba(255, 255, 255, 0.1) !important',
    }}
  >
    <div className='container'>
      {/* Sección principal del footer */}
      <div
        className='row g-4 pb-4 border-bottom'
        style={{ borderBottomColor: 'rgba(255, 255, 255, 0.1)' }}
      >
        {/* Logo y descripción */}
        <div className='col-lg-4 col-md-6'>
          <div className='d-flex align-items-center mb-3'>
            <img
              src={moonz}
              alt='moonz'
              width={80}
              height={80}
              className='me-3 rounded-circle border border-light border-2'
              style={{ boxShadow: '0 4px 15px rgba(255, 255, 255, 0.1)' }}
            />
            <div>
              <h5 className='fw-bold mb-1 text-white'>Luxe & Co.</h5>
              <small style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Tu tienda de confianza
              </small>
            </div>
          </div>
          <p
            className='small mb-3'
            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
          >
            Encuentra los mejores productos al mejor precio. Calidad garantizada
            y atención personalizada para todos nuestros clientes.
          </p>
          <div className='d-flex gap-3'>
            <a
              href='#'
              className='text-light fs-4 hover-effect'
              style={{
                transition: 'all 0.3s ease',
                padding: '8px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.color = '#25D366';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.color = 'white';
              }}
            >
              <i className='bi bi-whatsapp'></i>
            </a>
            <a
              href='#'
              className='text-light fs-4 hover-effect'
              style={{
                transition: 'all 0.3s ease',
                padding: '8px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.color = '#EA4335';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.color = 'white';
              }}
            >
              <i className='bi bi-envelope'></i>
            </a>
            <a
              href='#'
              className='text-light fs-4 hover-effect'
              style={{
                transition: 'all 0.3s ease',
                padding: '8px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.color = '#4285F4';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.color = 'white';
              }}
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
                style={{
                  transition: 'all 0.3s ease',
                  color: 'rgba(255, 255, 255, 0.8)',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'white';
                  e.target.style.paddingLeft = '10px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                  e.target.style.paddingLeft = '0';
                }}
              >
                Inicio
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a
                href='#'
                className='nav-link p-0 text-light hover-link'
                style={{
                  transition: 'all 0.3s ease',
                  color: 'rgba(255, 255, 255, 0.8)',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'white';
                  e.target.style.paddingLeft = '10px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                  e.target.style.paddingLeft = '0';
                }}
              >
                Catálogo
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#'
                className='nav-link p-0 text-light hover-link'
                style={{
                  transition: 'all 0.3s ease',
                  color: 'rgba(255, 255, 255, 0.8)',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'white';
                  e.target.style.paddingLeft = '10px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                  e.target.style.paddingLeft = '0';
                }}
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
                style={{
                  transition: 'all 0.3s ease',
                  color: 'rgba(255, 255, 255, 0.8)',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'white';
                  e.target.style.paddingLeft = '10px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                  e.target.style.paddingLeft = '0';
                }}
              >
                Centro de Ayuda
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a
                href='#'
                className='nav-link p-0 text-light hover-link'
                style={{
                  transition: 'all 0.3s ease',
                  color: 'rgba(255, 255, 255, 0.8)',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'white';
                  e.target.style.paddingLeft = '10px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                  e.target.style.paddingLeft = '0';
                }}
              >
                Términos y Condiciones
              </a>
            </li>
            <li className='nav-item mb-2'>
              <a
                href='#'
                className='nav-link p-0 text-light hover-link'
                style={{
                  transition: 'all 0.3s ease',
                  color: 'rgba(255, 255, 255, 0.8)',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'white';
                  e.target.style.paddingLeft = '10px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                  e.target.style.paddingLeft = '0';
                }}
              >
                Política de Privacidad
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#'
                className='nav-link p-0 text-light hover-link'
                style={{
                  transition: 'all 0.3s ease',
                  color: 'rgba(255, 255, 255, 0.8)',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'white';
                  e.target.style.paddingLeft = '10px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                  e.target.style.paddingLeft = '0';
                }}
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
            <i
              className='bi bi-geo-alt me-2'
              style={{ color: 'rgba(255, 255, 255, 0.8)' }}
            ></i>
            <small style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              PortoBello
            </small>
          </div>
          <div className='mb-2'>
            <i
              className='bi bi-envelope me-2'
              style={{ color: 'rgba(255, 255, 255, 0.8)' }}
            ></i>
            <small style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              informacion@tianguis.com
            </small>
          </div>
          <div className='mb-3'>
            <i
              className='bi bi-phone me-2'
              style={{ color: 'rgba(255, 255, 255, 0.8)' }}
            ></i>
            <small style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              +57 67676856576{' '}
            </small>
          </div>
          <div
            className='p-3 rounded'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <small className='text-white fw-bold d-block mb-1'>
              Horarios de Atención
            </small>
            <small style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Lun - Vie: 8:00 AM - 6:00 PM
            </small>
            <br />
            <small style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Sáb: 9:00 AM - 4:00 PM
            </small>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
