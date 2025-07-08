// EL SERVICIO DE LA AUTENTICACION MANEJA LAS LLAMADAS A LA API.

const API_URL = 'https://api.escuelajs.co/api/v1';

export const authenticateUser = async (credentials) => {
  const { email, password } = credentials;

  // 1. Buscar primero en usuarios locales (localStorage)
  let localUsers = [];
  try {
    localUsers = JSON.parse(localStorage.getItem('users')) || [];
  } catch {
    localUsers = [];
  }
  // Migrar isAdmin a booleano por si acaso
  localUsers = localUsers.map((u) => ({
    ...u,
    isAdmin:
      typeof u.isAdmin === 'boolean'
        ? u.isAdmin
        : u.isAdmin === 'admin' || u.isAdmin === true || u.isAdmin === 'true',
  }));
  localStorage.setItem('users', JSON.stringify(localUsers));
  const localUser = localUsers.find(
    (u) => u.email === email && u.password === password
  );
  if (localUser) {
    // Devolver el usuario local con isAdmin booleano
    return { ...localUser, isAdmin: !!localUser.isAdmin };
  }

  // 2. Si no está en local, buscar en la API externa
  const response = await fetch(`${API_URL}/users`);
  if (!response.ok) {
    throw new Error('Error al conectar el servidor');
  }
  const users = await response.json();
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
      isAdmin: user.role === 'admin', // Si la API externa tiene roles
    };
  }
  return null;
};
