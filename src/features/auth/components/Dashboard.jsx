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
        background: '#f8fafc',
        padding: '2rem 0',
      }}
    >
      <div className='container py-5'>
        <div className='row'>
          <div className='dashboard-header d-flex justify-content-between align-items-center mb-5 col-12'>
            <div>
              <h1
                className='fw-bold text-dark mb-2'
                style={{
                  fontSize: '2.5rem',
                  textShadow: 'none',
                }}
              >
                Panel de Control
              </h1>
              <p
                className='text-muted mb-0'
                style={{
                  fontSize: '1.1rem',
                  fontWeight: '300',
                }}
              >
                Bienvenido, {user?.firstName || user?.name}
              </p>
            </div>
            <div className='dashboard-stats d-flex gap-3'>
              <div
                className='stat-card text-center'
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '1rem 1.5rem',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                }}
              >
                <div
                  className='text-dark fw-bold'
                  style={{ fontSize: '1.2rem' }}
                >
                  {user?.isAdmin ? 'Admin' : 'Cliente'}
                </div>
                <div className='text-muted' style={{ fontSize: '0.8rem' }}>
                  Rol
                </div>
              </div>
              <div
                className='stat-card text-center'
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '1rem 1.5rem',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                }}
              >
                <div
                  className='text-dark fw-bold'
                  style={{ fontSize: '1.2rem' }}
                >
                  ID: {user?.id}
                </div>
                <div className='text-muted' style={{ fontSize: '0.8rem' }}>
                  Usuario
                </div>
              </div>
            </div>
          </div>

          <div className='dashboard-content row w-100'>
            <div className='user-info col-md-4 mb-4'>
              <div
                className='card shadow-lg border-0'
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  className='card-header border-0'
                  style={{
                    background:
                      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '1.5rem',
                  }}
                >
                  <h4 className='mb-0 fw-bold' style={{ fontSize: '1.3rem' }}>
                    Información de Usuario
                  </h4>
                </div>
                <div className='card-body' style={{ padding: '2rem' }}>
                  {user?.avatar && (
                    <div className='user-avatar mb-4 text-center'>
                      <div
                        style={{
                          position: 'relative',
                          display: 'inline-block',
                        }}
                      >
                        <img
                          src={user.avatar}
                          alt={`Avatar de ${user.name || user.firstName}`}
                          className='rounded-circle'
                          style={{
                            width: 100,
                            height: 100,
                            border: '4px solid #667eea',
                            boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
                          }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            width: '24px',
                            height: '24px',
                            background: user?.isAdmin ? '#10b981' : '#3b82f6',
                            borderRadius: '50%',
                            border: '3px solid white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <div
                            style={{
                              width: '8px',
                              height: '8px',
                              background: 'white',
                              borderRadius: '50%',
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className='user-details'>
                    <div
                      className='detail-item mb-3'
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0.75rem',
                        background: '#f8fafc',
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0',
                      }}
                    >
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          background:
                            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '12px',
                        }}
                      >
                        <svg
                          width='16'
                          height='16'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='white'
                          strokeWidth='2'
                        >
                          <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
                          <circle cx='12' cy='7' r='4'></circle>
                        </svg>
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: '0.8rem',
                            color: '#6b7280',
                            fontWeight: '500',
                          }}
                        >
                          Nombre
                        </div>
                        <div
                          style={{
                            fontSize: '0.95rem',
                            color: '#374151',
                            fontWeight: '600',
                          }}
                        >
                          {user?.firstName || user?.name}
                        </div>
                      </div>
                    </div>

                    <div
                      className='detail-item mb-3'
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0.75rem',
                        background: '#f8fafc',
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0',
                      }}
                    >
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          background:
                            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '12px',
                        }}
                      >
                        <svg
                          width='16'
                          height='16'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='white'
                          strokeWidth='2'
                        >
                          <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
                          <polyline points='22,6 12,13 2,6'></polyline>
                        </svg>
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: '0.8rem',
                            color: '#6b7280',
                            fontWeight: '500',
                          }}
                        >
                          Email
                        </div>
                        <div
                          style={{
                            fontSize: '0.95rem',
                            color: '#374151',
                            fontWeight: '600',
                          }}
                        >
                          {user?.email}
                        </div>
                      </div>
                    </div>

                    <div
                      className='detail-item mb-3'
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0.75rem',
                        background: '#f8fafc',
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0',
                      }}
                    >
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          background:
                            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '12px',
                        }}
                      >
                        <svg
                          width='16'
                          height='16'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='white'
                          strokeWidth='2'
                        >
                          <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                        </svg>
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: '0.8rem',
                            color: '#6b7280',
                            fontWeight: '500',
                          }}
                        >
                          Rol
                        </div>
                        <div
                          style={{
                            fontSize: '0.95rem',
                            fontWeight: '600',
                            color: user?.isAdmin ? '#059669' : '#3b82f6',
                          }}
                        >
                          {user?.isAdmin ? 'Administrador' : 'Cliente'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-8'>
              {user?.isAdmin ? (
                <div
                  className='admin-content'
                  style={{
                    background: 'rgba(255,255,255,0.95)',
                    borderRadius: '16px',
                    padding: '2rem',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  <AdminProductList />
                </div>
              ) : (
                <div
                  className='alert border-0 shadow-lg'
                  style={{
                    background:
                      'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                    borderRadius: '16px',
                    padding: '2rem',
                    color: '#92400e',
                    fontSize: '1.1rem',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  }}
                >
                  <div className='d-flex align-items-center'>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        background: '#f59e0b',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '1rem',
                      }}
                    >
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='white'
                        strokeWidth='2'
                      >
                        <circle cx='12' cy='12' r='10'></circle>
                        <line x1='12' y1='8' x2='12' y2='12'></line>
                        <line x1='12' y1='16' x2='12.01' y2='16'></line>
                      </svg>
                    </div>
                    <div>
                      <h5
                        className='mb-1'
                        style={{ color: '#92400e', fontWeight: '600' }}
                      >
                        Acceso Restringido
                      </h5>
                      <p className='mb-0' style={{ color: '#a16207' }}>
                        Solo los administradores pueden ver la lista de
                        productos.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
