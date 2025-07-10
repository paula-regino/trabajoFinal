import React, { useState } from 'react';
import { useProductos } from '../../home/hooks/useProducts';

const initialForm = {
  title: '',
  price: '',
  description: '',
  categoryId: 33,
  images: ['https://placeimg.com/640/480/any'],
};

const AdminProductList = () => {
  const { data, loading, error } = useProductos();
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(initialForm);
  const [saving, setSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [createdProduct, setCreatedProduct] = useState(null);

  // función para recargar productos desde la API
  const fetchProducts = async () => {
    try {
      const res = await fetch('https://api.escuelajs.co/api/v1/products');
      let json = await res.json();
      // Ordenar por ID descendente (más nuevos primero)
      json = json.sort((a, b) => b.id - a.id);
      setProducts(json);
    } catch (err) {
      // No hacer nada, ya hay manejo de error global
    }
  };

  React.useEffect(() => {
    // Ordenar por ID descendente al cargar
    setProducts([...data].sort((a, b) => b.id - a.id));
  }, [data]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setProducts(
      data.filter((p) =>
        p.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Seguro que deseas eliminar este producto?')) return;
    try {
      await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
        method: 'DELETE',
      });
      await fetchProducts();
    } catch (err) {
      alert('Error al eliminar el producto');
    }
  };

  const handleEdit = (product) => {
    setEditId(product.id);
    setForm({
      title: product.title,
      price: product.price,
      description: product.description || '',
      categoryId: product.category?.id || 1,
      images: product.images || ['https://placeimg.com/640/480/any'],
    });
    setShowForm(true);
  };

  const handleAdd = () => {
    setEditId(null);
    setForm(initialForm);
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editId) {
        // Editar producto
        await fetch(`https://api.escuelajs.co/api/v1/products/${editId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...form,
            price: Number(form.price),
            images: [form.images[0]],
          }),
        });
        await fetchProducts();
      } else {
        // Crear producto
        const res = await fetch('https://api.escuelajs.co/api/v1/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: form.title,
            price: Number(form.price),
            description: form.description,
            categoryId: Number(form.categoryId), // ✅ aseguramos que sea número
            images: [form.images[0] || 'https://placeimg.com/640/480/any'],
          }),
        });

        let created = await res.json();
        // Normalizar datos para el modal
        created = {
          ...created,
          title: created.title || form.title,
          price: created.price || form.price,
          description: created.description || form.description,
          images:
            created.images && created.images.length > 0
              ? created.images
              : [form.images[0] || 'https://placeimg.com/640/480/any'],
          category: created.category || {
            id: created.categoryId || form.categoryId,
            name: '',
          },
        };
        setProducts((prev) => [created, ...prev]);
        setCreatedProduct(created);
        setShowSuccess(true);
        setForm(initialForm); // Limpiar formulario
      }
      setShowForm(false);
    } catch (err) {
      alert('Error al guardar el producto');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>Lista de Productos (Admin)</h3>
      <div className='mb-3 d-flex justify-content-between'>
        <input
          type='text'
          className='form-control w-50'
          placeholder='Buscar por nombre...'
          value={search}
          onChange={handleSearch}
        />
        <button className='btn btn-success ms-3' onClick={handleAdd}>
          Agregar Producto
        </button>
      </div>

      {/* Tabla */}
      <div
        className='table-container'
        style={{
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb',
        }}
      >
        <table
          className='table table-hover mb-0'
          style={{ background: 'white' }}
        >
          <thead
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
            }}
          >
            <tr>
              <th
                style={{
                  padding: '18px 20px',
                  fontWeight: '600',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderBottom: 'none',
                }}
              >
                ID
              </th>
              <th
                style={{
                  padding: '18px 20px',
                  fontWeight: '600',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderBottom: 'none',
                }}
              >
                Nombre
              </th>
              <th
                style={{
                  padding: '18px 20px',
                  fontWeight: '600',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderBottom: 'none',
                }}
              >
                Precio
              </th>
              <th
                style={{
                  padding: '18px 20px',
                  fontWeight: '600',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderBottom: 'none',
                }}
              >
                Categoría
              </th>
              <th
                style={{
                  padding: '18px 20px',
                  fontWeight: '600',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  borderBottom: 'none',
                  textAlign: 'center',
                }}
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={product.id || product.title}
                style={{
                  backgroundColor: index % 2 === 0 ? '#f8fafc' : 'white',
                  transition: 'all 0.2s ease',
                  borderLeft: '4px solid transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#e0f2fe';
                  e.currentTarget.style.borderLeft = '4px solid #0ea5e9';
                  e.currentTarget.style.transform = 'translateX(2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    index % 2 === 0 ? '#f8fafc' : 'white';
                  e.currentTarget.style.borderLeft = '4px solid transparent';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <td
                  style={{
                    padding: '16px 20px',
                    fontWeight: '600',
                    color: '#6b7280',
                    fontSize: '13px',
                    borderBottom: '1px solid #f1f5f9',
                  }}
                >
                  <span
                    style={{
                      background: '#e0f2fe',
                      color: '#0369a1',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: '600',
                    }}
                  >
                    {product.id ?? 'N/A'}
                  </span>
                </td>
                <td
                  style={{
                    padding: '16px 20px',
                    fontWeight: '500',
                    color: '#374151',
                    fontSize: '14px',
                    borderBottom: '1px solid #f1f5f9',
                  }}
                >
                  {product.title}
                </td>
                <td
                  style={{
                    padding: '16px 20px',
                    fontWeight: '600',
                    color: '#059669',
                    fontSize: '14px',
                    borderBottom: '1px solid #f1f5f9',
                  }}
                >
                  ${product.price}
                </td>
                <td
                  style={{
                    padding: '16px 20px',
                    color: '#6b7280',
                    fontSize: '13px',
                    borderBottom: '1px solid #f1f5f9',
                  }}
                >
                  <span
                    style={{
                      background: '#f3f4f6',
                      color: '#4b5563',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      fontSize: '12px',
                    }}
                  >
                    {product.category?.name ||
                      product.categoryId ||
                      'Sin categoría'}
                  </span>
                </td>
                <td
                  style={{
                    padding: '16px 20px',
                    borderBottom: '1px solid #f1f5f9',
                    textAlign: 'center',
                  }}
                >
                  <button
                    className='btn btn-sm me-2'
                    onClick={() => handleEdit(product)}
                    style={{
                      background:
                        'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '6px 12px',
                      fontSize: '12px',
                      fontWeight: '500',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 2px 4px rgba(251, 191, 36, 0.3)',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-1px)';
                      e.target.style.boxShadow =
                        '0 4px 8px rgba(251, 191, 36, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow =
                        '0 2px 4px rgba(251, 191, 36, 0.3)';
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className='btn btn-sm'
                    onClick={() => handleDelete(product.id)}
                    style={{
                      background:
                        'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '6px 12px',
                      fontSize: '12px',
                      fontWeight: '500',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 2px 4px rgba(239, 68, 68, 0.3)',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-1px)';
                      e.target.style.boxShadow =
                        '0 4px 8px rgba(239, 68, 68, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow =
                        '0 2px 4px rgba(239, 68, 68, 0.3)';
                    }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal/Formulario para agregar/editar */}
      {showForm && (
        <div
          className='modal d-block'
          tabIndex='-1'
          style={{ background: 'rgba(0,0,0,0.5)' }}
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <form onSubmit={handleSubmit}>
                <div className='modal-header'>
                  <h5 className='modal-title'>
                    {editId ? 'Editar' : 'Agregar'} Producto
                  </h5>
                  <button
                    type='button'
                    className='btn-close'
                    onClick={() => setShowForm(false)}
                  ></button>
                </div>
                <div className='modal-body'>
                  <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                      name='title'
                      className='form-control'
                      value={form.title}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Precio</label>
                    <input
                      name='price'
                      type='number'
                      className='form-control'
                      value={form.price}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Descripción</label>
                    <textarea
                      name='description'
                      className='form-control'
                      value={form.description}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Imagen (URL)</label>
                    <input
                      name='images'
                      className='form-control'
                      value={form.images[0]}
                      onChange={(e) =>
                        setForm({ ...form, images: [e.target.value] })
                      }
                    />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Categoría ID</label>
                    <input
                      name='categoryId'
                      type='number'
                      className='form-control'
                      value={form.categoryId}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    onClick={() => setShowForm(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    type='submit'
                    className='btn btn-primary'
                    disabled={saving}
                  >
                    {saving ? 'Guardando...' : 'Guardar'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* Modal de éxito al agregar producto */}
      {showSuccess && createdProduct && (
        <div
          className='modal d-block'
          tabIndex='-1'
          style={{ background: 'rgba(0,0,0,0.5)' }}
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header bg-success text-white'>
                <h5 className='modal-title'>
                  ¡Producto agregado exitosamente!
                </h5>
                <button
                  type='button'
                  className='btn-close'
                  onClick={() => setShowSuccess(false)}
                ></button>
              </div>
              <div className='modal-body'>
                <p>
                  <strong>ID:</strong> {createdProduct.id ?? 'N/A'}
                </p>
                <p>
                  <strong>Nombre:</strong>{' '}
                  {createdProduct.title || 'Sin nombre'}
                </p>
                <p>
                  <strong>Precio:</strong> $
                  {createdProduct.price !== undefined &&
                  createdProduct.price !== null
                    ? createdProduct.price
                    : 'Sin precio'}
                </p>
                <p>
                  <strong>Categoría:</strong>{' '}
                  {createdProduct.category?.name ||
                    createdProduct.categoryId ||
                    'Sin categoría'}
                </p>
                <p>
                  <strong>Descripción:</strong>{' '}
                  {createdProduct.description || 'Sin descripción'}
                </p>
                {createdProduct.images && createdProduct.images[0] ? (
                  <img
                    src={createdProduct.images[0]}
                    alt='Producto'
                    style={{
                      maxWidth: '100%',
                      borderRadius: 8,
                      marginTop: 10,
                    }}
                  />
                ) : (
                  <div style={{ fontStyle: 'italic', color: '#888' }}>
                    Sin imagen
                  </div>
                )}
              </div>
              <div className='modal-footer'>
                <button
                  className='btn btn-success'
                  onClick={() => setShowSuccess(false)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProductList;
