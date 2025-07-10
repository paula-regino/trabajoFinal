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
    <div className='min-vh-100 d-flex justify-content-center align-items-center bg-light py-5'>
      <div
        className='card border-0 shadow-lg'
        style={{ maxWidth: '400px', width: '100%', borderRadius: '15px' }}
      >
        <div
          className='card-header bg-primary text-white py-3'
          style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
        >
          <h2 className='text-center mb-0'>Iniciar Sesión</h2>
        </div>
        <div className='card-body p-4 p-md-5'>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='form-label fw-bold'>Correo electrónico *</label>
              <input
                type='email'
                name='email'
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                value={form.email}
                onChange={handleChange}
                placeholder='ejemplo@dominio.com'
              />
              {errors.email && (
                <div className='invalid-feedback d-block'>{errors.email}</div>
              )}
            </div>
            <div className='mb-4'>
              <label className='form-label fw-bold'>Contraseña *</label>
              <input
                type='password'
                name='password'
                className={`form-control ${
                  errors.password ? 'is-invalid' : ''
                }`}
                value={form.password}
                onChange={handleChange}
                placeholder='Ingrese su contraseña'
              />
              {errors.password && (
                <div className='invalid-feedback d-block'>
                  {errors.password}
                </div>
              )}
            </div>
            <div className='d-grid mt-4'>
              <button
                type='submit'
                className='btn btn-outline-primary btn-lg fw-bold'
                disabled={!isFormValid()}
              >
                <i className='bi bi-box-arrow-in-right me-2'></i>Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
