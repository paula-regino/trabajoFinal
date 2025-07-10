import React from 'react';

// Estilos para la tarjeta, se pueden mover a un CSS si se prefiere
const cardStyle = {
  borderRadius: 'var(--border-radius-lg)',
  overflow: 'hidden',
  border: '1px solid var(--border-color)',
  backgroundColor: 'var(--surface-color)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
};

const cardHoverStyle = {
  transform: 'translateY(-5px)',
  boxShadow: '0 12px 24px var(--shadow-color)',
};

export const NewsCard = ({ noticia }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      style={{ ...cardStyle, ...(isHovered ? cardHoverStyle : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={noticia.imagen}
        alt={noticia.titulo}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          padding: '1.5rem',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h5
          className='fw-bold'
          style={{ color: 'var(--primary-color)', marginBottom: '0.75rem' }}
        >
          {noticia.titulo}
        </h5>
        <p style={{ color: 'var(--text-light-color)', flexGrow: 1 }}>
          {noticia.resumen}
        </p>
        <a
          href={noticia.link}
          className='btn-custom btn-custom-primary'
          style={{ textDecoration: 'none', marginTop: '1rem' }}
        >
          Leer más
        </a>
      </div>
    </div>
  );
};
