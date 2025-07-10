import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export function RegisterForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    acceptTerms: false,
    isAdmin: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'isAdmin') {
      setForm({ ...form, isAdmin: value === 'admin' });
    } else {
      setForm({
        ...form,
        [name]: type === 'checkbox' ? checked : value, // Manejo de checkbox para saber si es admin
      });
    }
    // Validación en tiempo real
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const phoneRegex = /^[0-9]{10,15}$/;

    if (!form.firstName.trim()) newErrors.firstName = 'Nombre es requerido';
    if (!form.lastName.trim()) newErrors.lastName = 'Apellido es requerido';

    if (!form.email.trim()) {
      newErrors.email = 'Correo electrónico es requerido';
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = 'Correo electrónico no válido';
    }

    if (!form.password) {
      newErrors.password = 'Contraseña es requerida';
    } else if (!passwordRegex.test(form.password)) {
      newErrors.password =
        'La contraseña debe tener al menos 8 caracteres, una letra y un número';
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    if (form.phone && !phoneRegex.test(form.phone)) {
      newErrors.phone = 'Número de teléfono no válido';
    }

    if (!form.acceptTerms) {
      newErrors.acceptTerms = 'Debes aceptar los términos y condiciones';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simular una llamada a API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const exists = users.find((u) => u.email === form.email);

      if (exists) {
        throw new Error('El correo ya está registrado');
      }

      const newUser = {
        id: Date.now(),
        ...form,
        isAdmin: form.isAdmin, // Booleano correcto
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem('users', JSON.stringify([...users, newUser]));

      Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        text: 'Ahora puedes iniciar sesión.',
        timer: 2000,
        showConfirmButton: false,
      });

      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='min-vh-100 d-flex justify-content-center align-items-center py-5 position-relative'>
      {/* Fondo con gradiente animado */}
      <div
        className='position-absolute top-0 start-0 w-100 h-100'
        style={{
          background:
            'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 20s ease infinite',
        }}
      ></div>

      {/* Elementos decorativos flotantes */}
      <div
        className='position-absolute'
        style={{
          top: '5%',
          left: '5%',
          width: '120px',
          height: '120px',
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '30px',
          animation: 'float 8s ease-in-out infinite',
          transform: 'rotate(15deg)',
        }}
      ></div>

      <div
        className='position-absolute'
        style={{
          top: '15%',
          right: '10%',
          width: '90px',
          height: '90px',
          background: 'rgba(255, 255, 255, 0.12)',
          borderRadius: '50%',
          animation: 'float 12s ease-in-out infinite reverse',
        }}
      ></div>

      <div
        className='position-absolute'
        style={{
          bottom: '10%',
          left: '15%',
          width: '160px',
          height: '160px',
          background: 'rgba(255, 255, 255, 0.06)',
          borderRadius: '25px',
          animation: 'float 15s ease-in-out infinite',
          transform: 'rotate(-20deg)',
        }}
      ></div>

      <div
        className='position-absolute'
        style={{
          bottom: '20%',
          right: '5%',
          width: '70px',
          height: '70px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '15px',
          animation: 'float 6s ease-in-out infinite reverse',
        }}
      ></div>

      {/* Contenedor principal del formulario */}
      <div className='container position-relative' style={{ zIndex: 10 }}>
        <div className='row justify-content-center'>
          <div className='col-md-10 col-lg-8 col-xl-7'>
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
                  background:
                    'linear-gradient(90deg, #667eea, #764ba2, #f093fb)',
                  backgroundSize: '300% 100%',
                  animation: 'shimmer 4s ease-in-out infinite',
                }}
              ></div>

              {/* Header del formulario */}
              <div className='text-center mb-5'>
                <div className='mb-3'>
                  <div
                    className='d-inline-flex align-items-center justify-content-center rounded-circle mb-3'
                    style={{
                      width: '90px',
                      height: '90px',
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      boxShadow: '0 15px 35px rgba(102, 126, 234, 0.3)',
                    }}
                  >
                    <i
                      className='bi bi-person-plus-fill text-white'
                      style={{ fontSize: '2.8rem' }}
                    ></i>
                  </div>
                </div>
                <h2
                  className='fw-bold mb-2'
                  style={{
                    color: '#2d3748',
                    fontSize: '2rem',
                    letterSpacing: '-0.5px',
                  }}
                >
                  Crear Nueva Cuenta
                </h2>
                <p
                  className='mb-0'
                  style={{
                    color: '#718096',
                    fontSize: '1.1rem',
                  }}
                >
                  Únete a nosotros y disfruta de todos los beneficios
                </p>
              </div>

              {/* Formulario */}
              <form onSubmit={handleSubmit} noValidate>
                {/* Nombre y Apellido */}
                <div className='row mb-4'>
                  <div className='col-md-6 mb-3 mb-md-0'>
                    <label
                      htmlFor='firstName'
                      className='form-label fw-semibold mb-2'
                      style={{ color: '#4a5568' }}
                    >
                      <i
                        className='bi bi-person-fill me-2'
                        style={{ color: '#667eea' }}
                      ></i>
                      Nombre
                    </label>
                    <input
                      id='firstName'
                      name='firstName'
                      type='text'
                      className={`form-control form-control-lg ${
                        errors.firstName ? 'is-invalid' : ''
                      }`}
                      placeholder='Ingrese su nombre'
                      value={form.firstName}
                      onChange={handleChange}
                      style={{
                        border: '2px solid #e2e8f0',
                        borderRadius: '12px',
                        padding: '12px 16px',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        background: 'rgba(255, 255, 255, 0.8)',
                        boxShadow: errors.firstName
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
                        e.target.style.boxShadow =
                          '0 2px 4px rgba(0, 0, 0, 0.05)';
                      }}
                    />
                    {errors.firstName && (
                      <div
                        className='invalid-feedback d-block mt-2'
                        style={{ color: '#ef4444' }}
                      >
                        {errors.firstName}
                      </div>
                    )}
                  </div>

                  <div className='col-md-6'>
                    <label
                      htmlFor='lastName'
                      className='form-label fw-semibold mb-2'
                      style={{ color: '#4a5568' }}
                    >
                      <i
                        className='bi bi-person-fill me-2'
                        style={{ color: '#667eea' }}
                      ></i>
                      Apellido
                    </label>
                    <input
                      id='lastName'
                      name='lastName'
                      type='text'
                      className={`form-control form-control-lg ${
                        errors.lastName ? 'is-invalid' : ''
                      }`}
                      placeholder='Ingrese su apellido'
                      value={form.lastName}
                      onChange={handleChange}
                      style={{
                        border: '2px solid #e2e8f0',
                        borderRadius: '12px',
                        padding: '12px 16px',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        background: 'rgba(255, 255, 255, 0.8)',
                        boxShadow: errors.lastName
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
                        e.target.style.boxShadow =
                          '0 2px 4px rgba(0, 0, 0, 0.05)';
                      }}
                    />
                    {errors.lastName && (
                      <div
                        className='invalid-feedback d-block mt-2'
                        style={{ color: '#ef4444' }}
                      >
                        {errors.lastName}
                      </div>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className='mb-4'>
                  <label
                    htmlFor='email'
                    className='form-label fw-semibold mb-2'
                    style={{ color: '#4a5568' }}
                  >
                    <i
                      className='bi bi-envelope-fill me-2'
                      style={{ color: '#667eea' }}
                    ></i>
                    Correo Electrónico
                  </label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    className={`form-control form-control-lg ${
                      errors.email ? 'is-invalid' : ''
                    }`}
                    placeholder='ejemplo@correo.com'
                    value={form.email}
                    onChange={handleChange}
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
                      e.target.style.boxShadow =
                        '0 2px 4px rgba(0, 0, 0, 0.05)';
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

                {/* Contraseñas */}
                <div className='row mb-4'>
                  <div className='col-md-6 mb-3 mb-md-0'>
                    <label
                      htmlFor='password'
                      className='form-label fw-semibold mb-2'
                      style={{ color: '#4a5568' }}
                    >
                      <i
                        className='bi bi-lock-fill me-2'
                        style={{ color: '#667eea' }}
                      ></i>
                      Contraseña
                    </label>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      className={`form-control form-control-lg ${
                        errors.password ? 'is-invalid' : ''
                      }`}
                      placeholder='Mínimo 8 caracteres'
                      value={form.password}
                      onChange={handleChange}
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
                        e.target.style.boxShadow =
                          '0 2px 4px rgba(0, 0, 0, 0.05)';
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
                    <small
                      className='form-text mt-2'
                      style={{ color: '#718096', fontSize: '0.9rem' }}
                    >
                      Debe contener al menos 8 caracteres, incluyendo letras y
                      números.
                    </small>
                  </div>

                  <div className='col-md-6'>
                    <label
                      htmlFor='confirmPassword'
                      className='form-label fw-semibold mb-2'
                      style={{ color: '#4a5568' }}
                    >
                      <i
                        className='bi bi-shield-lock-fill me-2'
                        style={{ color: '#667eea' }}
                      ></i>
                      Confirmar Contraseña
                    </label>
                    <input
                      id='confirmPassword'
                      name='confirmPassword'
                      type='password'
                      className={`form-control form-control-lg ${
                        errors.confirmPassword ? 'is-invalid' : ''
                      }`}
                      placeholder='Repita su contraseña'
                      value={form.confirmPassword}
                      onChange={handleChange}
                      style={{
                        border: '2px solid #e2e8f0',
                        borderRadius: '12px',
                        padding: '12px 16px',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        background: 'rgba(255, 255, 255, 0.8)',
                        boxShadow: errors.confirmPassword
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
                        e.target.style.boxShadow =
                          '0 2px 4px rgba(0, 0, 0, 0.05)';
                      }}
                    />
                    {errors.confirmPassword && (
                      <div
                        className='invalid-feedback d-block mt-2'
                        style={{ color: '#ef4444' }}
                      >
                        {errors.confirmPassword}
                      </div>
                    )}
                  </div>
                </div>

                {/* Teléfono */}
                <div className='mb-4'>
                  <label
                    htmlFor='phone'
                    className='form-label fw-semibold mb-2'
                    style={{ color: '#4a5568' }}
                  >
                    <i
                      className='bi bi-telephone-fill me-2'
                      style={{ color: '#667eea' }}
                    ></i>
                    Teléfono{' '}
                    <span style={{ color: '#a0aec0', fontSize: '0.9rem' }}>
                      (Opcional)
                    </span>
                  </label>
                  <input
                    id='phone'
                    name='phone'
                    type='tel'
                    className={`form-control form-control-lg ${
                      errors.phone ? 'is-invalid' : ''
                    }`}
                    placeholder='Ingrese su número de teléfono'
                    value={form.phone}
                    onChange={handleChange}
                    style={{
                      border: '2px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      background: 'rgba(255, 255, 255, 0.8)',
                      boxShadow: errors.phone
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
                      e.target.style.boxShadow =
                        '0 2px 4px rgba(0, 0, 0, 0.05)';
                    }}
                  />
                  {errors.phone && (
                    <div
                      className='invalid-feedback d-block mt-2'
                      style={{ color: '#ef4444' }}
                    >
                      {errors.phone}
                    </div>
                  )}
                </div>

                {/* Tipo de usuario */}
                <div className='mb-4'>
                  <label
                    className='form-label fw-semibold mb-2'
                    style={{ color: '#4a5568' }}
                  >
                    <i
                      className='bi bi-person-gear me-2'
                      style={{ color: '#667eea' }}
                    ></i>
                    Tipo de usuario
                  </label>
                  <select
                    name='isAdmin'
                    className='form-select form-select-lg'
                    value={form.isAdmin ? 'admin' : 'cliente'}
                    onChange={handleChange}
                    style={{
                      border: '2px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      background: 'rgba(255, 255, 255, 0.8)',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#667eea';
                      e.target.style.boxShadow =
                        '0 0 0 3px rgba(102, 126, 234, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e2e8f0';
                      e.target.style.boxShadow =
                        '0 2px 4px rgba(0, 0, 0, 0.05)';
                    }}
                  >
                    <option value='cliente'>👤 Cliente</option>
                    <option value='admin'>🛠️ Administrador</option>
                  </select>
                </div>

                {/* Términos y condiciones */}
                <div className='mb-4'>
                  <div
                    className='form-check d-flex align-items-start'
                    style={{
                      padding: '16px',
                      background: 'rgba(102, 126, 234, 0.05)',
                      borderRadius: '12px',
                      border: '1px solid rgba(102, 126, 234, 0.1)',
                    }}
                  >
                    <input
                      id='acceptTerms'
                      name='acceptTerms'
                      type='checkbox'
                      className={`form-check-input me-3 ${
                        errors.acceptTerms ? 'is-invalid' : ''
                      }`}
                      checked={form.acceptTerms}
                      onChange={handleChange}
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '6px',
                        border: '2px solid #667eea',
                        marginTop: '2px',
                      }}
                    />
                    <label
                      htmlFor='acceptTerms'
                      className='form-check-label'
                      style={{ fontSize: '1rem', color: '#4a5568' }}
                    >
                      Acepto los{' '}
                      <a
                        href='/terms'
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{
                          color: '#667eea',
                          textDecoration: 'none',
                          fontWeight: '600',
                        }}
                      >
                        términos y condiciones
                      </a>{' '}
                      de uso de la plataforma
                    </label>
                  </div>
                  {errors.acceptTerms && (
                    <div
                      className='invalid-feedback d-block mt-2'
                      style={{ color: '#ef4444' }}
                    >
                      {errors.acceptTerms}
                    </div>
                  )}
                </div>

                {/* Botón de registro */}
                <div className='d-grid mb-4'>
                  <button
                    type='submit'
                    className='btn btn-lg fw-semibold position-relative overflow-hidden'
                    disabled={isSubmitting}
                    style={{
                      background: !isSubmitting
                        ? 'linear-gradient(135deg, #667eea, #764ba2)'
                        : '#cbd5e0',
                      border: 'none',
                      borderRadius: '12px',
                      padding: '16px 24px',
                      color: 'white',
                      fontSize: '1.1rem',
                      letterSpacing: '0.5px',
                      transition: 'all 0.3s ease',
                      boxShadow: !isSubmitting
                        ? '0 10px 25px rgba(102, 126, 234, 0.3)'
                        : 'none',
                      cursor: !isSubmitting ? 'pointer' : 'not-allowed',
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow =
                          '0 15px 35px rgba(102, 126, 234, 0.4)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow =
                          '0 10px 25px rgba(102, 126, 234, 0.3)';
                      }
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className='spinner-border spinner-border-sm me-2'
                          role='status'
                          aria-hidden='true'
                        ></span>
                        Registrando...
                      </>
                    ) : (
                      <>
                        <i className='bi bi-person-plus me-2'></i>
                        Crear Cuenta
                      </>
                    )}
                  </button>
                </div>

                {/* Link a login */}
                <div
                  className='text-center'
                  style={{
                    padding: '20px',
                    background: 'rgba(102, 126, 234, 0.05)',
                    borderRadius: '12px',
                    border: '1px solid rgba(102, 126, 234, 0.1)',
                  }}
                >
                  <p
                    className='mb-0'
                    style={{ color: '#4a5568', fontSize: '1rem' }}
                  >
                    ¿Ya tienes una cuenta?{' '}
                    <Link
                      to='/login'
                      style={{
                        color: '#667eea',
                        textDecoration: 'none',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.textDecoration = 'underline';
                        e.target.style.color = '#764ba2';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.textDecoration = 'none';
                        e.target.style.color = '#667eea';
                      }}
                    >
                      Inicia sesión aquí
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
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
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -300% 0;
          }
          100% {
            background-position: 300% 0;
          }
        }

        .form-control:focus,
        .form-select:focus {
          outline: none !important;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
          border-color: #667eea !important;
        }

        .form-check-input:checked {
          background-color: #667eea !important;
          border-color: #667eea !important;
        }
      `}</style>
    </div>
  );
}
