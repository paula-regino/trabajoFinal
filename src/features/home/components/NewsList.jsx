import React from 'react';
import { NewsCard } from './NewsCard';
import noticia1 from '../../../assets/images/noticia1.jpg';
import noticia2 from '../../../assets/images/noticias2.jpg';
import noticia3 from '../../../assets/images/noticia3.jpg';

const noticias = [
  {
    titulo: '¡Lanzamos nueva colección de verano!',
    resumen:
      'Descubre los productos más frescos y modernos para esta temporada.',
    imagen: noticia1,
    link: '#',
  },
  {
    titulo: 'Envíos gratis por tiempo limitado',
    resumen:
      'Aprovecha nuestra promoción de envíos gratis en compras superiores a $50.',
    imagen: noticia2,
    link: '#',
  },
  {
    titulo: 'StockStore en el top de tiendas online',
    resumen: '¡Gracias a ti, seguimos creciendo y mejorando nuestro servicio!',
    imagen: noticia3,
    link: '#',
  },
];

export const NewsList = () => (
  <section className='container my-5'>
    <h2 className='mb-4 text-center'>Últimas Noticias</h2>
    <div className='row'>
      {noticias.map((noticia, idx) => (
        <div className='col-md-4 mb-4' key={idx}>
          <NewsCard noticia={noticia} />
        </div>
      ))}
    </div>
  </section>
);
