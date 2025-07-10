import React, { useState } from 'react';
import moonz from '../../assets/moonz.png';
// import '../styles/NewTheme.css'; // Importamos el nuevo tema
import { CartButton } from '../../features/cart/components/CartButton';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth } from '../../features/auth/hooks/useAuth';

export function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  // CORRECTO: Usar directamente el estado de Redux como única fuente de verdad.
  // useSelector se encargará de re-renderizar el componente cuando el usuario cambie (al hacer login o logout).
  const user = useSelector((state) => state.auth.user);

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const handleLogout = async () => {
    // 1. Esperamos a que el proceso de logout termine.
    await logout();
    // 2. Una vez completado, navegamos a la página de inicio.
    navigate('/');
  };

  return (
    <header className='p-3'>
      <nav
        className='navbar navbar-expand-lg navbar-dark fixed-top shadow-lg'
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '15px',
          margin: '1rem',
        }}
      >
        <div className='container-fluid'>
          <Link className='navbar-brand d-flex align-items-center' to='/'>
            <img
              src={moonz}
              width='50'
              height='50'
              alt='StockStore Logo'
              className='me-2 rounded-circle border border-light border-2'
              style={{
                transition: 'transform 0.3s ease',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            />
            <div className='d-none d-md-block'>
              <span className='fw-bold fs-4 text-white'>Tianguis</span>
              <div className='small text-white-50'>Tu tienda online</div>
            </div>
          </Link>

          <button
            className='navbar-toggler border-0'
            type='button'
            onClick={handleNavCollapse}
            style={{
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '8px',
              padding: '8px 12px',
            }}
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div
            className={`collapse navbar-collapse ${
              !isNavCollapsed ? 'show' : ''
            }`}
            id='navbarNav'
          >
            <ul className='navbar-nav ms-auto align-items-lg-center'>
              <li className='nav-item mx-2'>
                <Link
                  className='nav-link text-white fw-medium px-3 py-2 rounded-pill'
                  to='/'
                  style={{
                    transition: 'all 0.3s ease',
                    background: 'rgba(255,255,255,0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.2)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.1)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <i className='bi bi-house-door me-2'></i>
                  Inicio
                </Link>
              </li>

              <li className='nav-item mx-2'>
                <Link
                  className='nav-link text-white fw-medium px-3 py-2 rounded-pill'
                  to='/catalogo'
                  style={{
                    transition: 'all 0.3s ease',
                    background: 'rgba(255,255,255,0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.2)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.1)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <i className='bi bi-grid me-2'></i>
                  Productos
                </Link>
              </li>

              {/* Carrito de compras */}
              <li className='nav-item d-flex align-items-center mx-2'>
                <CartButton />
              </li>

              {/* Separador */}
              <li className='nav-item d-none d-lg-block'>
                <div
                  className='vr bg-white bg-opacity-50 mx-2'
                  style={{ height: '25px' }}
                ></div>
              </li>

              {/* Opciones de admin solo si es admin */}
              {user && user.isAdmin && (
                <li className='nav-item mx-2'>
                  <Link
                    className='nav-link text-white fw-medium px-3 py-2 rounded-pill border border-light'
                    to='/admin'
                    style={{
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'white';
                      e.target.style.color = '#667eea';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <i className='bi bi-speedometer2 me-2'></i>
                    Dashboard
                  </Link>
                </li>
              )}

              {/* Si está logueado, mostrar perfil y cerrar sesión */}
              {user ? (
                <>
                  <li className='nav-item mx-2'>
                    <span
                      className='nav-link px-3 py-2 rounded-pill text-white fw-medium d-flex align-items-center'
                      style={{
                        background: 'rgba(255,255,255,0.15)',
                        border: '1px solid rgba(255,255,255,0.3)',
                      }}
                    >
                      <i className='bi bi-person-circle me-2'></i>
                      {user.firstName || user.email}
                    </span>
                  </li>
                  <li className='nav-item ms-lg-2'>
                    <button
                      className='btn btn-outline-light btn-sm rounded-pill px-3'
                      onClick={handleLogout}
                      style={{
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'white';
                        e.target.style.color = '#667eea';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = 'white';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      <i className='bi bi-box-arrow-right me-2'></i>
                      Cerrar sesión
                    </button>
                  </li>
                </>
              ) : (
                <li className='nav-item ms-lg-2'>
                  <Link
                    className='btn btn-light rounded-pill px-4 py-2 fw-medium'
                    to='/register'
                    style={{
                      transition: 'all 0.3s ease',
                      background: 'white',
                      color: '#667eea',
                      border: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <i className='bi bi-person-circle me-2'></i>
                    Registrarse
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Espaciador para navbar fixed */}
      <div style={{ height: '100px' }}></div>
    </header>
  );
}
