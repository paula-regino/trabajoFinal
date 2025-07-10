import { useSelector } from 'react-redux';
import AdminProductList from './AdminProductList';

const Dashboard = () => {
  // Usar Redux para obtener el usuario
  const user =
    useSelector((state) => state.auth.user) ||
    JSON.parse(localStorage.getItem('currentUser'));

  return (
    <div
      className='dashboard-container'
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
        padding: '2rem 0',
      }}
    >
      <div className='container-fluid px-4'>
        {/* Header simplificado */}
        <div className='d-flex justify-content-between align-items-center mb-4'>
          <div>
            <h1
              className='fw-bold mb-0'
              style={{
                color: '#111827',
                fontSize: '1.8rem',
                letterSpacing: '-0.5px',
              }}
            >
              Panel de Administración
            </h1>
            <p className='text-muted mb-0' style={{ fontSize: '0.9rem' }}>
              Gestión de productos
            </p>
          </div>
          <div className='d-flex align-items-center gap-2'>
            <span
              className='badge rounded-pill px-3 py-2'
              style={{
                background: '#e5e7eb',
                color: '#4b5563',
                fontWeight: '500',
              }}
            >
              {user?.isAdmin ? 'Administrador' : 'Usuario'}
            </span>
          </div>
        </div>

        {/* Contenido principal */}
        <div className='row'>
          <div className='col-12'>
            {user?.isAdmin ? (
              <div
                className='card border-0 shadow-sm'
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: 'white',
                }}
              >
                <div
                  className='card-header border-0'
                  style={{
                    background: 'white',
                    padding: '1.5rem',
                    borderBottom: '1px solid #e5e7eb',
                  }}
                ></div>
                <div className='card-body p-0'>
                  <AdminProductList />
                </div>
              </div>
            ) : (
              <div
                className='card border-0'
                style={{
                  background: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                }}
              >
                <div className='card-body text-center py-5'>
                  <div
                    className='mx-auto mb-4'
                    style={{
                      width: '80px',
                      height: '80px',
                      background: '#fee2e2',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg
                      width='32'
                      height='32'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='#dc2626'
                      strokeWidth='2'
                    >
                      <path d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'></path>
                      <line x1='12' y1='9' x2='12' y2='13'></line>
                      <line x1='12' y1='17' x2='12.01' y2='17'></line>
                    </svg>
                  </div>
                  <h5 className='fw-semibold mb-2' style={{ color: '#111827' }}>
                    Acceso restringido
                  </h5>
                  <p
                    className='text-muted mb-4'
                    style={{ maxWidth: '400px', margin: '0 auto' }}
                  >
                    No tienes permisos para acceder a esta sección. Contacta al
                    administrador del sistema.
                  </p>
                  <button
                    className='btn'
                    style={{
                      background: '#e5e7eb',
                      color: '#4b5563',
                      borderRadius: '8px',
                      fontWeight: '500',
                    }}
                  >
                    Volver al inicio
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
