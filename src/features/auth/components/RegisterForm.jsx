import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    isAdmin: false, // Booleano por defecto
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
        [name]: type === 'checkbox' ? checked : value,
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
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-8 col-lg-6'>
          <div className='card shadow'>
            <div className='card-body p-4'>
              <h2 className='text-center mb-4'>Registro de Usuario</h2>

              <form onSubmit={handleSubmit} noValidate>
                <div className='row'>
                  <div className='col-md-6 mb-3'>
                    <label htmlFor='firstName' className='form-label'>
                      Nombre
                    </label>
                    <input
                      id='firstName'
                      name='firstName'
                      type='text'
                      className={`form-control ${
                        errors.firstName ? 'is-invalid' : ''
                      }`}
                      placeholder='Ingrese su nombre'
                      value={form.firstName}
                      onChange={handleChange}
                    />
                    {errors.firstName && (
                      <div className='invalid-feedback'>{errors.firstName}</div>
                    )}
                  </div>

                  <div className='col-md-6 mb-3'>
                    <label htmlFor='lastName' className='form-label'>
                      Apellido
                    </label>
                    <input
                      id='lastName'
                      name='lastName'
                      type='text'
                      className={`form-control ${
                        errors.lastName ? 'is-invalid' : ''
                      }`}
                      placeholder='Ingrese su apellido'
                      value={form.lastName}
                      onChange={handleChange}
                    />
                    {errors.lastName && (
                      <div className='invalid-feedback'>{errors.lastName}</div>
                    )}
                  </div>
                </div>

                <div className='mb-3'>
                  <label htmlFor='email' className='form-label'>
                    Correo Electrónico
                  </label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    className={`form-control ${
                      errors.email ? 'is-invalid' : ''
                    }`}
                    placeholder='ejemplo@correo.com'
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className='invalid-feedback'>{errors.email}</div>
                  )}
                </div>

                <div className='row'>
                  <div className='col-md-6 mb-3'>
                    <label htmlFor='password' className='form-label'>
                      Contraseña
                    </label>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      className={`form-control ${
                        errors.password ? 'is-invalid' : ''
                      }`}
                      placeholder='Mínimo 8 caracteres'
                      value={form.password}
                      onChange={handleChange}
                    />
                    {errors.password && (
                      <div className='invalid-feedback'>{errors.password}</div>
                    )}
                    <small className='form-text text-muted'>
                      La contraseña debe contener al menos 8 caracteres,
                      incluyendo letras y números.
                    </small>
                  </div>

                  <div className='col-md-6 mb-3'>
                    <label htmlFor='confirmPassword' className='form-label'>
                      Confirmar Contraseña
                    </label>
                    <input
                      id='confirmPassword'
                      name='confirmPassword'
                      type='password'
                      className={`form-control ${
                        errors.confirmPassword ? 'is-invalid' : ''
                      }`}
                      placeholder='Repita su contraseña'
                      value={form.confirmPassword}
                      onChange={handleChange}
                    />
                    {errors.confirmPassword && (
                      <div className='invalid-feedback'>
                        {errors.confirmPassword}
                      </div>
                    )}
                  </div>
                </div>

                <div className='mb-3'>
                  <label htmlFor='phone' className='form-label'>
                    Teléfono (Opcional)
                  </label>
                  <input
                    id='phone'
                    name='phone'
                    type='tel'
                    className={`form-control ${
                      errors.phone ? 'is-invalid' : ''
                    }`}
                    placeholder='Ingrese su número de teléfono'
                    value={form.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <div className='invalid-feedback'>{errors.phone}</div>
                  )}
                </div>

                {/* Selector de tipo de usuario */}
                <div className='mb-3'>
                  <label className='form-label'>Tipo de usuario</label>
                  <select
                    name='isAdmin'
                    className='form-select'
                    value={form.isAdmin ? 'admin' : 'cliente'}
                    onChange={handleChange}
                  >
                    <option value='cliente'>Cliente</option>
                    <option value='admin'>Administrador</option>
                  </select>
                </div>

                <div className='mb-3 form-check'>
                  <input
                    id='acceptTerms'
                    name='acceptTerms'
                    type='checkbox'
                    className={`form-check-input ${
                      errors.acceptTerms ? 'is-invalid' : ''
                    }`}
                    checked={form.acceptTerms}
                    onChange={handleChange}
                  />
                  <label htmlFor='acceptTerms' className='form-check-label'>
                    Acepto los{' '}
                    <a href='/terms' target='_blank' rel='noopener noreferrer'>
                      términos y condiciones
                    </a>
                  </label>
                  {errors.acceptTerms && (
                    <div className='invalid-feedback'>{errors.acceptTerms}</div>
                  )}
                </div>

                <div className='d-grid gap-2'>
                  <button
                    type='submit'
                    className='btn btn-primary'
                    disabled={isSubmitting}
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
                      'Registrarse'
                    )}
                  </button>
                </div>

                <div className='text-center mt-3'>
                  <p>
                    ¿Ya tienes una cuenta?{' '}
                    <a href='/login'>Inicia sesión aquí</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
