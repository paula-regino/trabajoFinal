import './shared/styles/estiloLanding.css';

import { Navbar } from './shared/components/navbar.jsx';
import { Footer } from './shared/components/footer.jsx';
import { Carousel } from './features/home/components/carousel.jsx';
import { CardProducts } from './features/home/components/CardProducts.jsx';
import { NewsList } from './features/home/components/NewsList.jsx';
import { CartProvider } from './features/cart/hooks/CartContext';
import { Cart } from './features/cart/components/Cart';
import { LoginForm } from './features/auth/components/LoginForm.jsx';
import { RegisterForm } from './features/auth/components/RegisterForm.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProtectedAdminRoute } from './features/auth/components/ProtectedAdminRoute.jsx';
import DashboardPage from './features/auth/pages/DashboardPage.jsx';
import Catalogo from './pages/Catalogo.jsx';

function App() {
  return (
    <CartProvider>
      <Router basename='/projectReact1.2'>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route
                path='/'
                element={
                  <>
                    <Carousel />
                    <CardProducts limit={6} />
                    <NewsList />
                  </>
                }
              />
              <Route
                path='/admin'
                element={
                  <ProtectedAdminRoute>
                    <DashboardPage />
                  </ProtectedAdminRoute>
                }
              />
              <Route path='/login' element={<LoginForm />} />
              <Route path='/register' element={<RegisterForm />} />
              <Route path='/catalogo' element={<Catalogo />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Cart />
      </Router>
    </CartProvider>
  );
}

export default App;
