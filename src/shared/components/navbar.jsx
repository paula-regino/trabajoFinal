import React, { useState } from 'react';
import logo from '../../assets/Logo.png';
import '../../shared/styles/estiloLanding.css';
import { CartButton } from '../../features/cart/components/CartButton';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth } from '../../features/auth/hooks/useAuth';

export function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  // Obtener usuario actual desde Redux o localStorage
  const reduxUser = useSelector((state) => state.auth.user);
  const [user, setUser] = useState(() => {
    try {
      return reduxUser || JSON.parse(localStorage.getItem('currentUser'));
    } catch {
      return null;
    }
  });

  const { logout } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    setUser(reduxUser || JSON.parse(localStorage.getItem('currentUser')));
    const handleStorage = () => {
      setUser(reduxUser || JSON.parse(localStorage.getItem('currentUser')));
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [reduxUser]);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const handleLogout = () => {
    // La lógica de logout (limpiar localStorage y Redux)
    // debería estar centralizada en el hook useAuth.
    logout();
    // Navegar a la página de inicio sin recargar la página.
    navigate('/');
  };

  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-lg border-bottom border-secondary'>
        <div className='container-fluid'>
          {/* Logo y marca mejorados */}
          <Link className='navbar-brand d-flex align-items-center py-2' to='/'>
            <img
              src={logo}
              width='60'
              height='60'
              alt='StockStore Logo'
              className='me-3 rounded-circle border border-light border-2'
              style={{
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            />
            <div className='d-none d-md-block'>
              <span className='fw-bold fs-4 text-white'>StockStore</span>
              <div className='small text-muted'>Tu tienda online</div>
            </div>
          </Link>

          {/* Botón del menú móvil mejorado */}
          <button
            className='navbar-toggler border-0 p-2'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded={!isNavCollapsed}
            aria-label='Toggle navigation'
            onClick={handleNavCollapse}
            style={{
              fontSize: '1.2rem',
              transition: 'all 0.3s ease',
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
                  className='nav-link px-3 py-2 rounded-pill position-relative'
                  to='/'
                  style={{
                    transition: 'all 0.3s ease',
                    fontSize: '0.95rem',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <i className='bi bi-house-door me-2'></i>
                  Inicio
                  <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary d-none'>
                    <span className='visually-hidden'>nuevo</span>
                  </span>
                </Link>
              </li>

              <li className='nav-item mx-2'>
                <Link
                  className='nav-link px-3 py-2 rounded-pill'
                  to='/catalogo'
                  style={{
                    transition: 'all 0.3s ease',
                    fontSize: '0.95rem',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <i className='bi bi-grid me-2'></i>
                  Catálogo
                </Link>
              </li>

              {/* Carrito de compras */}
              <li className='nav-item mx-2 d-flex align-items-center'>
                <CartButton />
              </li>

              {/* Separador */}
              <li className='nav-item d-none d-lg-block'>
                <div
                  className='vr bg-secondary mx-2'
                  style={{ height: '30px' }}
                ></div>
              </li>

              {/* Opciones de admin solo si es admin */}
              {user && user.isAdmin && (
                <>
                  <li className='nav-item mx-2'>
                    <Link
                      className='nav-link px-3 py-2 rounded-pill'
                      to='/admin'
                      style={{
                        transition: 'all 0.3s ease',
                        fontSize: '0.95rem',
                        fontWeight: '500',
                      }}
                    >
                      <i className='bi bi-speedometer2 me-2'></i>
                      Dashboard
                    </Link>
                  </li>
                </>
              )}

              {/* Si está logueado, mostrar perfil y cerrar sesión */}
              {user ? (
                <>
                  <li className='nav-item mx-2'>
                    <span className='nav-link px-3 py-2 rounded-pill text-white'>
                      <i className='bi bi-person-circle me-2'></i>
                      {user.firstName || user.email}
                    </span>
                  </li>
                  <li className='nav-item mx-2'>
                    <button
                      className='btn btn-outline-light px-3 py-2 rounded-pill'
                      onClick={handleLogout}
                    >
                      <i className='bi bi-box-arrow-right me-2'></i>
                      Cerrar sesión
                    </button>
                  </li>
                </>
              ) : (
                <li className='nav-item mx-2'>
                  <Link
                    className='nav-link px-4 py-2 rounded-pill border border-light'
                    to='/register'
                    style={{
                      transition: 'all 0.3s ease',
                      fontSize: '0.95rem',
                      fontWeight: '500',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'white';
                      e.target.style.color = '#212529';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateY(0)';
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
      <div style={{ height: '80px' }}></div>
    </header>
  );
}
