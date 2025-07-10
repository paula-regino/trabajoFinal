import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export function LoginForm() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const validate = (name, value) => {
    switch (name) {
      case 'email':
        if (!value) return 'El correo es obligatorio';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Correo inválido';
        return '';
      case 'password':
        if (!value) return 'La contraseña es obligatoria';
        if (value.length < 6) return 'Mínimo 6 caracteres';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const isFormValid = () => {
    return (
      Object.values(form).every((v) => v !== '') &&
      Object.values(errors).every((e) => e === '')
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid()) {
      // --- RECOMENDACIÓN ---
      // La lógica de "migración" de usuarios se ha eliminado de aquí.
      // No es una buena práctica ejecutarla en cada intento de login.
      // Esto debería ser un script de único uso o manejado en un backend.
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(
        (u) => u.email === form.email && u.password === form.password
      );
      if (user) {
        // Aseguramos que `isAdmin` sea siempre un booleano para consistencia.
        const userToStore = { ...user, isAdmin: Boolean(user.isAdmin) };
        localStorage.setItem('currentUser', JSON.stringify(userToStore));
        // Actualizar Redux
        await login(userToStore);
        Swal.fire({
          icon: 'success',
          title: '¡Inicio de sesión exitoso!',
          showConfirmButton: false,
          timer: 1000,
        }).then(() => {
          navigate(userToStore.isAdmin ? '/admin' : '/');
        });
        setForm({ email: '', password: '' });
        setErrors({ email: '', password: '' });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error de autenticación',
          text: 'Correo o contraseña incorrectos',
        });
      }
    }
  };

  return (
    <div className='min-vh-100 d-flex justify-content-center align-items-center py-5 position-relative'>
      {/* Fondo con gradiente animado */}
      <div
        className='position-absolute top-0 start-0 w-100 h-100'
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite',
        }}
      ></div>

      {/* Elementos decorativos flotantes */}
      <div
        className='position-absolute'
        style={{
          top: '10%',
          left: '10%',
          width: '100px',
          height: '100px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite',
        }}
      ></div>

      <div
        className='position-absolute'
        style={{
          top: '60%',
          right: '15%',
          width: '150px',
          height: '150px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '30px',
          transform: 'rotate(45deg)',
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      ></div>

      <div
        className='position-absolute'
        style={{
          bottom: '20%',
          left: '20%',
          width: '80px',
          height: '80px',
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '20px',
          animation: 'float 10s ease-in-out infinite',
        }}
      ></div>

      {/* Contenedor principal del formulario */}
      <div
        className='position-relative'
        style={{
          maxWidth: '480px',
          width: '100%',
          zIndex: 10,
        }}
      >
        <div
          className='p-5 rounded-4 shadow-lg position-relative overflow-hidden'
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
          }}
        >
          {/* Elemento decorativo superior */}
          <div
            className='position-absolute top-0 start-0 w-100'
            style={{
              height: '4px',
              background: 'linear-gradient(90deg, #667eea, #764ba2, #f093fb)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 3s ease-in-out infinite',
            }}
          ></div>

          {/* Header del formulario */}
          <div className='text-center mb-5'>
            <div className='mb-3'>
              <div
                className='d-inline-flex align-items-center justify-content-center rounded-circle mb-3'
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
                }}
              >
                <i
                  className='bi bi-person-circle text-white'
                  style={{ fontSize: '2.5rem' }}
                ></i>
              </div>
            </div>
            <h2
              className='fw-bold mb-2'
              style={{
                color: '#2d3748',
                fontSize: '1.8rem',
                letterSpacing: '-0.5px',
              }}
            >
              Bienvenido de Nuevo
            </h2>
            <p
              className='mb-0'
              style={{
                color: '#718096',
                fontSize: '1rem',
              }}
            >
              Ingresa tus credenciales para acceder a tu cuenta.
            </p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label
                className='form-label fw-semibold mb-2'
                style={{ color: '#4a5568' }}
              >
                <i
                  className='bi bi-envelope-fill me-2'
                  style={{ color: '#667eea' }}
                ></i>
                Correo electrónico
              </label>
              <div className='position-relative'>
                <input
                  type='email'
                  name='email'
                  className={`form-control form-control-lg ${
                    errors.email ? 'is-invalid' : ''
                  }`}
                  value={form.email}
                  onChange={handleChange}
                  placeholder='ejemplo@dominio.com'
                  style={{
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    background: 'rgba(255, 255, 255, 0.8)',
                    boxShadow: errors.email
                      ? '0 0 0 3px rgba(239, 68, 68, 0.1)'
                      : '0 2px 4px rgba(0, 0, 0, 0.05)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#667eea';
                    e.target.style.boxShadow =
                      '0 0 0 3px rgba(102, 126, 234, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
                  }}
                />
                {errors.email && (
                  <div
                    className='invalid-feedback d-block mt-2'
                    style={{ color: '#ef4444' }}
                  >
                    {errors.email}
                  </div>
                )}
              </div>
            </div>

            <div className='mb-4'>
              <label
                className='form-label fw-semibold mb-2'
                style={{ color: '#4a5568' }}
              >
                <i
                  className='bi bi-lock-fill me-2'
                  style={{ color: '#667eea' }}
                ></i>
                Contraseña
              </label>
              <div className='position-relative'>
                <input
                  type='password'
                  name='password'
                  className={`form-control form-control-lg ${
                    errors.password ? 'is-invalid' : ''
                  }`}
                  value={form.password}
                  onChange={handleChange}
                  placeholder='Ingrese su contraseña'
                  style={{
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    background: 'rgba(255, 255, 255, 0.8)',
                    boxShadow: errors.password
                      ? '0 0 0 3px rgba(239, 68, 68, 0.1)'
                      : '0 2px 4px rgba(0, 0, 0, 0.05)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#667eea';
                    e.target.style.boxShadow =
                      '0 0 0 3px rgba(102, 126, 234, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                    e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
                  }}
                />
                {errors.password && (
                  <div
                    className='invalid-feedback d-block mt-2'
                    style={{ color: '#ef4444' }}
                  >
                    {errors.password}
                  </div>
                )}
              </div>
            </div>

            <div className='d-grid mt-5'>
              <button
                type='submit'
                className='btn btn-lg fw-semibold position-relative overflow-hidden'
                disabled={!isFormValid()}
                style={{
                  background: isFormValid()
                    ? 'linear-gradient(135deg, #667eea, #764ba2)'
                    : '#cbd5e0',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '14px 24px',
                  color: 'white',
                  fontSize: '1.1rem',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s ease',
                  boxShadow: isFormValid()
                    ? '0 10px 25px rgba(102, 126, 234, 0.3)'
                    : 'none',
                  cursor: isFormValid() ? 'pointer' : 'not-allowed',
                }}
                onMouseEnter={(e) => {
                  if (isFormValid()) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow =
                      '0 15px 35px rgba(102, 126, 234, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (isFormValid()) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow =
                      '0 10px 25px rgba(102, 126, 234, 0.3)';
                  }
                }}
              >
                <i className='bi bi-box-arrow-in-right me-2'></i>
                <span>Iniciar Sesión</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Estilos CSS adicionales */}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .form-control:focus {
          outline: none !important;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
          border-color: #667eea !important;
        }
      `}</style>
    </div>
  );
}
