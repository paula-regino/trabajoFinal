import React from 'react';

export const NewsCard = ({ noticia }) => (
  <div className='card h-100'>
    <img src={noticia.imagen} className='card-img-top' alt={noticia.titulo} />
    <div className='card-body'>
      <h5 className='card-title'>{noticia.titulo}</h5>
      <p className='card-text'>{noticia.resumen}</p>
      <a
        href={noticia.link}
        className='btn btn-outline-secondary btn-sm'
        target='_blank'
        rel='noopener noreferrer'
      >
        Leer más
      </a>
    </div>
  </div>
);
