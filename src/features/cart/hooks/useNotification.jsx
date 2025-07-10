import { useRef, useCallback } from 'react';

export const useNotification = () => {
  const notificationRef = useRef(null);
  const timeoutRef = useRef(null);

  const showNotification = useCallback(
    (message, type = 'success', duration = 3000) => {
      // Limpiar timeout anterior si existe
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Crear un nuevo elemento de notificación si no existe
      if (!notificationRef.current) {
        notificationRef.current = document.createElement('div');
        notificationRef.current.className = 'custom-notification';
        document.body.appendChild(notificationRef.current);
      }

      // Configurar color según el tipo
      const backgroundColor =
        {
          success: '#28a745',
          error: '#dc3545',
          info: 'var(--primary-color)',
          warning: '#ffc107',
        }[type] || '#28a745';

      notificationRef.current.style.backgroundColor = backgroundColor;
      notificationRef.current.textContent = message;

      // Mostrar notificación añadiendo la clase 'show'
      setTimeout(() => {
        if (notificationRef.current) {
          notificationRef.current.classList.add('show');
        }
      }, 50);

      timeoutRef.current = setTimeout(() => {
        if (notificationRef.current) {
          notificationRef.current.classList.remove('show');

          // Remover del DOM después de la animación
          setTimeout(() => {
            if (
              notificationRef.current &&
              document.body.contains(notificationRef.current)
            ) {
              document.body.removeChild(notificationRef.current);
              notificationRef.current = null;
            }
          }, 300);
        }
      }, duration);
    },
    []
  );

  return { showNotification };
};
